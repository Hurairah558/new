import React,{useState,useEffect} from 'react';
import Header from '../../Fixed Components/Header';
import {Link ,Redirect} from 'react-router-dom';
import {
    MDBContainer,
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
        axios.post("http://localhost:3001/api/hod/students/dashboard",{Department:login.Department}).then((res)=>{
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
    <MDBContainer fluid id='v6'>
      <section style={{marginBottom:-100}} className='mr-4'>
      <MDBCard cascade narrow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1'
              >
                <h4 className='h4-responsive mb-0 font-weight-bold'>{login.Department}</h4>
              </MDBView>
              <MDBCardBody>
        <MDBRow>
          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
              <MDBRow className='mt-3'>
                <MDBCol md='5' size='5' className='text-left pl-4'>
                  <MDBBtn
                    tag='a'
                    floating
                    size='lg'
                    color='primary'
                    className='ml-4'
                    style={{ padding: 0 }}
                  >
                    <MDBIcon icon='database' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.length} </h5>
                  <b className='font-small'>Total Students</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>

          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='database' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Shift=="Morning").length}</h5>
                  <b className='font-small'>Morning Shift</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>

          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='database' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Shift=="Evening").length}</h5>
                  <b className='font-small'>Evening Shift</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>

          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='male' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Gender=="Male").length}</h5>
                  <b className='font-small'>Male Students</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='female' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Gender=="Female").length}</h5>
                  <b className='font-small'>Female Students</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='hiking' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Status=="Active").filter((student)=>student.Degree_Status=="Continue").length}</h5>
                  <b className='font-small'>Active Students</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
              <MDBRow className='mt-3'>
                <MDBCol md='5' col='5' className='text-left pl-4'>
                  <MDBBtn
                    tag='a'
                    floating
                    size='lg'
                    color='success'
                    className='ml-4'
                    style={{ padding: 0 }}>
                    <MDBIcon icon='graduation-cap' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Degree_Status=="Completed").length}</h5>
                  <b className='font-small'>Graduated</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='dollar-sign' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Fee_Status=="Paid").filter((student)=>student.Status=="Active").filter((student)=>student.Degree_Status=="Continue").length}</h5>
                  <b className='font-small'>Fee Paid Students</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol xl='3' md='6' className='mb-4 mb-r'>
            <MDBCard style={{paddingTop:30,paddingBottom:35}}>
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
                    <MDBIcon icon='dollar-sign' size='2x' />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='7' col='7' className='text-right pr-5'>
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Fee_Status=="Unpaid").filter((student)=>student.Status=="Active").filter((student)=>student.Degree_Status=="Continue").length}</h5>
                  <b className='font-small'>Unpaid Students</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <hr/>
      </section>
      <section style={{marginTop:-300}} className='mb-5'>
        <MDBCard cascade narrow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1'
              >
                <h4 className='h4-responsive mb-0 font-weight-bold'>Actions</h4>
              </MDBView>
              <MDBCardBody>

              <MDBRow>
              <MDBCol size="4">
                <Link to="/hod/students" className="nav-link" href="#">
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
                                    <MDBIcon icon='eye' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Students</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </Link>
                
              </MDBCol>


            <MDBCol size="4">

                    <Link to="/hod/timetablegenerate" className="nav-link text-white" href="#">
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
                                    <MDBIcon icon='clock' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Time Table Generate</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        </Link>
                
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/awardlists" className="nav-link text-white" href="#">
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
                                    <MDBIcon icon='file-alt' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Award Lists</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/attendancelist" className="nav-link text-white" href="#">
                    
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
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Attendance Lists</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/addstudent" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='user-plus' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Add Student</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/admissions" className="nav-link text-white" href="#">

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
                                    <MDBIcon icon='address-card' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Admissions</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/addinstructor" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='user-cog' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Add Instructor</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/addcourses" className="nav-link text-white" href="#">

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
                                    <MDBIcon icon='book-open' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Add Courses</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </MDBCol>
            
            <MDBCol size="4">
              
                
                    <Link to="/hod/assigncourses" className="nav-link text-white" href="#">

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
                                    <MDBIcon icon='edit' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Assign Courses</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                    </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/awardlist" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='baby-carriage' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Upload Award List</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/attendance" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='file-upload' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Upload Attendance</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        
                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/datesheet" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='file-export' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Datesheet Morning</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        
                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/datesheet2" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='file-export' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Datesheet Evening</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        
                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/meritlistcontroller" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='thumbs-up' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>MeritList Morning</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                            
                        </Link>
                
              
            </MDBCol>
            <MDBCol size="4">
              
                
                    <Link to="/hod/meritlistcontroller2" className="nav-link text-white" href="#">
                        
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
                                    <MDBIcon icon='thumbs-up' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>MeritList Evening</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        
                        </Link>
                
              
            </MDBCol>

            <MDBCol size="4">
              
                
                    <Link to="/hod/password/reset" className="nav-link text-white" href="#">
                        
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
                
              
            </MDBCol>

          </MDBRow>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
      </MDBContainer>
      </div>
      </React.Fragment>
  );
};

export default DV6;
