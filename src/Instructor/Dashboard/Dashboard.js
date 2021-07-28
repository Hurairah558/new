import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import {Link } from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBView
} from 'mdbreact';
import axios from 'axios';

const DV6 = () => {

    var login = JSON.parse(localStorage.getItem("HOD"))

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3001/api/ao/dashboard").then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[])


    if(loading){
        return (
            <React.Fragment>
                <Header/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Loading...</h1>
            </React.Fragment>
        )
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
      <div className="container">
    <div className="row">
      <div className="col-md-12">
          <MDBCard cascade narrow>
            <MDBRow>
              <MDBCol md='12'>
                <MDBView
                  cascade
                  className='gradient-card-header light-blue lighten-1'
                >
                  <h4 className='h4-responsive mb-0 font-weight-bold'>Instructor's Dashboard</h4>
                </MDBView>
                <MDBCardBody>

                <div className="row d-flex justify-content-center">
                  <div className="col-md-4">
                    <Link to="/instructor/awardlist" className="nav-link" href="#">
                        <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                            <MDBRow className='mt-3'>
                                <MDBCol md='5' col='5' className='text-left pl-4'>
                                    <MDBBtn
                                        tag='a'
                                        floating
                                        size='lg'
                                        color='primary'
                                        className='ml-4'
                                        style={{ padding: 0 }}
                                    >
                                        <MDBIcon icon='user' size='2x' />
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol md='7' col='7'>
                                    <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Upload Award List</h5>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </Link>
                    
                  </div>


                  <div className="col-md-4">

                      <Link to="/instructor/attendance" className="nav-link text-white" href="#">
                        <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                            <MDBRow className='mt-3'>
                                <MDBCol md='5' col='5' className='text-left pl-4'>
                                    <MDBBtn
                                        tag='a'
                                        floating
                                        size='lg'
                                        color='secondary'
                                        className='ml-4'
                                        style={{ padding: 0 }}
                                    >
                                        <MDBIcon icon='user' size='2x' />
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol md='7' col='7'>
                                    <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Upload Attendance</h5>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                      </Link>
                      
                  </div>
                  <div className="col-md-4">
              
                
                    <Link to="/instructor/password/reset" className="nav-link text-white" href="#">
                        
                    <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                        <MDBRow className='mt-3'>
                            <MDBCol md='5' col='5' className='text-left pl-4'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='danger'
                                    className='ml-4'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='cogs' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Change Password</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                        </Link>
                
              
            </div>
                </div>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
      </div>
        </div>
      </div>
      </React.Fragment>
  );
};

export default DV6;
