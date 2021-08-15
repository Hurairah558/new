import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Headerr from '../Student/Header/Header';
import {Link} from 'react-router-dom';
import { Header, Modal , Button } from 'semantic-ui-react';
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
function ResetPassword() {


    const [validate,setvalidate] = useState("")

    const [formData, setFormData] = useState({
		Email: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}


    const Login = (e) => {
		setop(0.8)
		e.preventDefault()
		axios.post("http://localhost:3001/api/forgetpassword",{formData}).then((res)=>{
			if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
            setFormData({...formData,
                Email: ''
            })
			setmodal(true)
			setop(1)
		})
		.catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setop(1)
		})
	}


	const [message, setmessage] = useState("")

	const [op, setop] = useState(1)

	const [modal, setmodal] = useState(false);


	  const toggle = (state) =>{
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
            <Headerr/>
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
            <div className="d-flex justify-content-center mt-4"  style={{opacity:op}}>
				<div className="d-flex justify-content-center" style={{opacity:op}}>
					<div id="Login_Form" className="align-bottom" style={{opacity:op}}>
						<div className="signup">
							<form onSubmit={Login} style={{opacity:op}}>
								<label name="chk" className="Login_Label" aria-hidden="true">Your Email</label>
								<input className="Login_input" onChange={change} type="email" name="Email" placeholder="Email" value={formData.Email} required/>
								<button className="Login_Button" type="submit" >Submit</button>
                                <Link to="/admin"> <p className="Login_p" >Go Login Page</p></Link>
							</form>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default ResetPassword;