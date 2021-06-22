import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Header from '../../Fixed Components/Header';
function AddInstructor() {

    const [formData, setFormData] = useState({
		Username: '',
		Password: ''
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
		})
			.catch((err)=>{console.log(err)})
	}

    return (
        <React.Fragment>
            <Header/>
            <div className="d-flex justify-content-center mt-4" >
				<div className="d-flex justify-content-center">
					<div id="Login_Form" className="align-bottom">
                        <h1 className="text-white">{validate}</h1>
						<div className="signup">
							<form>
								<label name="chk" className="Login_Label" aria-hidden="true">Add Instructor</label>
								<input className="Login_input" onChange={change} type="text" name="Username" placeholder="User name" value={formData.Username} required=""/>
								<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
								<button className="Login_Button" onClick={Add} >Add</button>
							</form>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default AddInstructor;
