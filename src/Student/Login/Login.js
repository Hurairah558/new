import React, {useState} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import { Table , Button, Modal  } from 'semantic-ui-react';
function Login () {


	const [login,setlogin] = useState(localStorage.getItem("HOD"))

	const [validate,setvalidate] = useState("")

	axios.defaults.withCredentials = true

	const [formData, setFormData] = useState({
		Email: '',
		Password: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

	const Login = (e) => {
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
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Login</label>
								<input className="Login_input" onChange={change} type="Email" name="Email" placeholder="Username" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
								<div style={{background:"transparent"}} className="Login_Button" onClick={Login} ><Modals validate={validate} /></div>
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

function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<button className="Login_Button w-100" ><b>Login</b></button>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 className="d-flex justify-content-center">{String(props.validate).replaceAll('"',"").replaceAll('_'," ").replaceAll("Email","Username")}</h2>
				<hr/>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }