import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Fixed Components/Header';
import Select from 'react-select';
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

function AwardLists() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [data, setdata] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)
    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/awardlists",{Department:login.Department}).then((res)=>{
			setdata(res.data.data)
		})
        .catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    },[])


    const Fall_Spring = [
		{ value: 'Fall-2021', label: 'Fall-2021', Name : "Fall_Spring" },
		{ value: 'Spring-2021', label: 'Spring-2021', Name : "Fall_Spring" },
		{ value: 'Fall-2022', label: 'Fall-2022', Name : "Fall_Spring" },
		{ value: 'Spring-2022', label: 'Spring-2022', Name : "Fall_Spring" },
		{ value: 'Fall-2023', label: 'Fall-2023', Name : "Fall_Spring" },
		{ value: 'Spring-2023', label: 'Spring-2023', Name : "Fall_Spring" },
		{ value: 'Fall-2024', label: 'Fall-2024', Name : "Fall_Spring" },
		{ value: 'Spring-2024', label: 'Spring-2024', Name : "Fall_Spring" },
		{ value: 'Fall-2025', label: 'Fall-2025', Name : "Fall_Spring" },
		{ value: 'Spring-2025', label: 'Spring-2025', Name : "Fall_Spring" },
		{ value: 'Fall-2026', label: 'Fall-2026', Name : "Fall_Spring" },
		{ value: 'Spring-2026', label: 'Spring-2026', Name : "Fall_Spring" },
		{ value: 'Fall-2027', label: 'Fall-2027', Name : "Fall_Spring" },
		{ value: 'Spring-2027', label: 'Spring-2021', Name : "Fall_Spring" },
	]

    const changeselects = (e) => {
        axios.post("http://localhost:3001/api/hod/awardlists",{Fall_Spring:e.value,Department:login.Department}).then((res)=>{
            setdata(res.data.data)
    }).catch((err)=>{
        setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
    }

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
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Fall / Spring</h4>
                            </MDBView>
                                <MDBCardBody>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Select className="Admission_Form_Select w-100" onChange={changeselects} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>
                                    </div>
                                    
                                <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    {data.length>0?
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                    <MDBRow>
                        <MDBCol md='12'>
                        <MDBView
                            cascade
                            className='gradient-card-header light-blue lighten-1'
                        >
                            <h4 className='h4-responsive mb-0 font-weight-bold'>Award Lists</h4>
                        </MDBView>
                            <MDBCardBody>
                            <Table style={{textAlign:"center"}} celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell className="text-primary">Sr#</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Instructor</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Course Title</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Course Code</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Shift</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Semester</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">Fall / Spring</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary">View</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>         
                                            {data.map((Course,index)=>{
                                                return (
                                                    <Table.Row key={index}>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{index+1}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Course.Instructor}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Course.Course_Title}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Course.Course_Code}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Course.Shift}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Course.Semester}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{Course.Fall_Spring}</Table.Cell>
                                                        <Table.Cell ><Link to={{pathname:"/hod/awardlistdetails",state:{Course}}} ><MDBBtn gradient="blue"><b>View</b></MDBBtn></Link></Table.Cell>
                                                    </Table.Row>
                                            )})
                                            }
                                        </Table.Body>
                                    </Table>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:150}} >Nothing to Show...</h1>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AwardLists;
