import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../../Fixed Components/Header';
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
function ResetPassword() {

    var login = JSON.parse(localStorage.getItem("HOD"))

    const [validate,setvalidate] = useState("")

	const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

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
		setop(0.8)
		e.preventDefault()
		axios.put("http://localhost:3001/api/change/login",{formData}).then((res)=>{
			if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
			setmodal(true)
			setop(1)
            setFormData({...formData,
                id: login!=null?login.id:"",
                OldUsername: '',
                OldPassword: '',
                Username: '',
                Password: ''
            })
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
								<label name="chk" className="Login_Label" aria-hidden="true">Change</label>
								<input className="Login_input" onChange={change} type="text" name="OldUsername" placeholder="Old Username" value={formData.OldUsername} required/>
								<input className="Login_input" onChange={change} type="Password" name="OldPassword" placeholder="Old Password" value={formData.OldPassword} required/>
                                <input className="Login_input" onChange={change} type="text" name="Username" placeholder="New Username" value={formData.Username} required/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="New Password" value={formData.Password} required/>
								<button className="Login_Button" type="submit" >Change</button>
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