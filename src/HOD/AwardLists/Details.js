import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Fixed Components/Header';
import { Table } from 'semantic-ui-react';

import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';

function Details() {


    const location = useLocation()

    const [data, setdata] = useState([{
        Department:"",
        Course_Title:"",
        Course_Code:"",
        Instructor:"",
        Fall_Spring:""
    }])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    useEffect(()=>{

        axios.post("http://localhost:3001/api/ssio/details",location.state.Course).then((res)=>{
			setdata(res.data.data)
		})
        .catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })

    },[])


    if(message!=""){
        return (
            <React.Fragment>
                <Header/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>{data[0].Department}&nbsp;&nbsp;&nbsp;{data[0].Course_Title}&nbsp;&nbsp;&nbsp;{data[0].Course_Code}&nbsp;&nbsp;&nbsp;Award List&nbsp;&nbsp;&nbsp;{data[0].Instructor}&nbsp;&nbsp;&nbsp;{data[0].Fall_Spring}</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell className="text-primary">Sr#</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Roll</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Name</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Mids</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Sessional</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Shift</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Fall / Spring</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((Student,index)=>{
                                                return(
                                                    <Table.Row key={index}>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{index+1}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Student.Roll}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Student.Name}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Student.Mids}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Student.Sessional}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Student.Shift}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Student.Fall_Spring}</Table.Cell>
                                                    </Table.Row>
                                            )
                                            })}
                                        </Table.Body>
                                    </Table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details;
