import axios from 'axios';
import React, { useState } from 'react';
import Select from "react-select";
import Header from "../Header/Header";
import { Table } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
const Free_Instructors = () => {

    const [busy,setbusy] = useState([]);
    const [Time, setTime] = useState("")
    const [all, setall] = useState([])
    const [Instructors, setInstructors] = useState([])
    const [message, setmessage] = useState("")


    var Instructorss = [
		
	]

    Instructors.map((Instructor)=>{
        Instructorss.push(`${String(Instructor.Name)}:${String(Instructor.Department)}:${String(Instructor.Role)}`)
    })

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

    let busys=""

    const changeselect = (e) => {
        setTime(e.value)
        axios.post("http://localhost:3001/api/ssio/busyinstructors",{Time_Slot:e.value}).then((res)=>{
            setbusy(res.data.data)
    
            axios.post("http://localhost:3001/api/ssio/instructors").then((res)=>{
            setInstructors(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })

    }).catch((err)=>{
        setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
}

    busy.map((Instructor)=>{
        busys = busys + `${String(Instructor.Instructor)}:${String(Instructor.Instructor_Department)}:${String(Instructor.Instructor_Designation)}`
    })

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
                <div className="container">
                    <MDBCard cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Select Time Slot</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <hr/>
                                    <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
                                    <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>  
                    {Instructorss.length>0?
                    <MDBCard style={{marginTop:30}}cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Free Instructorss From {Time}</h4>
                            </MDBView>
                            <MDBCardBody>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor_Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Instructorss.map((Instructorsss,index)=>{
                                        if(!busys.includes(Instructorsss))
                                            return (
                                                <tr key={index}>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}><b>{index+1}</b></td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}><b>{String(Instructorsss).split(":")[0]}</b></td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}><b>{String(Instructorsss).split(":")[2]}</b></td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>:<div></div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Free_Instructors;
