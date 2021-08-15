import React, {useState} from 'react';
import './Login_Form_Design.css';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import Header from '../Student/Header/Header';
import Footer from '../Footer/Footer';
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

	axios.defaults.withCredentials = true

	const [op, setop] = useState(1)

	const [validate,setvalidate] = useState("")

	const [message, setmessage] = useState("")

	const [formData, setFormData] = useState({
		Username: '',
		Password: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

	const Login = (e) => {
		setop(0.8)
		e.preventDefault()
		axios.post("http://localhost:3001/api/login",{formData}).then((res)=>{
			if(res.data.LoggedIn){
				localStorage.setItem("HOD",`{"Designation":"${res.data.session.Designation}", "Department":"${res.data.session.Department}", "id":"${res.data.session.id}", "Name":"${res.data.session.Name}"}`)
				setlogin(localStorage.getItem("HOD"))
			}
			if (res.data){
				setvalidate(res.data.message)
			}
			else{
				setvalidate(res.data)
			}
			setmodal(true)
			setop(1)
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
			<Redirect to="/ao/dashboard" />
		   )
	}

	else if (String(login).includes("Teacher")){
		return(
			<Redirect to="/instructor/home" />
		   )
	}

	else if (String(login).includes("RO")){
		return(
			<Redirect to="/ro/dashboard" />
		   )
	}

	else if (String(login).includes("SSIO")){
		return(
			<Redirect to="/ssio/dashboard" />
		   )
	}

	else if (String(login).includes("Student")){
		return(
			<Redirect to="/student/profile" />
		   )
	}


	else if (String(login).includes("HOD")){
		return(
		 <Redirect to="hod/dashboard" />
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
								<input className="Login_input" onChange={change} type="text" name="Username" placeholder="Username" value={formData.Username} required/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required/>
								{/* <div style={{background:"transparent"}} className="Login_Button" onClick={Login} ><Modals validate={validate} /></div> */}
								<button type="submit" className="Login_Button" ><b>Login</b></button>
								<Link to="/forget/password"> <p className="Login_p" >Forget Password ?</p></Link>
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