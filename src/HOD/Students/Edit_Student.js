import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import Header from '../../Fixed Components/Header';
import { Button, Modal } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
function AddStudent() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const Location = useLocation()


    const [formdata,setformdata] = useState({
        id:Location.state!=undefined?Location.state.id:"",
        Roll : Location.state!=undefined?Location.state.Roll:"",
		Full_Name : Location.state!=undefined?Location.state.Full_Name:"",
		Father_Name : Location.state!=undefined?Location.state.Father_Name:"",
		Gender : Location.state!=undefined?Location.state.Gender:"",
		CNIC : Location.state!=undefined?Location.state.CNIC:"",
		DOB : Location.state!=undefined?Location.state.DOB:"",
		Email : Location.state!=undefined?Location.state.Email:"",
		Phone : Location.state!=undefined?Location.state.Phone:"",
		Address : Location.state!=undefined?Location.state.Address:"",
		Department : login!=null?login.Department:"",
		Matric_Roll : Location.state!=undefined?Location.state.Matric_Roll:"",
		Matric_Total : Location.state!=undefined?Location.state.Matric_Total:"",
		Matric_Obtained_Marks : Location.state!=undefined?Location.state.Matric_Obtained_Marks:"",
		Matric_Board : Location.state!=undefined?Location.state.Matric_Board:"",
		Matric_Year : Location.state!=undefined?Location.state.Matric_Year:"",
		Inter_Roll : Location.state!=undefined?Location.state.Inter_Roll:"",
		Inter_Total : Location.state!=undefined?Location.state.Inter_Total:"",
		Inter_Obtained_Marks : Location.state!=undefined?Location.state.Inter_Obtained_Marks:"",
		Inter_Board : Location.state!=undefined?Location.state.Inter_Board:"",
		Inter_Year : Location.state!=undefined?Location.state.Inter_Year:"",
        Semester : Location.state!=undefined?Location.state.Semester:"",
        Shift : Location.state!=undefined?Location.state.Shift:"",
        Courses : Location.state!=undefined?Location.state.Courses:"",
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
  
	  const set = (e) => {
		e.preventDefault()
		  axios.put(`http://localhost:3001/api/hod/editstudent`,formdata)
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
						<div className="row">
							<div className="col-md-3" id="div1">
								<h2 className="Admission_Form_Category">Personal Info</h2>
								<hr/>
                                <p className="Admission_p">Roll No.</p>
								<input className="Admission_Form_Input" value={formdata.Roll} onChange={change} type="text" name="Roll" placeholder="Roll No." required=""/>
								<p className="Admission_p">Full Name</p>
								<input className="Admission_Form_Input" value={formdata.Full_Name} onChange={change} type="text" name="Full_Name" placeholder="Full Name" required=""/>
								<p className="Admission_p">Father's Name</p>
								<input className="Admission_Form_Input" value={formdata.Father_Name} onChange={change} type="text" name="Father_Name" placeholder="Father's Name" required=""/>
								<p className="Admission_p">Gender</p>
								<Select className="Admission_Form_Select" defaultInputValue={Location.state!=undefined?Location.state.Gender:""} onChange={changeselect} name="Gender" placeholder="Male/Female" options={Gender} required />
								<p className="Admission_p">CNIC</p>
								<input className="Admission_Form_Input" value={formdata.CNIC} onChange={change} type="text" name="CNIC" placeholder="CNIC" required=""/>
								<p className="Admission_p">Date Of Birth</p>
								<div className="form-group" id="datetime">
									<input onChange={change} value={formdata.DOB} type="text" name="DOB" className="form-control" required />
								</div>
							</div>
							<div className="col-md-3" id="div1">
								<h2 className="Admission_Form_Category">Contact</h2>
								<hr/>
								<p className="Admission_p">Email</p>
								<input className="Admission_Form_Input" value={formdata.Email} onChange={change} type="email" name="Email" placeholder="Email" required=""/>
								<p className="Admission_p">Phone</p>
								<input className="Admission_Form_Input" value={formdata.Phone} onChange={change} type="text" name="Phone" placeholder="Phone" required=""/>
								<p className="Admission_p">Address</p>
								<input className="Admission_Form_Input" value={formdata.Address} onChange={change} type="text" name="Address" placeholder="Address" required=""/>
							</div>
							<div className="col-md-3" id="div1">
								<h2 className="Admission_Form_Category">Matric Details</h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Matric Roll</p>
									<input type="text" name="Matric_Roll" value={formdata.Matric_Roll} onChange={change} className="Admission_Form_Input" placeholder="Your Matric Roll #"  required/>
									<p className="Admission_p">Total_Marks</p>
									<input type="text" name="Matric_Total" value={formdata.Matric_Total} onChange={change} className="Admission_Form_Input" placeholder="Total Marks in Matric"  required/>
									<p className="Admission_p">Obtained_Marks</p>
									<input type="text" name="Matric_Obtained_Marks" value={formdata.Matric_Obtained_Marks} onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks in Matric" required />
									<p className="Admission_p">Matric Year</p>
									<input type="text" name="Matric_Year" value={formdata.Matric_Year} onChange={change} className="Admission_Form_Input" placeholder="Matric Year" required />
									<p className="Admission_p">Matric_Board</p>
									<input type="text" name="Matric_Board" value={formdata.Matric_Board} onChange={change} className="Admission_Form_Input" placeholder="Matric Board" required />
							</div>
							<div className="col-md-3">
								<h2 className="Admission_Form_Category"><b>Inter Details</b></h2>
								<hr className="col-md-12" />
									<p className="Admission_p">Inter Roll</p>
									<input type="text" name="Inter_Roll" value={formdata.Inter_Roll} onChange={change} className="Admission_Form_Input" placeholder="Your Inter Roll #"  required/>
									<p className="Admission_p">Total_Marks</p>
									<input type="text" name="Inter_Total" value={formdata.Inter_Total} onChange={change} className="Admission_Form_Input" placeholder="Total Marks in Inter"  required/>
									<p className="Admission_p">Obtained_Marks</p>
									<input type="text" name="Inter_Obtained_Marks" value={formdata.Inter_Obtained_Marks} onChange={change} className="Admission_Form_Input" placeholder="Obtained Marks in Inter" required />
									<p className="Admission_p">Inter Year</p>
									<input type="text" name="Inter_Year" value={formdata.Inter_Year} onChange={change} className="Admission_Form_Input" placeholder="Inter Year" required />
									<p className="Admission_p">Inter_Board</p>
									<input type="text" name="Inter_Board" value={formdata.Inter_Board} onChange={change} className="Admission_Form_Input" placeholder="Inter Board" required />
							</div>
						</div>
                        <hr style={{background:"white"}} />
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
                        </div>
                        <hr style={{background:"white"}} />
                        <div className="row">
                            <div className="col-md-6">
                                <button className="Admission_Form_button" onClick={set} ><Modals validate={validate} /></button>
                            </div>
                        </div>
					</form>
				</div>
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