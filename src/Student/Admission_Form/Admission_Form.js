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
	MDBBtn,
	MDBSpinner,
	MDBContainer, MDBModal, MDBModalHeader, MDBModalFooter,MDBModalBody
  } from 'mdbreact';
function Admission_Form() {

	const [Loading, setLoading] = useState(true)

	const [open, setopen] = useState(false)

	const [op, setop] = useState(1)

	const [messages, setmessages] = useState("")

	const [message, setmessage] = useState("Admission Closed")

	useEffect(()=>{
		axios.get("http://localhost:3001/api/ro/admission_control").then((res)=>{
			if (res.data.data[0].Open === "Open"){
				setopen(true)
			}
			setLoading(false)
		})
		.catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setmessages("Something Went Wrong! Please Try Again After Sometime")
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
		{value: 'Abbottabad' , label: 'Abbottabad' ,Name: 'Domicile'},
		{value: 'Astore' , label: 'Astore' ,Name: 'Domicile'},
		{value: 'Attock' , label: 'Attock' ,Name: 'Domicile'},
		{value: 'Awaran' , label: 'Awaran' ,Name: 'Domicile'},
		{value: 'Badin' , label: 'Badin' ,Name: 'Domicile'},
		{value: 'Bagh' , label: 'Bagh' ,Name: 'Domicile'},
		{value: 'Bahawalnagar' , label: 'Bahawalnagar' ,Name: 'Domicile'},
		{value: 'Bahawalpur' , label: 'Bahawalpur' ,Name: 'Domicile'},
		{value: 'Bajaur' , label: 'Bajaur' ,Name: 'Domicile'},
		{value: 'Bannu' , label: 'Bannu' ,Name: 'Domicile'},
		{value: 'Barkhan' , label: 'Barkhan' ,Name: 'Domicile'},
		{value: 'Batagram' , label: 'Batagram' ,Name: 'Domicile'},
		{value: 'Bhakkar' , label: 'Bhakkar' ,Name: 'Domicile'},
		{value: 'Bhimber' , label: 'Bhimber' ,Name: 'Domicile'},
		{value: 'Buner' , label: 'Buner' ,Name: 'Domicile'},
		{value: 'Chagai' , label: 'Chagai' ,Name: 'Domicile'},
		{value: 'Chakwal' , label: 'Chakwal' ,Name: 'Domicile'},
		{value: 'Charsadda' , label: 'Charsadda' ,Name: 'Domicile'},
		{value: 'Chiniot' , label: 'Chiniot' ,Name: 'Domicile'},
		{value: 'Dadu' , label: 'Dadu' ,Name: 'Domicile'},
		{value: 'Darel' , label: 'Darel' ,Name: 'Domicile'},
		{value: 'Dera Bugti' , label: 'Dera Bugti' ,Name: 'Domicile'},
		{value: 'Dera Ghazi Khan' , label: 'Dera Ghazi Khan' ,Name: 'Domicile'},
		{value: 'Dera Ismail Khan' , label: 'Dera Ismail Khan' ,Name: 'Domicile'},
		{value: 'Diamer' , label: 'Diamer' ,Name: 'Domicile'},
		{value: 'Duki' , label: 'Duki' ,Name: 'Domicile'},
		{value: 'Faisalabad' , label: 'Faisalabad' ,Name: 'Domicile'},
		{value: 'Ghanche' , label: 'Ghanche' ,Name: 'Domicile'},
		{value: 'Ghizer' , label: 'Ghizer' ,Name: 'Domicile'},
		{value: 'Ghotki' , label: 'Ghotki' ,Name: 'Domicile'},
		{value: 'Gilgit' , label: 'Gilgit' ,Name: 'Domicile'},
		{value: 'Gujranwala' , label: 'Gujranwala' ,Name: 'Domicile'},
		{value: 'Gujrat' , label: 'Gujrat' ,Name: 'Domicile'},
		{value: 'Gupis Yasin' , label: 'Gupis Yasin' ,Name: 'Domicile'},
		{value: 'Gwadar' , label: 'Gwadar' ,Name: 'Domicile'},
		{value: 'Hafizabad' , label: 'Hafizabad' ,Name: 'Domicile'},
		{value: 'Hangu' , label: 'Hangu' ,Name: 'Domicile'},
		{value: 'Haripur' , label: 'Haripur' ,Name: 'Domicile'},
		{value: 'Harnai' , label: 'Harnai' ,Name: 'Domicile'},
		{value: 'Hattian' , label: 'Hattian' ,Name: 'Domicile'},
		{value: 'Haveli' , label: 'Haveli' ,Name: 'Domicile'},
		{value: 'Hunza' , label: 'Hunza' ,Name: 'Domicile'},
		{value: 'Hyderabad' , label: 'Hyderabad' ,Name: 'Domicile'},
		{value: 'Islamabad' , label: 'Islamabad' ,Name: 'Domicile'},
		{value: 'Jacobabad' , label: 'Jacobabad' ,Name: 'Domicile'},
		{value: 'Jafarabad' , label: 'Jafarabad' ,Name: 'Domicile'},
		{value: 'Jamshoro' , label: 'Jamshoro' ,Name: 'Domicile'},
		{value: 'Jhal Magsi' , label: 'Jhal Magsi' ,Name: 'Domicile'},
		{value: 'Jhang' , label: 'Jhang' ,Name: 'Domicile'},
		{value: 'Jhelum' , label: 'Jhelum' ,Name: 'Domicile'},
		{value: 'Kachhi' , label: 'Kachhi' ,Name: 'Domicile'},
		{value: 'Kalat' , label: 'Kalat' ,Name: 'Domicile'},
		{value: 'Karachi Central' , label: 'Karachi Central' ,Name: 'Domicile'},
		{value: 'Karachi East' , label: 'Karachi East' ,Name: 'Domicile'},
		{value: 'Karachi South' , label: 'Karachi South' ,Name: 'Domicile'},
		{value: 'Karachi West' , label: 'Karachi West' ,Name: 'Domicile'},
		{value: 'Karak' , label: 'Karak' ,Name: 'Domicile'},
		{value: 'Kashmore ' , label: 'Kashmore ' ,Name: 'Domicile'},
		{value: 'Kasur' , label: 'Kasur' ,Name: 'Domicile'},
		{value: 'Kech' , label: 'Kech' ,Name: 'Domicile'},
		{value: 'Khairpur' , label: 'Khairpur' ,Name: 'Domicile'},
		{value: 'Khanewal' , label: 'Khanewal' ,Name: 'Domicile'},
		{value: 'Kharan' , label: 'Kharan' ,Name: 'Domicile'},
		{value: 'Kharmang' , label: 'Kharmang' ,Name: 'Domicile'},
		{value: 'Khushab' , label: 'Khushab' ,Name: 'Domicile'},
		{value: 'Khuzdar' , label: 'Khuzdar' ,Name: 'Domicile'},
		{value: 'Khyber' , label: 'Khyber' ,Name: 'Domicile'},
		{value: 'Killa Abdullah' , label: 'Killa Abdullah' ,Name: 'Domicile'},
		{value: 'Kohat' , label: 'Kohat' ,Name: 'Domicile'},
		{value: 'Kohlu' , label: 'Kohlu' ,Name: 'Domicile'},
		{value: 'Kolai Pallas' , label: 'Kolai Pallas' ,Name: 'Domicile'},
		{value: 'Korangi' , label: 'Korangi' ,Name: 'Domicile'},
		{value: 'Kotli' , label: 'Kotli' ,Name: 'Domicile'},
		{value: 'Kurram' , label: 'Kurram' ,Name: 'Domicile'},
		{value: 'Lahore' , label: 'Lahore' ,Name: 'Domicile'},
		{value: 'Lakki Marwat' , label: 'Lakki Marwat' ,Name: 'Domicile'},
		{value: 'Larkana' , label: 'Larkana' ,Name: 'Domicile'},
		{value: 'Lasbela' , label: 'Lasbela' ,Name: 'Domicile'},
		{value: 'Layyah' , label: 'Layyah' ,Name: 'Domicile'},
		{value: 'Lodhran' , label: 'Lodhran' ,Name: 'Domicile'},
		{value: 'Loralai' , label: 'Loralai' ,Name: 'Domicile'},
		{value: 'Lower Chitral' , label: 'Lower Chitral' ,Name: 'Domicile'},
		{value: 'Lower Dir' , label: 'Lower Dir' ,Name: 'Domicile'},
		{value: 'Lower Kohistan' , label: 'Lower Kohistan' ,Name: 'Domicile'},
		{value: 'Malakand' , label: 'Malakand' ,Name: 'Domicile'},
		{value: 'Malir' , label: 'Malir' ,Name: 'Domicile'},
		{value: 'Mandi Bahauddin' , label: 'Mandi Bahauddin' ,Name: 'Domicile'},
		{value: 'Mansehra' , label: 'Mansehra' ,Name: 'Domicile'},
		{value: 'Mardan' , label: 'Mardan' ,Name: 'Domicile'},
		{value: 'Mastung' , label: 'Mastung' ,Name: 'Domicile'},
		{value: 'Matiari' , label: 'Matiari' ,Name: 'Domicile'},
		{value: 'Mianwali' , label: 'Mianwali' ,Name: 'Domicile'},
		{value: 'Mirpur Khas' , label: 'Mirpur Khas' ,Name: 'Domicile'},
		{value: 'Mirpur' , label: 'Mirpur' ,Name: 'Domicile'},
		{value: 'Mohmand' , label: 'Mohmand' ,Name: 'Domicile'},
		{value: 'Multan' , label: 'Multan' ,Name: 'Domicile'},
		{value: 'Musakhel' , label: 'Musakhel' ,Name: 'Domicile'},
		{value: 'Muzaffarabad' , label: 'Muzaffarabad' ,Name: 'Domicile'},
		{value: 'Muzaffargarh' , label: 'Muzaffargarh' ,Name: 'Domicile'},
		{value: 'Nagar' , label: 'Nagar' ,Name: 'Domicile'},
		{value: 'Nankana Sahib' , label: 'Nankana Sahib' ,Name: 'Domicile'},
		{value: 'Narowal' , label: 'Narowal' ,Name: 'Domicile'},
		{value: 'Naseerabad' , label: 'Naseerabad' ,Name: 'Domicile'},
		{value: 'Naushahro Firoze' , label: 'Naushahro Firoze' ,Name: 'Domicile'},
		{value: 'Neelum' , label: 'Neelum' ,Name: 'Domicile'},
		{value: 'North Waziristan' , label: 'North Waziristan' ,Name: 'Domicile'},
		{value: 'Nowshera' , label: 'Nowshera' ,Name: 'Domicile'},
		{value: 'Nushki' , label: 'Nushki' ,Name: 'Domicile'},
		{value: 'Okara' , label: 'Okara' ,Name: 'Domicile'},
		{value: 'Orakzai' , label: 'Orakzai' ,Name: 'Domicile'},
		{value: 'Pakpattan' , label: 'Pakpattan' ,Name: 'Domicile'},
		{value: 'Panjgur' , label: 'Panjgur' ,Name: 'Domicile'},
		{value: 'Peshawar' , label: 'Peshawar' ,Name: 'Domicile'},
		{value: 'Pishin' , label: 'Pishin' ,Name: 'Domicile'},
		{value: 'Poonch' , label: 'Poonch' ,Name: 'Domicile'},
		{value: 'Qambar Shahdadkot' , label: 'Qambar Shahdadkot' ,Name: 'Domicile'},
		{value: 'Qilla Saifullah' , label: 'Qilla Saifullah' ,Name: 'Domicile'},
		{value: 'Quetta' , label: 'Quetta' ,Name: 'Domicile'},
		{value: 'Rahim Yar Khan' , label: 'Rahim Yar Khan' ,Name: 'Domicile'},
		{value: 'Rajanpur' , label: 'Rajanpur' ,Name: 'Domicile'},
		{value: 'Rawalpindi' , label: 'Rawalpindi' ,Name: 'Domicile'},
		{value: 'Roundu' , label: 'Roundu' ,Name: 'Domicile'},
		{value: 'Sahiwal' , label: 'Sahiwal' ,Name: 'Domicile'},
		{value: 'Sanghar' , label: 'Sanghar' ,Name: 'Domicile'},
		{value: 'Sargodha' , label: 'Sargodha' ,Name: 'Domicile'},
		{value: 'Shaheed Benazirabad' , label: 'Shaheed Benazirabad' ,Name: 'Domicile'},
		{value: 'Shaheed Sikandarabad' , label: 'Shaheed Sikandarabad' ,Name: 'Domicile'},
		{value: 'Shangla' , label: 'Shangla' ,Name: 'Domicile'},
		{value: 'Sheikhupura' , label: 'Sheikhupura' ,Name: 'Domicile'},
		{value: 'Sherani' , label: 'Sherani' ,Name: 'Domicile'},
		{value: 'Shigar' , label: 'Shigar' ,Name: 'Domicile'},
		{value: 'Shikarpur' , label: 'Shikarpur' ,Name: 'Domicile'},
		{value: 'Sialkot' , label: 'Sialkot' ,Name: 'Domicile'},
		{value: 'Sibi' , label: 'Sibi' ,Name: 'Domicile'},
		{value: 'Skardu' , label: 'Skardu' ,Name: 'Domicile'},
		{value: 'Sohbatpur' , label: 'Sohbatpur' ,Name: 'Domicile'},
		{value: 'South Waziristan' , label: 'South Waziristan' ,Name: 'Domicile'},
		{value: 'Sudhnutti' , label: 'Sudhnutti' ,Name: 'Domicile'},
		{value: 'Sujawal' , label: 'Sujawal' ,Name: 'Domicile'},
		{value: 'Sukkur' , label: 'Sukkur' ,Name: 'Domicile'},
		{value: 'Swabi' , label: 'Swabi' ,Name: 'Domicile'},
		{value: 'Swat' , label: 'Swat' ,Name: 'Domicile'},
		{value: 'Tando Allahyar' , label: 'Tando Allahyar' ,Name: 'Domicile'},
		{value: 'Tando Muhammad Khan' , label: 'Tando Muhammad Khan' ,Name: 'Domicile'},
		{value: 'Tangir' , label: 'Tangir' ,Name: 'Domicile'},
		{value: 'Tank' , label: 'Tank' ,Name: 'Domicile'},
		{value: 'Tharparkar' , label: 'Tharparkar' ,Name: 'Domicile'},
		{value: 'Thatta' , label: 'Thatta' ,Name: 'Domicile'},
		{value: 'Toba Tek Singh' , label: 'Toba Tek Singh' ,Name: 'Domicile'},
		{value: 'Tor Ghar' , label: 'Tor Ghar' ,Name: 'Domicile'},
		{value: 'Umerkot' , label: 'Umerkot' ,Name: 'Domicile'},
		{value: 'Upper Chitral' , label: 'Upper Chitral' ,Name: 'Domicile'},
		{value: 'Upper Dir' , label: 'Upper Dir' ,Name: 'Domicile'},
		{value: 'Upper Kohistan' , label: 'Upper Kohistan' ,Name: 'Domicile'},
		{value: 'Vehari' , label: 'Vehari' ,Name: 'Domicile'},
		{value: 'Washuk' , label: 'Washuk' ,Name: 'Domicile'},
		{value: 'Zhob' , label: 'Zhob' ,Name: 'Domicile'},
		{value: 'Ziarat' , label: 'Ziarat' ,Name: 'Domicile'},
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

	const [img, setimg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")

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
		ADP_Board : ""
	  });

	//   const check = (e)=> {

	// 	var xm = new XMLHttpRequest()

	// 	xm.open("POST","https://cors-anywhere.herokuapp.com/http://www.bisegrw.edu.pk/result-card-matric.html")
	// 	xm.send()

	// 	//   axios.post("https://cors-anywhere.herokuapp.com/http://www.bisegrw.edu.pk/result-card-matric.html",{year:2017,class:12,rno:133710}
	// 	//   ).then((res)=>{
	// 	// 	console.log(res)
	// 	//   })
	//   }

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


	  const [modal, setmodal] = useState(false);


	  const toggle = (state) =>{
		setmodal(!modal)
	  }


	  const imagesub = (e) => {
		e.preventDefault()

		setop(0.3)

		if(file!=null){
			var size = file.size
		}
		if (size>100000){
			setvalidate("Image Size Should be less than 100KB")
			setmodal(true)
			setop(1)
			setLoading(false)
		}
		

		else{

		axios.post("http://localhost:3001/api/student/addmissonform",formdata)
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
					.catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})

					setformdata({
						...formdata,
						image : String(new Date().valueOf()) + String(file.name)
					  })

			  }
			  else{
				setvalidate(res.data)
				setmodal(true)
				  setop(1)
			  }
			})
		  .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")
		  setmessages("Something Went Wrong! Please Try Again After Sometime")
		})
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

	  if(messages!=""){
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
				{/* <button onClick={check}>check</button> */}
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
									<div className="row">
										<div className="col-md-4">
											<p className="Admission_Select_p">Fresh / ADP <span className="text-danger">*</span></p>
											<Select className="Admission_Form_Select_Dept w-100" onChange={changeselects} name="Fresh_ADP" placeholder="Fresh / ADP" options={Fresh_ADP} required />							
										</div>
										<div className="col-md-4">	
											<p className="Admission_Select_p">BS Department <span className="text-danger">*</span></p>
											<Select className="Admission_Form_Select_Dept w-100" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required/>							
										</div>
										<div className="col-md-4">	
											<p className="Admission_Select_p">Shift <span className="text-danger">*</span></p>
											<Select className="Admission_Form_Select_Dept w-100" onChange={changeselect} name="Shift" placeholder="Select Shift" options={Shift} required/>							
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
															<div className="col-md-9">
																<div className="row">
																	<div className="col-md-4">
																		<p className="Admission_p">Student's Name <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" style={{textTransform:"uppercase"}} onChange={change} type="text" name="Full_Name" placeholder="Student's Name" required/>
																	</div>
																	<div className="col-md-4">
																		<p className="Admission_p">Father's Name <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" onChange={change} type="text" name="Father_Name" placeholder="Father's Name" required/>
																	</div>
																	<div className="col-md-4">
																		<p className="Admission_p">Gender <span className="text-danger">*</span></p>
																		<Select className="Admission_Form_Select" onChange={changeselect} name="Gender" placeholder="Male/Female" options={Gender} required/>
																	</div>
																</div>
																<div className="row">
																	<div className="col-md-4">
																		<p className="Admission_p">CNIC / B-Form <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" maxLength="13" minLength="13" onChange={change} type="text" name="CNIC" placeholder="34601xxxxxxxx" required/>
																	</div>
																	<div className="col-md-4">
																		<p className="Admission_p">Date Of Birth <span className="text-danger">*</span></p>
																		<div className="form-group" id="datetime">
																			<input className="Admission_Form_Input" onChange={change} type="date" name="DOB" required/>
																		</div>
																	</div>
																	<div className="col-md-4">
																		<p className="Admission_p">Email <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" onChange={change} type="email" name="Email" placeholder="Email" required/>
																	</div>
																</div>
																<div className="row">
																	<div className="col-md-4">
																		<p className="Admission_p">Phone (WhatsApp) <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" onChange={change} type="text" name="Phone" placeholder="Phone (WhatsApp)" required/>
																	</div>
																	<div className="col-md-4">
																		<p className="Admission_p">Guardian's Phone (WhatsApp) <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" onChange={change} type="text" name="Guardian_Phone" placeholder="Guardian's (WhatsApp)" required/>
																	</div>
																	<div className="col-md-4">
																		<p className="Admission_p">Address <span className="text-danger">*</span></p>
																		<input className="Admission_Form_Input" onChange={change} type="text" name="Address" placeholder="Address" required/>
																	</div>
																</div>
																<div className="row">
																	<div className="col-md-4">
																		<p className="Admission_p">Domicile <span className="text-danger">*</span></p>
																		<Select className="Admission_Form_Select" onChange={changeselect} name="Domicile" placeholder="Domicile" options={Domicile} required/>
																	</div>
																</div>
															</div>
															<div className="col-md-3">
																<p className="Admission_p ml-2">Upload Picture <span className="text-danger">*</span></p>
																<img style={{marginTop:20}} src={img} height="120" width="120" alt="GMC" />
																<input style={{marginTop:10,color:"white"}} className="ml-3" type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} required/>
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
																<input type="number" name="Matric_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Roll #" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Total Marks <span className="text-danger">*</span></p>
																<input type="number" name="Matric_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Obtained Marks <span className="text-danger">*</span></p>
																<input type="number" name="Matric_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Passing Year <span className="text-danger">*</span></p>
																<input type="number" name="Matric_Year" onChange={change} className="Admission_Form_Input" placeholder="Passing Year" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Board <span className="text-danger">*</span></p>
																<input name="Matric_Board" onChange={change} className="Admission_Form_Input" placeholder="Board" required/>
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
																<input type="number" name="Inter_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Roll #" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Total Marks <span className="text-danger">*</span></p>
																<input type="number" name="Inter_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Obtained Marks <span className="text-danger">*</span></p>
																<input type="number" name="Inter_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Passing Year <span className="text-danger">*</span></p>
																<input type="number" name="Inter_Year" onChange={change} className="Admission_Form_Input" placeholder="Passing Year" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Board <span className="text-danger">*</span></p>
																<input className="Admission_Form_Input" onChange={change} name="Inter_Board" placeholder="Board" required/>
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
																<p className="Admission_p">Total Marks/GPA</p>
																<input type="number" name="ADP_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks/GPA" required/>
															</div>
															<div className="col-md-3">
																<p className="Admission_p">Obtained Marks/GPA</p>
																<input type="text" name="ADP_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks/GPA" required/>
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