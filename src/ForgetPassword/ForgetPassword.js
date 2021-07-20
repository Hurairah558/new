import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Headerr from '../Student/Header/Header';
import {Link} from 'react-router-dom';
import { Header, Modal , Button } from 'semantic-ui-react';

function ResetPassword() {


    const [validate,setvalidate] = useState("")

    const [formData, setFormData] = useState({
		Email: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}


    const Login = (e) => {
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
		})
			.catch((err)=>{console.log(err)})
	}

    return (
        <React.Fragment>
            <Headerr/>
            <div className="d-flex justify-content-center mt-4" >
				<div className="d-flex justify-content-center">
					<div id="Login_Form" className="align-bottom">
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Your Email</label>
								<input className="Login_input" onChange={change} type="email" name="Email" placeholder="Email" value={formData.Email} required=""/>
								<button className="Login_Button" onClick={Login} ><Modals validate={validate} /></button>
                                <Link to="/login"> <p className="Login_p" >Go Login Page</p></Link>
							</form>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default ResetPassword;

function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Submit</Button>}
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