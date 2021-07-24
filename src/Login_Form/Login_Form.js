import React, {useState} from 'react';
import './Login_Form_Design.css';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import Header from '../Student/Header/Header';
function Login () {

	const [login,setlogin] = useState(localStorage.getItem("HOD"))

	axios.defaults.withCredentials = true

	const [formData, setFormData] = useState({
		Username: '',
		Password: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

	const Login = (e) => {
		e.preventDefault()
		axios.post("http://localhost:3001/login",{formData}).then((res)=>{
			if(res.data.LoggedIn){
				localStorage.setItem("HOD",`{"Designation":"${res.data.session.Designation}", "Department":"${res.data.session.Department}", "id":"${res.data.session.id}", "Name":"${res.data.session.Name}"}`)
				setlogin(localStorage.getItem("HOD"))
			}
		})
			.catch((err)=>{console.log(err)})
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
		 <Redirect to="hod/dashboard" />
		)
	  }

	  else{

	return (
		<React.Fragment>
			<Header/>
			<div className="d-flex justify-content-center mt-4" >
				<div className="d-flex justify-content-center">
					<div id="Login_Form" className="align-bottom">
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Login</label>
								<input className="Login_input" onChange={change} type="text" name="Username" placeholder="User name" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
								<button className="Login_Button" onClick={Login} >Login</button>
								<Link to="/forget/password"> <p className="Login_p" >Forget Password ?</p></Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	  );
	}
}
export default Login;
