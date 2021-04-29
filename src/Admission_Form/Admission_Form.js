import React,{useState} from 'react';
import './Admission_Form_Design.css';
import Select from 'react-select';

function Admission_Form() {

	const Gender = [
		{ value: 'Male', label: 'Male', Name : "Gender" },
		{ value: 'Female', label: 'Female', Name : "Gender" },
	]
	
	
	const Department = [
		{ value: 'IT', label: 'IT', Name : "Department" },
		{ value: 'BBA', label: 'BBA', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
		{ value: 'URDU', label: 'URDU', Name : "Department" },
	]

	const MatricBoard = [
		{ value: 'Gujranwala', label: 'Gujranwala', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Matric_Board" },
	]

	const InterBoard = [
		{ value: 'Gujranwala', label: 'Gujranwala', Name : "Inter_Board" },
		{ value: 'Lahore', label: 'Lahore', Name : "Inter_Board" },
	]

  return (
    <React.Fragment>
		<div className="Admission_Form">
			<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<div className="container">
					<form>
						<label className="Admission_Label">Admission Form</label>
						<div className="row">
							<div className="col" id="div1">
								<h2 className="Admission_Form_Category">Personal Info</h2>
								<hr/>
								<p className="Admission_p">Full Name</p>
								<input className="Admission_Form_Input" type="text" name="Full_Name" placeholder="Username" required=""/>
								<p className="Admission_p">Father's Name</p>
								<input className="Admission_Form_Input" type="text" name="Father_Name" placeholder="Father's Name" required=""/>
								<p className="Admission_p">CNIC</p>
								<input className="Admission_Form_Input" type="text" name="CNIC" placeholder="CNIC" required=""/>
								<p className="Admission_p">Gender</p>
								<Select className="Admission_Form_Select" name="Gender" placeholder="Male/Female" options={Gender} required />
								<p className="Admission_p">Date Of Birth</p>
								<div className="form-group" id="datetime">
									<input type="date" name="DOB" className="form-control" required />
								</div>
							</div>
							<div className="col" id="div1">
								<h2 className="Admission_Form_Category">Contact</h2>
								<hr/>
								<p className="Admission_p">Email</p>
								<input className="Admission_Form_Input" type="email" name="Email" placeholder="Email" required=""/>
								<p className="Admission_p">Phone</p>
								<input className="Admission_Form_Input" type="text" name="Phone" placeholder="Phone" required=""/>
								<p className="Admission_p">Address</p>
								<input className="Admission_Form_Input" type="text" name="Address" placeholder="Address" required=""/>
							</div>
							<div className="col" id="div1">
								<h2 className="Admission_Form_Category">Matric Details</h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Roll</p>
									<input type="number" name="Matric_Roll" className="Admission_Form_Input" placeholder="Your Matric Roll #"  required/>
									<p className="Admission_p">Total_Marks</p>
									<input type="number" name="Matric_Total_Marks" className="Admission_Form_Input" placeholder="Total Marks in Matric"  required/>
									<p className="Admission_p">Obtained_Marks</p>
									<input type="number" name="Matric_Obtained_Marks" className="Admission_Form_Input" placeholder="Obtained Marks in Matric" required />
									<p className="Admission_p">Matric_Board</p>
									<Select name="Matric_Board" className="Admission_Form_Select" placeholder="Select Board" options={MatricBoard} required />
							</div>
							<div className="col">
								<h2 className="Admission_Form_Category"><b>Inter Details</b></h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Roll</p>
									<input type="number" name="Inter_Roll" className="Admission_Form_Input" placeholder="Your Inter Roll #"  required/>
									<p className="Admission_p">Total_Marks</p>
									<input type="number" name="Inter_Total_Marks" className="Admission_Form_Input" placeholder="Total Marks in Inter"  required/>
									<p className="Admission_p">Obtained_Marks</p>
									<input type="number" name="Inter_Obtained_Marks" className="Admission_Form_Input" placeholder="Obtained Marks in Inter" required />
									<p className="Admission_p">Inter_Board</p>
									<Select className="Admission_Form_Select" name="Inter_Board" placeholder="Select Board" options={InterBoard} required />
							</div>
							<div className="Admission_Form_Select_Dept" style={{width:"200px"}}>	
								<p className="Admission_Select_p">BS Department</p>
								<Select className="Admission_Form_Select_Dept" name="Department" placeholder="Select Department" options={Department} required />							
								<button className="Admission_Form_button">Apply</button>
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