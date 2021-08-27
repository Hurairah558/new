import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import {Table } from 'semantic-ui-react';
import Footer from '../../Footer/Footer';
import { 
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBView,
	MDBBtn,
	MDBSpinner,
	MDBContainer, MDBModal, MDBModalHeader, MDBModalFooter,MDBModalBody
  } from 'mdbreact';
import { useLocation } from 'react-router';
function Profile() {

    const Location = useLocation()
    const [op, setop] = useState(1)
    const [message, setmessage] = useState("")
    const [modal, setmodal] = useState(false);

    const [validate,setvalidate] = useState("")


    const [msg, setmsg] = useState({
        Message:""
    })

	  const toggle = (state) =>{
		setmodal(!modal)
	  }


    const Reset = () => {
        setop(0.8)
        axios.post("http://localhost:3001/api/ro/student/reset",{id:Location.state.student.id}).then((res)=>{
            if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
            setop(1)
            setmodal(true)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setop(1)
		})
    }

    const sms = () => {
        setop(0.8)
        axios.get("http://localhost:3001/api/ro/sms/get").then((res)=>{
            

            axios.get(`http://192.168.0.${res.data.data[0].IP}:${res.data.data[0].Port}/SendSMS?username=${res.data.data[0].Username}&password=${res.data.data[0].Password}&phone=03075156558&message=${msg.Message}`).then((res)=>{
            
                console.log(res.data.data[0])
    
            })


        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setop(1)
		})
    }

    const change = (e) => {
        setmsg({...msg,[e.target.name]: e.target.value})
    }

    const toggles = (state) =>{
		setmodal(!modal)
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
            <MDBContainer>
				<MDBModal isOpen={modal} centered>
					<MDBModalHeader onClick={toggle}><h2><b>Response</b></h2></MDBModalHeader>
					<MDBModalBody onClick={toggle}>
						<h3><b>{validate}</b></h3>
					</MDBModalBody>
					<MDBModalFooter>
					<MDBBtn color="primary" onClick={toggle}>Close</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
            <MDBContainer>
				<MDBModal isOpen={modal} centered>
					<MDBModalHeader onClick={toggles}><h2><b>Message</b></h2></MDBModalHeader>
                        <div className="col-md-4">
                            <input className="Admission_Form_Input" onChange={change} type="text" name="Message" placeholder="Type Your Message" required/>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <MDBBtn gradient="peach" onClick={sms}><b>Send Message</b></MDBBtn>
                        </div>
					<MDBModalFooter>
					<MDBBtn color="primary" onClick={toggle}>Close</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
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
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>DOB</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Gender</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Department</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                                {/* <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Merit</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Roll}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Full_Name}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Father_Name}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.DOB}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Gender}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Department}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Shift}</td>
                                                {/* <td style={{fontWeight:'bold',textAlign:'center'}}>{parseFloat(Location.state.student.merit).toFixed(2)} %</td> */}
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
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Matric_Total}</td>
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
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.Inter_Total}</td>
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
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{Location.state.student.ADP_Total}</td>
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
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
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
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <MDBBtn gradient="blue" onClick={Reset}><b>Reset Password</b></MDBBtn>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <MDBBtn gradient="peach" onClick={toggles}><b>Send Message</b></MDBBtn>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
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