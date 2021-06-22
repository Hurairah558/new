import React,{useState,useEffect} from 'react';
import './Admission_Form_Design.css';
import Select from 'react-select';
import axios from 'axios';
import Header from '../Header/Header';

function Admission_Form() {

	const Gender = [
		{ value: 'Male', label: 'Male', Name : "Gender" },
		{ value: 'Female', label: 'Female', Name : "Gender" },
	]
	
	axios.defaults.withCredentials = true
	
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

	const MatricBoard = [
		{ value: 'Bahawalpur', label: 'Bahawalpur', Name : "Matric_Board" },
		{ value: 'D.G.Khan', label: 'D.G.Khan', Name : "Matric_Board" },
		{ value: 'Faisalabad', label: 'Faisalabad', Name : "Matric_Board" },
		{ value: 'Gujranwala', label: 'Gujranwala', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Multan', label: 'Multan', Name : "Matric_Board" },
		{ value: 'Rawalpindi', label: 'Rawalpindi', Name : "Matric_Board" },
		{ value: 'Sargodha', label: 'Sargodha', Name : "Matric_Board" },
	]

	const InterBoard = [
		{ value: 'Bahawalpur', label: 'Bahawalpur', Name : "Inter_Board" },
		{ value: 'D.G.Khan', label: 'D.G.Khan', Name : "Inter_Board" },
		{ value: 'Faisalabad', label: 'Faisalabad', Name : "Inter_Board" },
		{ value: 'Gujranwala', label: 'Gujranwala', Name : "Inter_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Inter_Board" },
		{ value: 'Multan', label: 'Multan', Name : "Inter_Board" },
		{ value: 'Rawalpindi', label: 'Rawalpindi', Name : "Inter_Board" },
		{ value: 'Sargodha', label: 'Sargodha', Name : "Inter_Board" },
	]

	const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" },
	]

	const [validate,setvalidate] = useState("")

	const [formdata,setformdata] = useState({
		Full_Name : "",
		Father_Name : "",
		Gender : "",
		CNIC : "",
		DOB : "",
		Email : "",
		Phone : "",
		Address : "",
		Department : "",
		Shift : "",
		Matric_Roll : "",
		Matric_Total_Marks : "",
		Matric_Obtained_Marks : "",
		Matric_Board : "",
		Inter_Roll : "",
		Inter_Total_Marks : "",
		Inter_Obtained_Marks : "",
		Inter_Board : "",
	  });
  
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
  
	  const set = (e) => {
		e.preventDefault()
		  axios.post(`http://localhost:3001/api/student/addmissonform`,formdata)
		  .then((res)=>{
			  if (res.data.message){
			  	setvalidate(res.data.message)
			  }
			  else{
				setvalidate(res.data)
			  }
			})
		  .catch((err)=>{console.log("No",err)})
	  }

  return (
    <React.Fragment>
		<Header/>
		<div className="Admission_Form">
			<div className="signup">
				<div className="container">
					<form>
						<label className="Admission_Label">Admission Form</label>
						<h3 className="Admission_Label">{validate}</h3>
						<div className="row">
							<div className="col" id="div1">
								<h2 className="Admission_Form_Category">Personal Info</h2>
								<hr/>
								<p className="Admission_p">Full Name</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Full_Name" placeholder="Full Name" required=""/>
								<p className="Admission_p">Father's Name</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Father_Name" placeholder="Father's Name" required=""/>
								<p className="Admission_p">Gender</p>
								<Select className="Admission_Form_Select" onChange={changeselect} name="Gender" placeholder="Male/Female" options={Gender} required />
								<p className="Admission_p">CNIC</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="CNIC" placeholder="CNIC" required=""/>
								<p className="Admission_p">Date Of Birth</p>
								<div className="form-group" id="datetime">
									<input onChange={change} type="date" name="DOB" className="form-control" required />
								</div>
							</div>
							<div className="col" id="div1">
								<h2 className="Admission_Form_Category">Contact</h2>
								<hr/>
								<p className="Admission_p">Email</p>
								<input className="Admission_Form_Input" onChange={change} type="email" name="Email" placeholder="Email" required=""/>
								<p className="Admission_p">Phone</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Phone" placeholder="Phone" required=""/>
								<p className="Admission_p">Address</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Address" placeholder="Address" required=""/>
							</div>
							<div className="col" id="div1">
								<h2 className="Admission_Form_Category">Matric Details</h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Roll</p>
									<input type="number" name="Matric_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Matric Roll #"  required/>
									<p className="Admission_p">Total_Marks</p>
									<input type="number" name="Matric_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks in Matric"  required/>
									<p className="Admission_p">Obtained_Marks</p>
									<input type="number" name="Matric_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks in Matric" required />
									<p className="Admission_p">Matric Year</p>
									<input type="number" name="Matric_Year" onChange={change} className="Admission_Form_Input" placeholder="Matric Year" required />
									<p className="Admission_p">Matric_Board</p>
									<Select name="Matric_Board" onChange={changeselect} className="Admission_Form_Select" placeholder="Select Board" options={MatricBoard} required />
							</div>
							<div className="col">
								<h2 className="Admission_Form_Category"><b>Inter Details</b></h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Roll</p>
									<input type="number" name="Inter_Roll" onChange={change} className="Admission_Form_Input" placeholder="Your Inter Roll #"  required/>
									<p className="Admission_p">Total_Marks</p>
									<input type="number" name="Inter_Total_Marks" onChange={change} className="Admission_Form_Input" placeholder="Total Marks in Inter"  required/>
									<p className="Admission_p">Obtained_Marks</p>
									<input type="number" name="Inter_Obtained_Marks" onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks in Inter" required />
									<p className="Admission_p">Inter Year</p>
									<input type="number" name="Inter_Year" onChange={change} className="Admission_Form_Input" placeholder="Inter Year" required />
									<p className="Admission_p">Inter_Board</p>
									<Select className="Admission_Form_Select" onChange={changeselect} name="Inter_Board" placeholder="Select Board" options={InterBoard} required />
							</div>
							<div className="row">
								<div className="col-md-6 Admission_Form_Select_Dept" style={{width:"200px"}}>	
									<p className="Admission_Select_p">BS Department</p>
									<Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />							
								</div>
								<div className="col-md-6 Admission_Form_Select_Dept" style={{width:"200px"}}>	
									<p className="Admission_Select_p">Shift</p>
									<Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Shift" placeholder="Select Shift" options={Shift} required />							
									<button className="Admission_Form_button" onClick={set} >Apply</button>
								</div>
							</div>
						</div>  
					</form>
				</div>
			</div>
		</div>
    </React.Fragment>
  );
}
export default Admission_Form;