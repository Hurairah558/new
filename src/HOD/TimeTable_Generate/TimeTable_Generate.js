import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Select from "react-select";
import Header from '../../Fixed Components/Header';
import { Table , Button, Modal  } from 'semantic-ui-react';

const TimeTable_Generate = () => {

    const [isDisabled, setisDisabled] = useState(true)

    const [Instructors, setInstructors] = useState([])

    const login = localStorage.getItem("HOD")
    const [data,setdata] = useState([])


    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/timetable",{Department:login}).then((res)=>{
                setdata(res.data.data)
        })
    },[])

    const update=()=>{
        axios.post("http://localhost:3001/api/hod/timetable",{Department:login}).then((res)=>{
                setdata(res.data.data)
        })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/timetable/${id}`).then((res)=>{
            update()
        })
    }


    const [FormData, setFormData] = useState({
		Department: login,
		Instructor: '',
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


    const Course_Code = [
		{ value: 'IT-209', label: 'IT-209', Name : "Course_Code" },
		{ value: 'IT-210', label: 'IT-210', Name : "Course_Code" },
		{ value: 'IT-211', label: 'IT-211', Name : "Course_Code" },
	]

    const Course_Title = [
		{ value: 'Data Structures', label: 'Data Structures', Name : "Course_Title" },
		{ value: 'Psychology', label: 'Psychology', Name : "Course_Title" },
		{ value: 'Accounting', label: 'Accounting', Name : "Course_Title" },
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
        Instructorss.push( { value: Instructor.Instructor, label: Instructor.Instructor, Name : "Instructor" })
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

        axios.post("http://localhost:3001/hod/instructors",{Department:e.value}).then((res)=>{
            setisDisabled(false)
            setInstructors(res.data.data)
    })
}

        const changeselects = (e) => {
            axios.post("http://localhost:3001/api/hod/timetable",{Department:login,Fall_Spring:e.value}).then((res)=>{
                setdata(res.data.data)
        })
        }

        const [validate,setvalidate] = useState("")

        const send = (e) => {
            e.preventDefault()
              axios.post(`http://localhost:3001/api/hod/timetablegenerate`,FormData)
              .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                update()
                })
              .catch((err)=>{console.log("No",err)})
          }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <div className="row" id="Merit_List_Data">
                        <div className="col-md-6">
                            <h2 className="Admission_Form_Category">Time Table Generate</h2>
                            <hr/>
                            <p className="Admission_p">Fall / Spring</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                            <p className="Admission_p">Instructor Department</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Instructor_Department}  name="Instructor_Department" placeholder="Instructor Department" required />
                            <p className="Admission_p">Select Instructor</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Instructorss}  name="Instructor" placeholder="Select Instructor" required />
                            <p className="Admission_p">Select Semester</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Select Semester" required />
                            <p className="Admission_p">Course Code</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                        </div>
                        <div className="col-md-6 mt-4">
                            <p className="Admission_p" style={{marginTop:40}}>Course Title</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                            <p className="Admission_p">Time Slot</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
                            <p className="Admission_p">Shift</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Shift" required />
                            <p className="Admission_p">Room No.</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Room_no}  name="Room_no" placeholder="Room No." required />
                            <button style={{marginLeft:-0,marginTop:40,width:205}} className="Login_Button" onClick={send} ><Modals validate={validate} /></button>
                        </div>
                    </div>
                    <hr/>
                    <Select className="w-25" onChange={changeselects} name="Department" placeholder="Select Semester" options={Fall_Spring} required />
                    <hr/>
                    {data.length>0?
                        <>
                            <h1>Currently Displaying Time Table</h1>
                            <div class="row">
                                <div className="col-md-12">
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell>Instructor</Table.HeaderCell>
                                                <Table.HeaderCell>Instructor's Department</Table.HeaderCell>
                                                <Table.HeaderCell>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                                <Table.HeaderCell>Time</Table.HeaderCell>
                                                <Table.HeaderCell>Shift</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                                <Table.HeaderCell>Room #</Table.HeaderCell>
                                                <Table.HeaderCell>Delete</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((timetable,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{index+1}</Table.Cell>
                                                    <Table.Cell>{timetable.Instructor}</Table.Cell>
                                                    <Table.Cell>{timetable.Instructor_Department}</Table.Cell>
                                                    <Table.Cell>{timetable.Course_Title}</Table.Cell>
                                                    <Table.Cell>{timetable.Course_Code}</Table.Cell>
                                                    <Table.Cell>{timetable.Semester}</Table.Cell>
                                                    <Table.Cell>{timetable.Time_Slot}</Table.Cell>
                                                    <Table.Cell>{timetable.Shift}</Table.Cell>
                                                    <Table.Cell>{timetable.Fall_Spring}</Table.Cell>
                                                    <Table.Cell>{timetable.Room_no}</Table.Cell>
                                                    <Table.Cell><button className="btn btn-danger" onClick={()=>Delete(timetable.id)} >Delete</button></Table.Cell>
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

export default TimeTable_Generate;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Generate Time Table</Button>}
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