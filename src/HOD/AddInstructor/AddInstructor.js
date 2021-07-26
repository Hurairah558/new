import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import Header from '../../Fixed Components/Header';
import Select from 'react-select';
import { Button, Modal , Table } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
function AddInstructor() {

	const login = JSON.parse(localStorage.getItem("HOD"))

	const [data,setdata] = useState([])

	const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    const [formData, setFormData] = useState({
		Name : "",
		Email : "",
		Designation : "",
		Username: '',
		Password: '',
		Department: login.Department
	  })


	useEffect(()=>{
		axios.post("http://localhost:3001/api/hod/instructors",{Department:login.Department}).then((res)=>{
			setdata(res.data.data)
		}).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    },[])

	const update=()=>{
        axios.post("http://localhost:3001/api/hod/instructors",{Department:login.Department}).then((res)=>{
			setdata(res.data.data)
		}).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    }

	const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/instructors/${id}`).then((res)=>{
            update()
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    }

	const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

	const changeselect = (e) => {
		setFormData({...formData,[e.Name] : e.value})
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
			update()
		})
		.catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
	}

	const Designation = [
		{ value: 'Professor', label: 'Professor', Name : "Designation" },
		{ value: 'Associate professor', label: 'Associate professor', Name : "Designation" },
		{ value: 'Assistant professor', label: 'Assistant professor', Name : "Designation" },
		{ value: 'Lecturer', label: 'Lecturer', Name : "Designation" },
		{ value: 'CTI', label: 'CTI', Name : "Designation" }
	]

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
			<div className="Student">
                <div class="container">
					<div className="d-flex justify-content-center mt-4" >
						<div className="d-flex justify-content-center">
							<div id="Login_Form" className="align-bottom">
								<div className="signup">
									<form>
										<label name="chk" className="Login_Labels" aria-hidden="true">Add Instructor</label>
										<input className="Login_inputs" onChange={change} type="text" name="Name" placeholder="Name" value={formData.Full_Name} required=""/>
										<input className="Login_inputs" onChange={change} type="text" name="Email" placeholder="Email" value={formData.Email} required=""/>
										<Select className="Admission_Form_Select_Instrcutor ml-4" onChange={changeselect} name="Designation" placeholder="Designation" options={Designation} required />
										<input className="Login_inputs" onChange={change} type="text" name="Username" placeholder="Username" value={formData.Username} required=""/>
										<input className="Login_inputs" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
										<button className="Login_Button" onClick={Add} ><Modals validate={validate} /></button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<hr/>
					{data.length>0?
						<MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
							<MDBRow>
								<MDBCol md='12'>
									<MDBView
										cascade
										className='gradient-card-header light-blue lighten-1'
									>
										<h4 className='h4-responsive mb-0 font-weight-bold'>{login.Department} Instructors</h4>
									</MDBView>
									<MDBCardBody>
										<table className="table table-hover table-bordered">
											<thead>
												<tr>
													<th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
													<th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
													<th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor's Department</th>
													<th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor's Designation</th>
													<th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Delete</th>
												</tr>
											</thead>
											<tbody>
												{data.map((Instructor,index)=>{
												return (
													<tr key={index}>
														<td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
														<td style={{fontWeight:'bold',textAlign:'center'}}>{Instructor.Name}</td>
														<td style={{fontWeight:'bold',textAlign:'center'}}>{Instructor.Department}</td>
														<td style={{fontWeight:'bold',textAlign:'center'}}>{Instructor.Role}</td>
														<td style={{fontWeight:'bold',textAlign:'center'}}>
                                                        	<MDBBtn onClick={()=>Delete(Instructor.id)} gradient="peach"><b>Delete</b></MDBBtn>    
                                                    	</td>
													</tr>
												)})
												}
											</tbody>
										</table>
									</MDBCardBody>
								</MDBCol>
							</MDBRow>
						</MDBCard>
					:<div></div>}
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