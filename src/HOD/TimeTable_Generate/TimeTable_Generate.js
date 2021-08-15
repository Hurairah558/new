import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Select from "react-select";
import Header from '../../Fixed Components/Header';
import { Link } from "react-router-dom";
import Footer from '../../Footer/Footer';
import { 
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBView,
	MDBBtn,
	MDBSpinner,
    MDBIcon,
	MDBContainer, MDBModal, MDBModalHeader, MDBModalFooter,MDBModalBody
  } from 'mdbreact';

const TimeTable_Generate = () => {

    const [Instructors, setInstructors] = useState([])

    const login = JSON.parse(localStorage.getItem("HOD"))
    const [data,setdata] = useState([])
    const [courses,setcourses] = useState([])
    const [message, setmessage] = useState("")
    const [op, setop] = useState(1)


    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/timetable",{Department:login!=null?login.Department:""}).then((res)=>{
                setdata(res.data.data)

                axios.post("http://localhost:3001/api/hod/course",{Department:login!=null?login.Department:""}).then((res)=>{
                    setcourses(res.data.data)
                }).catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                })

        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    },[])

    const update=()=>{
        axios.post("http://localhost:3001/api/hod/timetable",{Department:login!=null?login.Department:""}).then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }

    const Delete =(id)=>{
        setop(0.3)
        axios.delete(`http://localhost:3001/api/hod/timetable/${id}`).then((res)=>{
            update()
            setop(1)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setop(1)
        })
    }


    const [FormData, setFormData] = useState({
		Department: login!=null?login.Department:"",
		Instructor: '',
		Instructor_Designation: '',
        Instructor_Department : '',
        Semester: '',
		Course_Code: '',
		Course_Title: '',
		Time_Slot: '',
		Shift: '',
		Fall_Spring: '',
		Room_no: ''
	  })

    const Instructor_Department = [
		{ value: 'BBA', label: 'BBA', Name : "Instructor_Department" },
		{ value: 'Botany', label: 'Botany', Name : "Instructor_Department" },
		{ value: 'Chemistry', label: 'Chemistry', Name : "Instructor_Department" },
		{ value: 'Economics', label: 'Economics', Name : "Instructor_Department" },
		{ value: 'English', label: 'English', Name : "Instructor_Department" },
		{ value: 'Physics', label: 'Physics', Name : "Instructor_Department" },
		{ value: 'Political Science', label: 'Political Science', Name : "Instructor_Department" },
		{ value: 'Psychology', label: 'Psychology', Name : "Instructor_Department" },
		{ value: 'Mathematics', label: 'Mathematics', Name : "Instructor_Department" },
		{ value: 'Statistics', label: 'Statistics', Name : "Instructor_Department" },
		{ value: 'Information Technology', label: 'Information Technology', Name : "Instructor_Department" },
		{ value: 'Islamiyat', label: 'Islamiyat', Name : "Instructor_Department" },
		{ value: 'Urdu', label: 'Urdu', Name : "Instructor_Department" },
		{ value: 'Zoology', label: 'Zoology', Name : "Instructor_Department" },
	]

    const Instructor_Designation = [
		{ value: 'Professor', label: 'Professor', Name : "Instructor_Designation" },
		{ value: 'Associate professor', label: 'Associate professor', Name : "Instructor_Designation" },
		{ value: 'Assistant professor', label: 'Assistant professor', Name : "Instructor_Designation" },
		{ value: 'Lecturer', label: 'Lecturer', Name : "Instructor_Designation" },
		{ value: 'CTI', label: 'CTI', Name : "Instructor_Designation" }
	]

    const Time_Slot = [
		{ value: '8:30 AM to 9:20 AM', label: '8:30 AM to 9:20 AM', Name : "Time_Slot" },
		{ value: '9:20 AM to 10:10 AM', label: '9:20 AM to 10:10 AM', Name : "Time_Slot" },
		{ value: '10:10 AM to 11:00 AM', label: '10:10 AM to 11:00 AM', Name : "Time_Slot" },
		{ value: '11:00 AM to 11:50 AM', label: '11:00 AM to 11:50 AM', Name : "Time_Slot" },
		{ value: '11:50 AM to 12:40 PM', label: '11:50 AM to 12:40 PM', Name : "Time_Slot" },
		{ value: '12:40 PM to 1:30 PM', label: '12:40 PM to 1:30 PM', Name : "Time_Slot" },
		{ value: '2:00 PM to 3:00 PM', label: '2:00 PM to 3:00 PM', Name : "Time_Slot" },
		{ value: '3:00 PM to 4:00 PM', label: '3:00 PM to 4:00 PM', Name : "Time_Slot" },
		{ value: '4:00 PM to 5:00 PM', label: '4:00 PM to 5:00 PM', Name : "Time_Slot" },
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

    var Room_no = [
	]

    var i;
    for (i = 0; i < 100; i++) {
        Room_no.push({ value: String(i+1), label: String(i+1), Name : "Room_no" })
    }

    var Instructorss = [
		
	]

    Instructors.map((Instructor)=>{
        Instructorss.push( { value: Instructor.Name, label: Instructor.Name, Name : "Instructor" })
    })


    var Course_Title = [
		
	]

    courses.map((coursess)=>{
        Course_Title.push( { value: coursess.Course_Title, label: coursess.Course_Title, Name : "Course_Title" })
    })

    var Course_Code = [
		
	]

    courses.map((coursess)=>{
        Course_Code.push( { value: coursess.Course_Code, label: coursess.Course_Code, Name : "Course_Code" })
    })


    const Fall_Spring = [
		{ value: 'Fall-2021', label: 'Fall-2021', Name : "Fall_Spring" },
		{ value: 'Spring-2021', label: 'Spring-2021', Name : "Fall_Spring" },
		{ value: 'Fall-2022', label: 'Fall-2022', Name : "Fall_Spring" },
		{ value: 'Spring-2022', label: 'Spring-2022', Name : "Fall_Spring" },
		{ value: 'Fall-2023', label: 'Fall-2023', Name : "Fall_Spring" },
		{ value: 'Spring-2023', label: 'Spring-2023', Name : "Fall_Spring" },
		{ value: 'Fall-2024', label: 'Fall-2024', Name : "Fall_Spring" },
		{ value: 'Spring-2024', label: 'Spring-2024', Name : "Fall_Spring" },
		{ value: 'Fall-2025', label: 'Fall-2025', Name : "Fall_Spring" },
		{ value: 'Spring-2025', label: 'Spring-2025', Name : "Fall_Spring" },
		{ value: 'Fall-2026', label: 'Fall-2026', Name : "Fall_Spring" },
		{ value: 'Spring-2026', label: 'Spring-2026', Name : "Fall_Spring" },
		{ value: 'Fall-2027', label: 'Fall-2027', Name : "Fall_Spring" },
		{ value: 'Spring-2027', label: 'Spring-2021', Name : "Fall_Spring" },
	]


    const changeselect = (e) => {
        setFormData({
            ...FormData,
            [e.Name] : e.value
          })

        axios.post("http://localhost:3001/api/ssio/instructors",{Department:e.value}).then((res)=>{
            setInstructors(res.data.data)
    }).catch((err)=>{
        setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
}

        const changeselects = (e) => {
            setop(0.3)
            axios.post("http://localhost:3001/api/hod/timetable",{Department:login!=null?login.Department:"",Fall_Spring:e.value}).then((res)=>{
                setdata(res.data.data)
                setop(1)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
        }

        const [validate,setvalidate] = useState("")

        const send = (e) => {
            setop(0.3)
            e.preventDefault()
              axios.post(`http://localhost:3001/api/hod/timetablegenerate`,FormData)
              .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                setop(1)
                setmodal(true)
                update()
                })
                .catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                    setop(1)
                })
          }

    const [modal, setmodal] = useState(false);


    const toggle = (state) =>{
    setmodal(!modal)
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
                <div class="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Generate Time Table</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Instructor_Department}  name="Instructor_Department" placeholder="Instructor Department" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Instructorss}  name="Instructor" placeholder="Select Instructor" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Instructor_Designation}  name="Instructor_Designation" placeholder="Designation" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Select Semester" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Shift" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Room_no}  name="Room_no" placeholder="Room No." required />
                                        </div>
                                        <div className="col-md-3">
                                            <MDBBtn gradient="blue" style={{marginTop:20}} onClick={send} >Generate Time Table</MDBBtn>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <hr/>
                    <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Fall / Spring</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <hr/>
                                        <Select className="w-100" onChange={changeselects} name="Fall_Spring" placeholder="Fall / Spring" options={Fall_Spring} required />
                                    <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <hr/>
                    {data.length>0?
                    <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                    <MDBRow>
                      <MDBCol md='12'>
                        <MDBView
                          cascade
                          className='gradient-card-header light-blue lighten-1'
                        >
                          <h4 className='h4-responsive mb-0 font-weight-bold'>{data[0].Department} &nbsp;&nbsp;&nbsp;{data[0].Shift} &nbsp;&nbsp;&nbsp; Time Table &nbsp;&nbsp;&nbsp; {data[0].Fall_Spring}</h4>
                        </MDBView>
                        <MDBCardBody>
                        <div class="row">
                            <div className="col-md-12">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor's Department</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Time</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Room#</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Edit</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((timetable,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Instructor}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Instructor_Department}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Course_Title}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Course_Code}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Semester}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Time_Slot}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{timetable.Room_no}</td>
                                                <td><Link to={{pathname:"/hod/edit/time",state:timetable}}><MDBBtn gradient="blue"><MDBIcon icon='pencil-square' size='1x' /></MDBBtn></Link></td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>
                                                    <MDBBtn onClick={()=>Delete(timetable.id)} gradient="peach"><b>Delete</b></MDBBtn>    
                                                </td>
                                            </tr>
                                        )})
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                    :<div></div>}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default TimeTable_Generate;