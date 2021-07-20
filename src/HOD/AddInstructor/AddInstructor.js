import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Header from '../../Fixed Components/Header';
import { Button, Modal } from 'semantic-ui-react';
function AddInstructor() {

	const login = JSON.parse(localStorage.getItem("HOD"))

    const [formData, setFormData] = useState({
		Name : "",
		Email : "",
		Username: '',
		Password: '',
		Department: login.Department
	  })	

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

    const [validate,setvalidate] = useState("")

	const Add = (e) => {
		e.preventDefault()
		axios.post("http://localhost:3001/api/hod/addinstructor",formData).then((res)=>{
			if (res.data.message){
				setvalidate(res.data.message)
			}
			else{
			  setvalidate(res.data)
			}
		})
			.catch((err)=>{console.log(err)})
	}

    return (
        <React.Fragment>
            <Header/>
            <div className="d-flex justify-content-center mt-4" >
				<div className="d-flex justify-content-center">
					<div id="Login_Form" className="align-bottom">
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Add Instructor</label>
								<input className="Login_input" onChange={change} type="text" name="Name" placeholder="Name" value={formData.Full_Name} required=""/>
								<input className="Login_input" onChange={change} type="text" name="Email" placeholder="Email" value={formData.Email} required=""/>
								<input className="Login_input" onChange={change} type="text" name="Username" placeholder="Username" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
								<button className="Login_Button" onClick={Add} ><Modals validate={validate} /></button>
							</form>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default AddInstructor;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Add Instructor</Button>}
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