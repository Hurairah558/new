import React, {useState,useEffect} from 'react';
import './Login_Form_Design.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Set_Login_Status , Set_Login_Type , Session_Data } from '../redux/actions/Login_Status_Actions';
function Login () {

	const dispatch = useDispatch();

	axios.defaults.withCredentials = true

	const IsLogin = useSelector((state)=>state.Login.IsLogin)


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
				dispatch(Set_Login_Status(res.data.LoggedIn))
				dispatch(Set_Login_Type(res.data.HOD))
				console.log(res.data.session)
				dispatch(Session_Data(res.data.session))
			}
		})
			.catch((err)=>{console.log(err)})
	}

	useEffect(() => {
		axios.get("http://localhost:3001/loginstatus").then((res)=>{
		  if(res.data.LoggedIn==true){
			dispatch(Set_Login_Status(res.data.LoggedIn))
			dispatch(Set_Login_Type(res.data.HOD))
		}
			})
		.catch((err)=>{
		  console.log(err)
		})
	  },[]);

	if (IsLogin){
		return(
		 <Redirect to="/" />
		)
	  }
	  else{
	return (
		<React.Fragment>
			<div className="Student" >
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
