import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import {Table } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
function Profile() {

    var login = JSON.parse(localStorage.getItem("HOD"))
    const [op, setop] = useState(1)

    const [data, setdata] = useState({})
    useEffect(() => {
        axios.post("http://localhost:3001/api/student/profile",{id:login.id}).then((res)=>{
                setdata(res.data.data)
            })
        .catch((err)=>{
        console.log(err)
        })
    },[]);

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div className="container pt-4">
                    <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Personal Information</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>DOB</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Gender</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Roll}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Full_Name}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Father_Name}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.DOB}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Gender}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Other Information</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Email</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Address</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Department</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Email}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Address}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Department}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Semester}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{data.Shift}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Registerd Courses</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {String(data.Courses).split(",").map((coursess,index)=>{
                                            return(
                                            <tr key={index}>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{coursess.split(":")[0]}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{coursess.split(":")[1]}</td>
                                            </tr>)
                                        })}
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;
