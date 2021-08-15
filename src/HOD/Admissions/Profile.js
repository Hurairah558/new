import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../../Fixed Components/Header';
import {Table } from 'semantic-ui-react';
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
import { useLocation } from 'react-router';
function Profile() {

    const Location = useLocation()

    var login = JSON.parse(localStorage.getItem("HOD"))
    const [op, setop] = useState(1)

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
                                    <div className="row d-flex justify-content-center mb-2">
                                        <div className="col-md-12 d-flex justify-content-center">
                                            <img width="180" height="180"  src={`http://localhost:3001/image/${Location.state.student.image}`}/>
                                        </div>
                                    </div>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Status</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>DOB</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Gender</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Department</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Merit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Fresh_ADP}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Full_Name}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Father_Name}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.DOB}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Gender}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Department}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Shift}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{parseFloat(Location.state.student.merit).toFixed(2)} %</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Email</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Address</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Phone (WhatsApp)</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Guardian (WhatsApp)</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>CNIC / B-Form</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Domicile</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Email}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Address}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Phone}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Guardian_Phone}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.CNIC}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Domicile}</td>
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
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Matric / O-Level</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Total Marks</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Obtained Marks</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Passing Year</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Board</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Matric_Roll}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Matric_Total_Marks}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Matric_Obtained_Marks}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Matric_Year}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Matric_Board}</td>
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
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>F.A / F.Sc / I.Com / ICS / A-Level</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Total Marks</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Obtained Marks</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Passing Year</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Board</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Inter_Roll}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Inter_Total_Marks}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Inter_Obtained_Marks}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Inter_Year}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Inter_Board}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    {Location.state.student.Fresh_ADP==="ADP"?
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>B.A / B.Sc / ADP</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Total Marks / CGPA</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Obtained Marks / CGPA</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Passing Year</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Board / University</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.ADP_Roll}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.ADP_Total_Marks}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.ADP_Obtained_Marks}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.ADP_Year}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.ADP_Board}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    :<div></div>}
                    {/* <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
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
                                        {String(login!=null?data.Courses:"").split(",").map((coursess,index)=>{
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
                    </MDBCard> */}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Profile;