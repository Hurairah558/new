import React,{useState,useEffect} from 'react';
import './Admission_Form_Design.css';
import Select from 'react-select';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import { Button, Modal } from 'semantic-ui-react';
import { 
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBView,
	MDBBtn
  } from 'mdbreact';
function Admission_Form() {

	const [Loading, setLoading] = useState(true)

	const [open, setopen] = useState(false)

	const [message, setmessage] = useState("Admission Closed")

	useEffect(()=>{
		axios.get("http://localhost:3001/api/ro/admission_control/").then((res)=>{
			if (res.data.data[0].Open === "Open"){
				setopen(true)
			}
			setLoading(false)
		})
		.catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setLoading(false)
		})
	})

	const Gender = [
		{ value: 'Male', label: 'Male', Name : "Gender" },
		{ value: 'Female', label: 'Female', Name : "Gender" },
	]
	
	axios.defaults.withCredentials = true

	const [validate,setvalidate] = useState("")
	
	const Department = [
		{ value: 'BBA', label: 'BBA', Name : "Department" },
		{ value: 'Botany', label: 'Botany', Name : "Department" },
		{ value: 'Chemistry', label: 'Chemistry', Name : "Department" },
		{ value: 'Economics', label: 'Economics', Name : "Department" },
		{ value: 'English', label: 'English', Name : "Department" },
		{ value: 'Physics', label: 'Physics', Name : "Department" },
		{ value: 'Political Science', label: 'Political Science', Name : "Department" },
		{ value: 'Psychology', label: 'Psychology', Name : "Department" },
		{ value: 'Mathematics', label: 'Mathematics', Name : "Department" },
		{ value: 'Statistics', label: 'Statistics', Name : "Department" },
		{ value: 'Information Technology', label: 'Information Technology', Name : "Department" },
		{ value: 'Islamiyat', label: 'Islamiyat', Name : "Department" },
		{ value: 'Urdu', label: 'Urdu', Name : "Department" },
		{ value: 'Zoology', label: 'Zoology', Name : "Department" },
	]

	const Domicile = [
		{ value: 'Sialkot', label: 'Sialkot', Name : "Domicile" },
		{ value: 'Lahore', label: 'Lahore', Name : "Domicile" },
		{ value: 'Gujranwala', label: 'Gujranwala', Name : "Domicile" }
	]

	const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" },
	]

	const Fresh_ADP = [
		{ value: 'Fresh', label: 'Fresh', Name : "Fresh_ADP" },
		{ value: 'ADP', label: 'ADP', Name : "Fresh_ADP" },
	]

	const [isADP, setisADP] = useState(false)

	const [formdata,setformdata] = useState({
		Full_Name : "",
		image :"",
		Father_Name : "",
		Gender : "",
		CNIC : "",
		DOB : "",
		Email : "",
		Phone : "",
		Guardian_Phone:"",
		Address : "",
		Domicile : "",
		Department : "",
		Shift : "",
		Matric_Roll : "",
		Matric_Total_Marks : "",
		Matric_Obtained_Marks : "",
		Matric_Year : "",
		Matric_Board : "",
		Inter_Roll : "",
		Inter_Total_Marks : "",
		Inter_Obtained_Marks : "",
		Inter_Year : "",
		Inter_Board : "",
		ADP_Roll : "",
		ADP_Total_Marks : "",
		ADP_Obtained_Marks : "",
		ADP_Year : "",
		ADP_Board : "",
	  });

	  const [file, setfile] = useState(null)

	  const imageHandler = (e) => {
			setfile(e.target.files[0])
			setformdata({
				...formdata,
				image : String(new Date().valueOf()) + String(e.target.files[0].name)
			  })
	  }

	  const imagesub = (e) => {
		e.preventDefault()
		if(file!=null){
			var size = file.size
		}
		if (size>100000){
			setvalidate("Image Size Should be less than 100KB")
		}

		else{

		axios.post("http://localhost:3001/api/student/addmissonform",formdata)
		  .then((res)=>{
			  if (res.data.message){
			  	setvalidate(res.data.message)
				  alert(res.data.message)
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
					.catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})

					setformdata({
						...formdata,
						image : String(new Date().valueOf()) + String(file.name)
					  })

			  }
			  else{
				setvalidate(res.data)
				alert(res.data)
			  }
			})
		  .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})
		}
	
}
  
	  const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }
  
	  const changeselects = (e) => {
		  if(e.value==="ADP"){
			setisADP(true)
		  }
		  else{
			setisADP(false)
		  }
		setformdata({
			...formdata,
			[e.Name] : e.value
		  })
	  }

	  const changeselect = (e) => {
		setformdata({
		  ...formdata,
		  [e.Name] : e.value
		})
	  }
  
	  const set = (e) => {
		e.preventDefault()
		  axios.post("http://localhost:3001/api/student/addmissonform",formdata)
		  .then((res)=>{
			  if (res.data.message){
			  	setvalidate(res.data.message)
				  alert(res.data.message)
			  }
			  else{
				setvalidate(res.data)
				alert(res.data)
			  }
			})
		  .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})
	  }

  return (
    <React.Fragment>
		<Header/>
		<div className="Student">
			<div class="container">
				<MDBCard cascade narrow>
					<MDBRow>
					<MDBCol md='12'>
						<MDBView
						cascade
						className='gradient-card-header blue lighten-1'
						>
						<h2 className='mb-0 font-weight-bold'>Admission Form</h2>
						</MDBView>
						<MDBCardBody>
						<div className="container">
						{!Loading?
							open?
								<form  role="form" method="post" onSubmit={imagesub} encType="multipart/form-data">
										<div style={{marginLeft:-0}} className="row">
											<div className="col-md-4">	
												<p className="Admission_Select_p">Fresh / ADP <span className="text-danger">*</span></p>
												<Select className="Admission_Form_Select_Dept" onChange={changeselects} name="Fresh_ADP" placeholder="Fresh / ADP" options={Fresh_ADP} required />							
											</div>
											<div className="col-md-4">	
												<p className="Admission_Select_p">BS Department <span className="text-danger">*</span></p>
												<Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required/>							
											</div>
											<div className="col-md-4">	
												<p className="Admission_Select_p">Shift <span className="text-danger">*</span></p>
												<Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Shift" placeholder="Select Shift" options={Shift} required/>							
											</div>
										</div>
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
															<div className="col-md-3">
																<p className="Admission_p">Student's Name <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="text" name="Full_Name" placeholder="Student's Name" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Father's Name <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="text" name="Father_Name" placeholder="Father's Name" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Gender <span className="text-danger">*</span></p>
																<Select className="Admission_Form_Select" onChange={changeselect} name="Gender" placeholder="Male/Female" options={Gender} required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Upload Picture <span className="text-danger">*</span></p>
																<input style={{marginTop:30}} type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} required/>
															</div>
														</div>
														<div className="row">
															<div className="col-md-3">
																<p className="Admission_p">CNIC / B-Form <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="text" name="CNIC" placeholder="CNIC / B-Form" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Date Of Birth <span className="text-danger">*</span></p>
																<div className="form-group" id="datetime">
																	<input className="Admission_Form_Input" onChange={change} type="date" name="DOB" required/>
																</div>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Email <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="email" name="Email" placeholder="Email" required/>
															</div>
														</div>
														<div className="row">
															<div className="col-md-3">
																<p className="Admission_p">Phone (WhatsApp) <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="text" name="Phone" placeholder="Phone (WhatsApp)" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Guardian's Phone (WhatsApp) <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="text" name="Guardian_Phone" placeholder="Guardian's Phone (WhatsApp)" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Address <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} type="text" name="Address" placeholder="Address" required/>
															</div>
														</div>
														<div className="row">
															<div className="col-md-3">
																<p className="Admission_p">Domicile <span className="text-danger">*</span></p>
																<Select className="Admission_Form_Select" onChange={changeselect} name="Domicile" placeholder="Domicile" options={Domicile} required/>
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
																<input type="number" name="Matric_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Matric Roll #" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Total Marks <span className="text-danger">*</span></p>
																<input type="number" name="Matric_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks in Matric" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Obtained Marks <span className="text-danger">*</span></p>
																<input type="number" name="Matric_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks in Matric" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Matric Year <span className="text-danger">*</span></p>
																<input type="number" name="Matric_Year" onChange={change} className="Admission_Form_Input" placeholder="Matric Year" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Matric Board <span className="text-danger">*</span></p>
																<input name="Matric_Board" onChange={change} className="Admission_Form_Input" placeholder="Matric Board" required/>
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
																<input type="number" name="Inter_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Inter Roll #" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Total Marks <span className="text-danger">*</span></p>
																<input type="number" name="Inter_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks in Inter" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Obtained Marks <span className="text-danger">*</span></p>
																<input type="number" name="Inter_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks in Inter" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Inter Year <span className="text-danger">*</span></p>
																<input type="number" name="Inter_Year" onChange={change} className="Admission_Form_Input" placeholder="Inter Year" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Inter Board <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} name="Inter_Board" placeholder="Inter Board" required/>
															</div>
															{!isADP?
															<>
															<hr className="col-md-12" />
															<div className="col-md-12 d-flex justify-content-center">
																<div style={{marginLeft:-10}}><MDBBtn gradient="blue" type='submit' ><b>Submit Form</b></MDBBtn></div>
															</div>
															<hr className="col-md-12" /></>:
															<div></div>}
														</div> 
													</div>
												</MDBCardBody>
											</MDBCol>
										</MDBRow>
									</MDBCard>
									{isADP?
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
																<input type="number" name="ADP_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Roll #" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Total Marks</p>
																<input type="number" name="ADP_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Obtained Marks</p>
																<input type="number" name="ADP_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Passing Year</p>
																<input type="number" name="ADP_Year" onChange={change} className="Admission_Form_Input" placeholder="Passing Year" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Board</p>
																<input className="Admission_Form_Input" onChange={change} name="ADP_Board" placeholder="Board" required/>
															</div>
															<hr className="col-md-12" />
															<div className="col-md-12 d-flex justify-content-center">
																<div style={{marginLeft:-10}}><MDBBtn gradient="blue" type='submit' ><b>Submit Form</b></MDBBtn></div>
															</div>
															<hr className="col-md-12" />
														</div> 
													</div>
												</MDBCardBody>
											</MDBCol>
										</MDBRow>
									</MDBCard>:
									<div></div>}
								</form>
							:<h1 className="d-flex justify-content-center" style={{margin:'auto',display:'block'}} >{message}</h1>
						:<h1 className="d-flex justify-content-center" style={{margin:'auto',display:'block'}} >Loading...</h1>}
						</div>
						</MDBCardBody>
					</MDBCol>
					</MDBRow>
				</MDBCard>
			</div>
		</div>
		
		<Footer/>
    </React.Fragment>
  );
}
export default Admission_Form;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<MDBBtn gradient="blue" style={{paddingLeft:50,paddingRight:50}}><b>Submit Form</b></MDBBtn>}
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