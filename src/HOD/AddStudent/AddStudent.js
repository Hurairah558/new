import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import Header from '../../Fixed Components/Header';

function AddStudent() {

    const login = localStorage.getItem("HOD")

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

	const [formdata,setformdata] = useState({
        Roll : "",
		Full_Name : "",
		Father_Name : "",
		Gender : "",
		CNIC : "",
		DOB : "",
		Email : "",
		Phone : "",
		Address : "",
		Department : login,
		Matric_Roll : "",
		Matric_Total_Marks : "",
		Matric_Obtained_Marks : "",
		Matric_Board : "",
		Inter_Roll : "",
		Inter_Total_Marks : "",
		Inter_Obtained_Marks : "",
		Inter_Board : "",
        Semester : "",
        Fee_Status : "",
        Shift : ""
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
		  axios.post(`http://localhost:3001/api/hod/addstudent`,formdata)
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
						<label className="Admission_Label">Admission Form</label>z
						<h3 className="Admission_Label">{validate}</h3>
						<div className="row">
							<div className="col-md-3" id="div1">
								<h2 className="Admission_Form_Category">Personal Info</h2>
								<hr/>
                                <p className="Admission_p">Roll No.</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Roll" placeholder="Roll No." required=""/>
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
							<div className="col-md-3" id="div1">
								<h2 className="Admission_Form_Category">Contact</h2>
								<hr/>
								<p className="Admission_p">Email</p>
								<input className="Admission_Form_Input" onChange={change} type="email" name="Email" placeholder="Email" required=""/>
								<p className="Admission_p">Phone</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Phone" placeholder="Phone" required=""/>
								<p className="Admission_p">Address</p>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Address" placeholder="Address" required=""/>
							</div>
							<div className="col-md-3" id="div1">
								<h2 className="Admission_Form_Category">Matric Details</h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Matric Roll</p>
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
							<div className="col-md-3">
								<h2 className="Admission_Form_Category"><b>Inter Details</b></h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Inter Roll</p>
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
						</div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="Admission_p">Semester</p>
                                <Select name="Semester" onChange={changeselect} className="Admission_Form_Select" placeholder="Semester" options={Semester} required />
                            </div>
                            <div className="col-md-4">
                                <p className="Admission_p">Shift</p>
                                <Select name="Shift" onChange={changeselect} className="Admission_Form_Select" placeholder="Shift" options={Shift} required />
                            </div>
                            <div className="col-md-4">
                                <p className="Admission_p">Fee Status</p>
                                <Select name="Fee_Status" onChange={changeselect} className="Admission_Form_Select" placeholder="Fee Status" options={Fee_Status} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button className="Admission_Form_button" onClick={set} >Apply</button>
                            </div>
                        </div>
					</form>
				</div>
			</div>
		</div>
    </React.Fragment>
  );
}
export default AddStudent;