import React, {useState} from 'react';
import './Login_Form_Design.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Header from '../Student/Header/Header';
function Login () {

	const checklog = localStorage.getItem("HOD")


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
				localStorage.setItem("HOD",res.data.session.Department)
				setlogin(localStorage.getItem("HOD"))
			}
		})
			.catch((err)=>{console.log(err)})
	}

	if (login==="Teacher"){
		return(
			<Redirect to="/instructor/home" />
		   )
	}

	if (login==="RO"){
		return(
			<Redirect to="/ro/students" />
		   )
	}

	if (login==="SSIO"){
		return(
			<Redirect to="/ssio/freeinstructors" />
		   )
	}


	if (login!=null){
		return(
		 <Redirect to="/hod/students" />
		)
	  }
	  else{
	return (
		<React.Fragment>
			<Header/>
			<div className="d-flex justify-content-center mt-4" >
				<div className="d-flex justify-content-center">
					<div id="Login_Form" className="align-bottom">
						<input type="checkbox" id="chk" aria-hidden="true"/>
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Login</label>
								<input className="Login_input" onChange={change} type="text" name="Username" placeholder="User name" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
								<button className="Login_Button" onClick={Login} >Login</button>
								<p className="Login_p" >Forget Password ?</p>
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
