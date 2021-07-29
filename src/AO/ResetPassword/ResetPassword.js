import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import { Modal , Button } from 'semantic-ui-react';
import Footer from '../../Footer/Footer';

function ResetPassword() {

    var login = JSON.parse(localStorage.getItem("HOD"))

    const [validate,setvalidate] = useState("")

    const [formData, setFormData] = useState({
        id: login!=null?login.id:"",
        OldUsername: '',
        OldPassword: '',
		Username: '',
		Password: ''
	  })

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}


    const Login = (e) => {
		e.preventDefault()
		axios.put("http://localhost:3001/api/change/login",{formData}).then((res)=>{
			if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
            setFormData({...formData,
                id: login!=null?login.id:"",
                OldUsername: '',
                OldPassword: '',
                Username: '',
                Password: ''
            })
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
								<label name="chk" className="Login_Label" aria-hidden="true">Change</label>
								<input className="Login_input" onChange={change} type="text" name="OldUsername" placeholder="Old Username" value={formData.OldUsername} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="OldPassword" placeholder="Old Password" value={formData.OldPassword} required=""/>
                                <input className="Login_input" onChange={change} type="text" name="Username" placeholder="New Username" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="New Password" value={formData.Password} required=""/>
								<button className="Login_Button" onClick={Login} ><Modals validate={validate} /></button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
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
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Change</Button>}
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