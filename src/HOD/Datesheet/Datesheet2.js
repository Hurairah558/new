import Header from '../../Fixed Components/Header';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Select from "react-select";
import { Table, Modal  } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';

function Datesheet() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [data,setdata] = useState([])

    const [loading, setloading] = useState(true)

    const [Instructors, setInstructors] = useState([])

    const [courses,setcourses] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)


    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/datesheet2",{Department:login.Department}).then((res)=>{
                
            setdata(res.data.data)

            setloading(false)
            
            axios.post("http://localhost:3001/hod/instructors",{Department:login.Department}).then((res)=>{
                setInstructors(res.data.data)

                axios.post("http://localhost:3001/api/hod/course",{Department:login.Department}).then((res)=>{
                    setcourses(res.data.data)
                }).catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                    setloading(false)
                })

            }).catch((err)=>{
                setmessage("Something Went Wrong! Please Try Again After Sometime")
                setloading(false)
            })

        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[])

    const update=()=>{
        setop(0.3)
        setloading(true)
        axios.post("http://localhost:3001/api/hod/datesheet2",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
                setop(1)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
            setop(1)
        })
    }

    const Delete =(id)=>{
        setop(0.3)
        setloading(true)
        axios.delete(`http://localhost:3001/api/hod/datesheet/${id}`).then((res)=>{
            setop(1)
            update()
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
            setop(1)
        })
    }


    const [FormData, setFormData] = useState({
		Department: login.Department,
		Course_Code: '',
		Course_Title: '',
		Instructor: '',
		Semester: '',
		Time_Slot: '',
		Shift: '',
        Fall_Spring:''
	  })


    var Instructorss = [
		
	]

    Instructors.map((Instructor)=>{
        Instructorss.push( { value: Instructor.Instructor, label: Instructor.Instructor, Name : "Instructor" })
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


    const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" },
	]

    const changeselect = (e) => {
        setFormData({
            ...FormData,
            [e.Name] : e.value
          })
}

        const changeselects = (e) => {
            setop(0.3)
            setloading(true)
            axios.post("http://localhost:3001/api/hod/datesheet2",{Department:login.Department,Fall_Spring:e.value}).then((res)=>{
                    setdata(res.data.data)
                    setloading(false)
                    setop(1)
                }).catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                    setloading(false)
                    setop(1)
                })
        }

        const [validate,setvalidate] = useState("")

        const send = (e) => {
            setop(0.3)
            setloading(true)
            e.preventDefault()
              axios.post(`http://localhost:3001/api/hod/generatedatesheet2`,FormData)
              .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                update()
                setop(1)
                setloading(false)
                })
                .catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                    setloading(false)
                    setop(1)
                })
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
            <div className="Student">
                <div class="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Generate Datesheet</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Instructorss}  name="Instructor" placeholder="Instructor" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Shift" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>
                                        <div className="col-md-3">
                                            <button style={{border:'none',background:"transparent",marginTop:10}} onClick={send} ><Modals validate={validate} /></button>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    
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
                                        <Select className="Admission_Form_Select w-100" onChange={changeselects} name="Department" placeholder="Fall / Spring" options={Fall_Spring} required />
                                    <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    {data.length>0?
                    loading?
                        <div className="d-flex justify-content-center" ><MDBSpinner big crazy /></div>
                        :
                        <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                          <MDBCol md='12'>
                            <MDBView
                              cascade
                              className='gradient-card-header light-blue lighten-1'
                            >
                              <h4 className='h4-responsive mb-0 font-weight-bold'>{data[0].Department} &nbsp;&nbsp;&nbsp;{data[0].Shift} &nbsp;&nbsp;&nbsp; Datesheet &nbsp;&nbsp;&nbsp; {new Date().getFullYear()}</h4>
                            </MDBView>
                            <MDBCardBody>
                            <div class="row">
                                <div className="col-md-12">
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Instructor</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Semester</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Time</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Shift</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Semester</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Delete</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((datesheet,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{index+1}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Course_Title}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Course_Code}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Instructor}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Semester}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Time_Slot}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Shift}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Fall_Spring}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>
                                                        <MDBBtn onClick={()=>Delete(datesheet.id)} gradient="peach"><b>Delete</b></MDBBtn>    
                                                    </Table.Cell>
                                                    
                                                </Table.Row>
                                            )})
                                            }
                                        </Table.Body>
                                    </Table>
                                </div>
                            </div>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:150}} >Nothing to Show...</h1>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Datesheet;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
        //<MDBBtn gradient="blue"><b>Semester Upgrade</b></MDBBtn>
		trigger={<MDBBtn gradient="blue" >Generate Datesheet</MDBBtn>}
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