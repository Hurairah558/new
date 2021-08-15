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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='primary'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='sign-in-alt' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='primary'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='user-circle' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='secondary'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='desktop' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='danger'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='bell' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='warning'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='concierge-bell' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='info'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-export' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='info'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-export' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='success'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-archive' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                            <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                                <MDBBtn
                                    tag='a'
                                    floating
                                    size='lg'
                                    color='success'
                                    style={{ padding: 0 }}
                                >
                                    <MDBIcon icon='file-archive' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
                    <MDBCol md='5' col='5' className='text-left pl-4 d-flex justify-content-center'>
                        <MDBBtn
                            tag='a'
                            floating
                            size='lg'
                            color='danger'
                            style={{ padding: 0 }}
                        >
                            <MDBIcon icon='cogs' size='2x' />
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol md='7' col='7' className='d-flex justify-content-center'>
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
        <MDBCard style={{marginTop:30}}cascade narrow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1'
              >
                <h4 className='h4-responsive mb-0 font-weight-bold'>Govt. Murray College Sialkot</h4>
              </MDBView>
              <MDBCardBody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p text-primary">Principal</h2>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="200" height="200"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p mt-2">Dr. ---</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p text-primary">Vice Principal</h2>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="200" height="200" src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p mt-2">Professor ---</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <MDBCard style={{marginTop:30}}cascade narrow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1'
              >
                <h4 className='h4-responsive mb-0 font-weight-bold'>HODs</h4>
              </MDBView>
              <MDBCardBody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of BBA</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Botany</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor -----</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Chemistry</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ------</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Economics</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor -----</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of English</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Physics</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ----</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Pol. Science</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Psychology</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor -----</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Mathematics</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Statistics</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of IT</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100" src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Islamiyat</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ---</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Urdu</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ----</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p text-primary">HOD of Zoology</h4>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100"src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h4 className="Admission_p mt-2">Professor ----</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <MDBCard style={{marginTop:30}}cascade narrow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1'
              >
                <h4 className='h4-responsive mb-0 font-weight-bold'>Developed By</h4>
              </MDBView>
              <MDBCardBody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p text-primary">Supervisor</h2>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100" src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p mt-2">Professor ---</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p text-primary">Developer</h2>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img className="mt-4" width="100" height="100" src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <h2 className="Admission_p mt-2">Name ---</h2>
                                </div>
                            </div>
                        </div>
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
      <Footer/>
      </React.Fragment>
  );
}

export default ButtonPage;
