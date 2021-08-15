import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import Header from '../../Fixed Components/Header';
import { Button, Modal } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
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
function AddStudent() {

    const login = JSON.parse(localStorage.getItem("HOD"))

	const [op, setop] = useState(1)

	const [modal, setmodal] = useState(false);

	const [message, setmessage] = useState("")


	  const toggle = (state) =>{
		setmodal(!modal)
	  }

    const Location = useLocation()


    const [formdata,setformdata] = useState({
        id:Location.state!=undefined?Location.state.id:"",
        Fresh_ADP:Location.state!=undefined?Location.state.Fresh_ADP:"",
        Roll : Location.state!=undefined?Location.state.Roll:"",
        image : Location.state!=undefined?Location.state.image:"",
		Full_Name : Location.state!=undefined?Location.state.Full_Name:"",
		Father_Name : Location.state!=undefined?Location.state.Father_Name:"",
		Gender : Location.state!=undefined?Location.state.Gender:"",
		CNIC : Location.state!=undefined?Location.state.CNIC:"",
		DOB : Location.state!=undefined?Location.state.DOB:"",
		Email : Location.state!=undefined?Location.state.Email:"",
		Phone : Location.state!=undefined?Location.state.Phone:"",
		Guardian_Phone : Location.state!=undefined?Location.state.Guardian_Phone:"",
		Address : Location.state!=undefined?Location.state.Address:"",
		Domicile : Location.state!=undefined?Location.state.Domicile:"",
		Department : login!=null?login.Department:"",
		Matric_Roll : Location.state!=undefined?Location.state.Matric_Roll:"",
		Matric_Total : Location.state!=undefined?Location.state.Matric_Total:"",
		Matric_Obtained_Marks : Location.state!=undefined?Location.state.Matric_Obtained_Marks:"",
		Matric_Board : Location.state!=undefined?Location.state.Matric_Board:"",
		Matric_Year : Location.state!=undefined?Location.state.Matric_Year:"",
		Inter_Roll : Location.state!=undefined?Location.state.Inter_Roll:"",
		Inter_Total : Location.state!=undefined?Location.state.Inter_Total:"",
		Inter_Obtained_Marks : Location.state!=undefined?Location.state.Inter_Obtained_Marks:"",
		Inter_Year : Location.state!=undefined?Location.state.Inter_Year:"",
		Inter_Board : Location.state!=undefined?Location.state.Inter_Board:"",
		ADP_Roll : Location.state!=undefined?Location.state.ADP_Roll:"",
		ADP_Total : Location.state!=undefined?Location.state.ADP_Total:"",
		ADP_Obtained_Marks : Location.state!=undefined?Location.state.ADP_Obtained_Marks:"",
		ADP_Board : Location.state!=undefined?Location.state.ADP_Board:"",
		ADP_Year : Location.state!=undefined?Location.state.ADP_Year:"",
        Semester : Location.state!=undefined?Location.state.Semester:"",
        Shift : Location.state!=undefined?Location.state.Shift:"",
        Courses : Location.state!=undefined?Location.state.Courses:"",
        ROA : Location.state!=undefined?Location.state.ROA:"",
        HOD_Dues : Location.state!=undefined?Location.state.HOD_Dues:"",
	  });

	const Gender = [
		{ value: 'Male', label: 'Male', Name : "Gender" },
		{ value: 'Female', label: 'Female', Name : "Gender" },
	]

    // useEffect(()=>{
    //     setformdata(Location.state)
    // },[])
    

	axios.defaults.withCredentials = true

    const Semester = [
		{ value: '1', label: '1', Name : "Semester" },
		{ value: '2', label: '2', Name : "Semester" },
		{ value: '3', label: '3', Name : "Semester" },
		{ value: '4', label: '4', Name : "Semester" },
		{ value: '5', label: '5', Name : "Semester" },
		{ value: '6', label: '6', Name : "Semester" },
		{ value: '7', label: '7', Name : "Semester" },
		{ value: '8', label: '8', Name : "Semester" },
		{ value: '9', label: '9', Name : "Semester" },
		{ value: '10', label: '10', Name : "Semester" },
		{ value: '11', label: '11', Name : "Semester" },
		{ value: '12', label: '12', Name : "Semester" },
	]

    const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" },
	]

    const Fee_Status = [
		{ value: 'Paid', label: 'Paid', Name : "Fee_Status" },
		{ value: 'UnPaid', label: 'UnPaid', Name : "Fee_Status" },
	]



	const [validate,setvalidate] = useState("")
  
	  const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }
  
	  const changeselect = (e) => {
		setformdata({
		  ...formdata,
		  [e.Name] : e.value
		})
	  }

	  const [img, setimg] = useState(Location.state!=undefined?`http://localhost:3001/image/${Location.state.image}`:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
  
	  const [file, setfile] = useState(null)

	  const imageHandler = (e) => {

		const reader = new FileReader();
		reader.onload = () => {
			if(reader.readyState==2){
				setimg(reader.result)
			}
		}

		reader.readAsDataURL(e.target.files[0])


			setfile(e.target.files[0])
			setformdata({
				...formdata,
				image : String(new Date().valueOf()) + String(e.target.files[0].name)
			  })
	  }

	  const set = (e) => {
		setop(0.3)
		e.preventDefault()
		if(file!=null){
			var size = file.size
		}
		if (size>100000){
			setvalidate("Image Size Should be less than 100KB")
		}

		else{
		  axios.put(`http://localhost:3001/api/hod/editstudent`,formdata)
		  .then((res)=>{
			  if (res.data.message){
			  	setvalidate(res.data.message)
				  setmodal(true)
				  setop(1)
				  const formData = new FormData();
				  formData.append('image',file)
				  formData.append(String(formdata.image),file)
				  const config = {
					  headers:{
						  'content-type' : 'multipart/form-data',
					  },
				  };
				  
				  axios.post("http://localhost:3001/api/student/image",formData,config)
				  .then((res)=>{
				  })
				  .catch((err)=>{
					setvalidate("Something Went Wrong! Please Try Again After Sometime")
				  setmessage("Something Went Wrong! Please Try Again After Sometime")}
				  )

			  }
			  else{
				setvalidate(res.data)
				setmodal(true)
				setop(1)
			  }
			})
			.catch((err)=>{
				setvalidate("Something Went Wrong! Please Try Again After Sometime")
			  setmessage("Something Went Wrong! Please Try Again After Sometime")}
			  )
		}
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
			<div className="Student" style={{opacity:op}}>
				<div className="container">
					<form onSubmit={set}>
						<MDBCard style={{marginTop:30}} cascade narrow>
							<MDBRow>
								<MDBCol md='12'>
								<MDBView
									cascade
									className='gradient-card-header light-blue lighten-1'
								>
									<h4 className='h4-responsive mb-0 font-weight-bold'>Personal Information</h4>
								</MDBView>
									<MDBCardBody style={{paddingTop:30,paddingBottom:30}}>
										<div className="container">
											<div className="row">
												<div className="col-md-9">
													<div className="row">
														<div className="col-md-4">
															<p className="Admission_p">Roll# <span className="text-danger">*</span></p>
															<input value={formdata.Roll} className="Admission_Form_Input" onChange={change} type="text" name="Roll" placeholder="Roll#"/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Student's Name <span className="text-danger">*</span></p>
															<input value={formdata.Full_Name} className="Admission_Form_Input" style={{textTransform:"uppercase"}} onChange={change} type="text" name="Full_Name" placeholder="Student's Name" required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Father's Name <span className="text-danger">*</span></p>
															<input value={formdata.Father_Name} className="Admission_Form_Input" onChange={change} type="text" name="Father_Name" placeholder="Father's Name" required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Gender <span className="text-danger">*</span></p>
															<Select defaultInputValue={Location.state!=undefined?Location.state.Gender:""} className="Admission_Form_Select" onChange={changeselect} name="Gender" placeholder="Male/Female" options={Gender} required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">CNIC / B-Form <span className="text-danger">*</span></p>
															<input value={formdata.CNIC} className="Admission_Form_Input" maxLength="13" minLength="13" onChange={change} type="text" name="CNIC" placeholder="34601xxxxxxxx" required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Date Of Birth <span className="text-danger">*</span></p>
															<div className="form-group" id="datetime">
																<input value={formdata.DOB} className="Admission_Form_Input" onChange={change} type="text" name="DOB" required/>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-4">
															<p className="Admission_p">Email <span className="text-danger">*</span></p>
															<input value={formdata.Email} className="Admission_Form_Input" onChange={change} type="email" name="Email" placeholder="Email" required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Phone (WhatsApp) <span className="text-danger">*</span></p>
															<input value={formdata.Phone} className="Admission_Form_Input" onChange={change} type="text" name="Phone" placeholder="Phone (WhatsApp)" required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Guardian's Phone (WhatsApp) <span className="text-danger">*</span></p>
															<input value={formdata.Guardian_Phone} className="Admission_Form_Input" onChange={change} type="text" name="Guardian_Phone" placeholder="Guardian's (WhatsApp)" required/>
														</div>
													</div>
													<div className="row">
														<div className="col-md-4">
															<p className="Admission_p">Address <span className="text-danger">*</span></p>
															<input value={formdata.Address} className="Admission_Form_Input" onChange={change} type="text" name="Address" placeholder="Address" required/>
														</div>
														<div className="col-md-4">
															<p className="Admission_p">Domicile <span className="text-danger">*</span></p>
															<input value={formdata.Domicile} className="Admission_Form_Input" onChange={change} type="text" name="Domicile" placeholder="Domicile" required/>
														</div>
													</div>
												</div>
												<div className="col-md-3">
													<p className="Admission_p ml-2">Upload Picture <span className="text-danger">*</span></p>
													<img style={{marginTop:20}} src={img} height="120" width="120" alt="GMC" />
													<input style={{marginTop:10,color:"white"}} className="ml-3" type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler}/>
												</div>
											</div>
										</div>
									</MDBCardBody>
								</MDBCol>
							</MDBRow>
						</MDBCard>
						<MDBCard style={{marginTop:30}} cascade narrow>
							<MDBRow>
								<MDBCol md='12'>
								<MDBView
									cascade
									className='gradient-card-header light-blue lighten-1'
								>
									<h4 className='h4-responsive mb-0 font-weight-bold'>Matric / O-Level</h4>
								</MDBView>
									<MDBCardBody style={{paddingTop:30,paddingBottom:30}}>
										<div className="container">
											<div className="row">
												<div className="col-md-3">
													<p className="Admission_p">Roll <span className="text-danger">*</span></p>
													<input value={formdata.Matric_Roll} type="number" name="Matric_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Roll #" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Total Marks <span className="text-danger">*</span></p>
													<input value={formdata.Matric_Total} type="number" name="Matric_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Obtained Marks <span className="text-danger">*</span></p>
													<input value={formdata.Matric_Obtained_Marks} type="number" name="Matric_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Passing Year <span className="text-danger">*</span></p>
													<input value={formdata.Matric_Year} type="number" name="Matric_Year" onChange={change} className="Admission_Form_Input" placeholder="Passing Year" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Board <span className="text-danger">*</span></p>
													<input value={formdata.Matric_Board} name="Matric_Board" onChange={change} className="Admission_Form_Input" placeholder="Board" required/>
												</div>
											</div>
										</div>
									</MDBCardBody>
								</MDBCol>
							</MDBRow>
						</MDBCard>
						<MDBCard style={{marginTop:30}} cascade narrow>
							<MDBRow>
								<MDBCol md='12'>
								<MDBView
									cascade
									className='gradient-card-header light-blue lighten-1'
								>
									<h4 className='h4-responsive mb-0 font-weight-bold'>F.A / F.Sc / I.Com / ICS / A-Level</h4>
								</MDBView>
									<MDBCardBody style={{paddingTop:30,paddingBottom:30}}>
										<div className="container">
											<div className="row">
												<div className="col-md-3">
													<p className="Admission_p">Roll <span className="text-danger">*</span></p>
													<input value={formdata.Inter_Roll} type="number" name="Inter_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Roll #" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Total Marks <span className="text-danger">*</span></p>
													<input value={formdata.Inter_Total} type="number" name="Inter_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Obtained Marks <span className="text-danger">*</span></p>
													<input value={formdata.Inter_Obtained_Marks} type="number" name="Inter_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Passing Year <span className="text-danger">*</span></p>
													<input value={formdata.Inter_Year} type="number" name="Inter_Year" onChange={change} className="Admission_Form_Input" placeholder="Passing Year" required/>
												</div>
												<div className="col-md-3">
													<p className="Admission_p">Board <span className="text-danger">*</span></p>
													<input value={formdata.Inter_Board} className="Admission_Form_Input" onChange={change} name="Inter_Board" placeholder="Board" required/>
												</div>
											</div> 
										</div>
									</MDBCardBody>
								</MDBCol>
							</MDBRow>
						</MDBCard>
						{formdata.Fresh_ADP==="ADP"?
							<MDBCard style={{marginTop:30}} cascade narrow>
								<MDBRow>
									<MDBCol md='12'>
									<MDBView
										cascade
										className='gradient-card-header light-blue lighten-1'
									>
										<h4 className='h4-responsive mb-0 font-weight-bold'>B.A / B.Sc / ADP</h4>
									</MDBView>
										<MDBCardBody style={{paddingTop:30,paddingBottom:30}}>
											<div className="container">
												<div className="row">
													<div className="col-md-3">
														<p className="Admission_p">Roll</p>
														<input value={formdata.ADP_Roll} type="number" name="ADP_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Roll #" required/>
													</div>
													<div className="col-md-3">
														<p className="Admission_p">Total Marks/GPA</p>
														<input value={formdata.ADP_Total} type="number" name="ADP_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks/GPA" required/>
													</div>
													<div className="col-md-3">
														<p className="Admission_p">Obtained Marks/GPA</p>
														<input value={formdata.ADP_Obtained_Marks} type="text" name="ADP_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks/GPA" required/>
													</div>
													<div className="col-md-3">
														<p className="Admission_p">Passing Year</p>
														<input value={formdata.ADP_Year} type="number" name="ADP_Year" onChange={change} className="Admission_Form_Input" placeholder="Passing Year" required/>
													</div>
													<div className="col-md-3">
														<p className="Admission_p">Board</p>
														<input value={formdata.ADP_Board} className="Admission_Form_Input" onChange={change} name="ADP_Board" placeholder="Board" required/>
													</div>
												</div> 
											</div>
										</MDBCardBody>
									</MDBCol>
								</MDBRow>
							</MDBCard>:
							<div></div>}
							<MDBCard style={{marginTop:30}} cascade narrow>
								<MDBRow>
									<MDBCol md='12'>
									<MDBView
										cascade
										className='gradient-card-header light-blue lighten-1'
									>
										<h4 className='h4-responsive mb-0 font-weight-bold'></h4>
									</MDBView>
										<MDBCardBody style={{paddingTop:30,paddingBottom:30}}>
											<div className="row">
												<div className="col-md-4">
													<p className="Admission_p">Semester</p>
													<Select name="Semester" defaultInputValue={Location.state!=undefined?Location.state.Semester:""} onChange={changeselect} className="Admission_Form_Select" placeholder="Semester" options={Semester} required />
												</div>
												<div className="col-md-4">
													<p className="Admission_p">Shift</p>
													<Select name="Shift" defaultInputValue={Location.state!=undefined?Location.state.Shift:""} onChange={changeselect} className="Admission_Form_Select" placeholder="Shift" options={Shift} required />
												</div>
												<div className="col-md-4">
													<p className="Admission_p">Registered Courses</p>
													<textarea class="form-control" style={{marginTop:20}} onChange={change} value={formdata.Courses} id="exampleFormControlTextarea1" name="Courses" placeholder="Registered Courses" rows="3"></textarea>
												</div>
												<div className="col-md-4">
													<p className="Admission_p">Record of Achievements</p>
													<textarea class="form-control" style={{marginTop:20}} onChange={change} value={formdata.ROA} id="exampleFormControlTextarea1" name="ROA" placeholder="Record of Achievements" rows="3"></textarea>
												</div>
												<div className="col-md-4">
													<p className="Admission_p">Dues</p>
													<textarea class="form-control" style={{marginTop:20}} onChange={change} value={formdata.Dues} id="exampleFormControlTextarea1" name="HOD_Dues" placeholder="Dues" rows="3"></textarea>
												</div>
												<hr className="col-md-12" />
												<div className="col-md-12 d-flex justify-content-center">
													<div style={{marginLeft:-10}}><MDBBtn gradient="blue" type='submit' ><b>Update</b></MDBBtn></div>
												</div>
												<hr className="col-md-12" />
											</div>
										</MDBCardBody>
									</MDBCol>
								</MDBRow>
							</MDBCard>
					</form>
				</div>
			</div>
		<Footer/>
    </React.Fragment>
  );
}
export default AddStudent;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Update Student</Button>}
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