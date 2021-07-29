import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Fixed Components/Header';
import { Table } from 'semantic-ui-react';
import Footer from '../../Footer/Footer';
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

    const login = JSON.parse(localStorage.getItem("HOD"))


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

        axios.post("http://localhost:3001/api/ssio/details",JSON.stringify(login).includes("HOD")?location.state.Course:"").then((res)=>{
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
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Mids</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sessional</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Fall / Spring</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((Student,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Roll}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Name}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Mids}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Sessional}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Shift}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Semester}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Fall_Spring}</td>
                                                    </tr>
                                            )
                                            })}
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Details;
