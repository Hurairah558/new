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
                <h4 className='h4-responsive mb-0 font-weight-bold'>Accounts Office Dashboard</h4>
              </MDBView>
              <MDBCardBody>
        <div className="row">
          <div className="col-md-3">
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
          </div>
          <div className="col-md-3">
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
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Status==="Active").filter((student)=>student.Shift==="Morning").length}</h5>
                  <b className='font-small'>Morning Shift</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          <div className="col-md-3">
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
                  <h5 className='ml-4 mt-4 mb-2 font-weight-bold mr-4'>{data.filter((student)=>student.Status==="Active").filter((student)=>student.Shift==="Evening").length}</h5>
                  <b className='font-small'>Evening Shift</b>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          <div className="col-md-3">
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
          </div>
          <div className="col-md-3">
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
          </div>
          <div className="col-md-3">
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
          </div>
          <div className="col-md-3">
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
          </div>
        </div>
        </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <hr/>
      </div>
    <div className="col-md-12">
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

              <div className="row">
              <div className="col-md-4">
                <Link to="/ao/feemanagement" className="nav-link" href="#">
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
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Students Morning</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </Link>
                
              </div>


            <div className="col-md-4">

                    <Link to="/ao/feemanagement2" className="nav-link text-white" href="#">
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
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Students Evening</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        </Link>
                
            </div>
            <div className="col-md-4">
              
                
                    <Link to="/ao/feerecord" className="nav-link text-white" href="#">
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
                                    <MDBIcon icon='save' size='2x' />
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='7' col='7'>
                                <h5 style={{marginTop:30,color:'black'}} className='font-weight-bold'>Fee Record</h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                        </Link>
                
              
            </div>

            <div className="col-md-4">
              
                
                    <Link to="/ao/password/reset" className="nav-link text-white" href="#">
                        
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
