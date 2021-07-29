import React, {useState} from 'react';
import './Login_Form_Design.css';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import { Table , Button, Modal  } from 'semantic-ui-react';
import Header from '../Student/Header/Header';
import Footer from '../Footer/Footer';
function Login () {

	const [login,setlogin] = useState(localStorage.getItem("HOD"))

	axios.defaults.withCredentials = true

	const [validate,setvalidate] = useState("")

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
			<div className="d-flex justify-content-center mt-4" >
				<div className="d-flex justify-content-center">
					<div id="Login_Form" className="align-bottom">
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Login</label>
								<input className="Login_input" onChange={change} type="text" name="Username" placeholder="Username" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
								<div style={{background:"transparent"}} className="Login_Button" onClick={Login} ><Modals validate={validate} /></div>
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
				<h2 className="d-flex justify-content-center">{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
				<hr/>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }