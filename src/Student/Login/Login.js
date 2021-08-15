import React, {useState} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
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
function Login () {


	const [login,setlogin] = useState(localStorage.getItem("HOD"))

	const [validate,setvalidate] = useState("")

	const [op, setop] = useState(1)

	const [message, setmessage] = useState("")

	axios.defaults.withCredentials = true

	const [formData, setFormData] = useState({
		Email: '',
		Password: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

	const Login = (e) => {
		setop(0.8)
		e.preventDefault()
		axios.post("http://localhost:3001/api/student/login",{formData}).then((res)=>{
			if(res.data.LoggedIn){
				localStorage.setItem("HOD",`{"Designation":"${res.data.session.Designation}", "id":"${res.data.session.id}"}`)
				setlogin(localStorage.getItem("HOD"))
			}
			if (res.data.message){
				setvalidate(res.data.message)
			}
			else{
			  setvalidate(res.data)
			}
			setop(1)
			setmodal(true)
		})
		.catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setop(1)
		})
	}


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

    if (String(login).includes("AO")){
		return(
			<Redirect to="/ao/feemanagement" />
		   )
	}

	else if (String(login).includes("Teacher")){
		return(
			<Redirect to="/instructor/home" />
		   )
	}

	else if (String(login).includes("RO")){
		return(
			<Redirect to="/ro/students" />
		   )
	}

	else if (String(login).includes("SSIO")){
		return(
			<Redirect to="/ssio/freeinstructors" />
		   )
	}

	else if (String(login).includes("Student")){
		return(
			<Redirect to="/student/profile" />
		   )
	}


	else if (String(login).includes("HOD")){
		return(
		 <Redirect to="/hod/students" />
		)
	  }

	  else{

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
			<div className="d-flex justify-content-center mt-4"  style={{opacity:op}}>
				<div className="d-flex justify-content-center" style={{opacity:op}}>
					<div id="Login_Form" className="align-bottom" style={{opacity:op}}>
						<div className="signup">
							<form onSubmit={Login} style={{opacity:op}}>
								<label name="chk" className="Login_Label" aria-hidden="true">Login</label>
								<input className="Login_input" onChange={change} type="Email" name="Email" placeholder="Username" value={formData.Username} required/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required/>
								<div style={{background:"transparent"}} className="Login_Button" ><button className="Login_Button w-100" ><b>Login</b></button></div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</React.Fragment>
	  );
	}
}
export default Login;