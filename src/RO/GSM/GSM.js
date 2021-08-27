import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
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

function GSM() {


    const [op, setop] = useState(1)
    const [message,setmessage] = useState("")

    const [validate,setvalidate] = useState("")

    const [modal, setmodal] = useState(false);


	  const toggle = (state) =>{
		setmodal(!modal)
	  }


    const [formdata,setformdata] = useState({
        IP: "",
        Port:"",
        Username: '',
        Password: ''
	  });


    const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }


    const setsms =(e)=>{
        e.preventDefault()
        setop(0.8)
        axios.post("http://localhost:3001/api/ro/sms",formdata).then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                setmodal(true)
			    setop(1)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
			    setop(1)
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
             <div className="Student">
                <div class="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Merit List Controller</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <form onSubmit={setsms}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p className="Admission_p">IP <span className="text-danger">*</span></p>
                                                <input className="Admission_Form_Input" onChange={change} type="text" name="IP" placeholder="IP" required/>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="Admission_p">Port <span className="text-danger">*</span></p>
                                                <input className="Admission_Form_Input" onChange={change} type="text" name="Port" placeholder="Port" required/>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="Admission_p">Username <span className="text-danger">*</span></p>
                                                <input className="Admission_Form_Input" onChange={change} type="text" name="Username" placeholder="Username" required/>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="Admission_p">Password <span className="text-danger">*</span></p>
                                                <input className="Admission_Form_Input" onChange={change} type="text" name="Password" placeholder="Password" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <MDBBtn gradient="blue" type="submit" style={{margin:'auto',display:'block',marginTop:20}}><b>Set GSM Credentials</b></MDBBtn>
                                            </div>
                                        </div>
                                    </form>
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

export default GSM
