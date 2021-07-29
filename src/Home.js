import Header from './Student/Header/Header';
import {Link} from 'react-router-dom';
import Footer from './Footer/Footer';

import React,{useState,useEffect} from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBView
} from 'mdbreact';

const ButtonPage = () => {

    const [login,setlogin] = useState(JSON.parse(localStorage.getItem("HOD")))

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
                <h4 className='h4-responsive mb-0 font-weight-bold'>Govt. Murray College Sialkot</h4>
              </MDBView>
              <MDBCardBody>

              <div className="row">
              { login==null?
              <div className="col-md-4">
                <Link to="/login" className="nav-link" href="#">
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
                                    <MDBIcon icon='sign-in-alt' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Login</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </Link>
                
              </div>:
                <div className="col-md-4">
                <Link to="/student/profile" className="nav-link" href="#">
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
                                    <MDBIcon icon='user-circle' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Profile</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </Link>
                </div>
              }


            <div className="col-md-4">

                    <Link to="/admissionform" className="nav-link text-white" href="#">
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
                                    <MDBIcon icon='desktop' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Admission form</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        </Link>
                
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/student/announcements" className="nav-link text-white" href="#">
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
                                    <MDBIcon icon='bell' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Announcements</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        </Link>
                
              
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/student/timetable" className="nav-link text-white" href="#">
                    
                    <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                        <MDBRow className='mt-3'>
                            <MDBCol md='5' col='5' className='text-left pl-4'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='warning'
                                    className='ml-4'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='concierge-bell' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Time Table</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/student/datesheet" className="nav-link text-white" href="#">
                        
                    <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                        <MDBRow className='mt-3'>
                            <MDBCol md='5' col='5' className='text-left pl-4'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='info'
                                    className='ml-4'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-export' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Datesheet Morning</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                        </Link>
                
              
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/student/datesheet2" className="nav-link text-white" href="#">

                    <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                        <MDBRow className='mt-3'>
                            <MDBCol md='5' col='5' className='text-left pl-4'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='info'
                                    className='ml-4'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-export' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Datesheet Evening</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/student/meritlist" className="nav-link text-white" href="#">
                        
                    <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                        <MDBRow className='mt-3'>
                            <MDBCol md='5' col='5' className='text-left pl-4'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='success'
                                    className='ml-4'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-archive' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Merit List Morning</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                        </Link>
                
              
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/student/meritlist2" className="nav-link text-white" href="#">

                    <MDBCard className="panel" style={{paddingTop:20,paddingBottom:35}}>
                        <MDBRow className='mt-3'>
                            <MDBCol md='5' col='5' className='text-left pl-4'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='success'
                                    className='ml-4'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-archive' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Merit List Evening</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </div>
            { login!=null?
            <div className="col-md-4">
              
                
            <Link to="/student/reset/password" className="nav-link text-white" href="#">

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
        
      
    </div>:<div></div>}

          </div>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
      </div>
        </div>
      </div>
      <Footer/>
      </React.Fragment>
  );
}

export default ButtonPage;
