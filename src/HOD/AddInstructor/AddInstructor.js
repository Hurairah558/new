import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import Header from '../../Fixed Components/Header';
import Select from 'react-select';
import { Button, Modal , Table } from 'semantic-ui-react';
function AddInstructor() {

	const login = JSON.parse(localStorage.getItem("HOD"))

	const [data,setdata] = useState([])

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
		})
    },[])

	const update=()=>{
        axios.post("http://localhost:3001/api/hod/instructors",{Department:login.Department}).then((res)=>{
			setdata(res.data.data)
		})
    }

	const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/instructors/${id}`).then((res)=>{
            update()
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
			.catch((err)=>{console.log(err)})
	}

	const Designation = [
		{ value: 'Professor', label: 'Professor', Name : "Designation" },
		{ value: 'Associate professor', label: 'Associate professor', Name : "Designation" },
		{ value: 'Assistant professor', label: 'Assistant professor', Name : "Designation" },
		{ value: 'Lecturer', label: 'Lecturer', Name : "Designation" },
		{ value: 'CTI', label: 'CTI', Name : "Designation" }
	]

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
										<label name="chk" className="Login_Label" aria-hidden="true">Add Instructor</label>
										<input className="Login_input" onChange={change} type="text" name="Name" placeholder="Name" value={formData.Full_Name} required=""/>
										<input className="Login_input" onChange={change} type="text" name="Email" placeholder="Email" value={formData.Email} required=""/>
										<Select className="Admission_Form_Select ml-4" onChange={changeselect} name="Designation" placeholder="Designation" options={Designation} required />
										<input className="Login_input" onChange={change} type="text" name="Username" placeholder="Username" value={formData.Username} required=""/>
										<input className="Login_input" onChange={change} type="Password" name="Password" placeholder="Password" value={formData.Password} required=""/>
										<button className="Login_Button" onClick={Add} ><Modals validate={validate} /></button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<hr/>
					{data.length>0?
						<>
							<h1>Currently Displaying Instructors</h1>
							<div class="row">
								<div className="col-md-12">
									<Table celled selectable>
										<Table.Header>
											<Table.Row>
												<Table.HeaderCell>Sr#</Table.HeaderCell>
												<Table.HeaderCell>Instructor</Table.HeaderCell>
												<Table.HeaderCell>Instructor's Department</Table.HeaderCell>
												<Table.HeaderCell>Instructor's Designation</Table.HeaderCell>
												<Table.HeaderCell>Delete</Table.HeaderCell>
											</Table.Row>
										</Table.Header>
										<Table.Body>
											{data.map((Instructor,index)=>{
											return (
												<Table.Row key={index}>
													<Table.Cell>{index+1}</Table.Cell>
													<Table.Cell>{Instructor.Name}</Table.Cell>
													<Table.Cell>{Instructor.Department}</Table.Cell>
													<Table.Cell>{Instructor.Role}</Table.Cell>
													<Table.Cell><button className="btn btn-danger" onClick={()=>Delete(Instructor.id)} >Delete</button></Table.Cell>
												</Table.Row>
											)})
											}
										</Table.Body>
									</Table>
								</div>
							</div>
						</>
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