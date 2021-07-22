import axios from 'axios';
import React, { useState  ,useEffect} from 'react';
import Select from "react-select";
import Header from "../Header/Header";
import { Table } from 'semantic-ui-react';

const Free_Instructors = () => {

    const [busy,setbusy] = useState([]);
    const [Time, setTime] = useState("")
    const [all, setall] = useState([])
    const [Instructors, setInstructors] = useState([])

    // useEffect(()=>{
    //     axios.post("http://localhost:3001/api/ssio/instructors").then((res)=>{
    //         setInstructors(res.data.data)
    //     })
    // },[])


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
        })

    })
}

    busy.map((Instructor)=>{
        busys = busys + `${String(Instructor.Instructor)}:${String(Instructor.Instructor_Department)}:${String(Instructor.Instructor_Designation)}`
    })
    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div className="container">
                    <p className="Admission_p">Select Time Slot</p>
                    <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
                    <hr/>
                    {Instructorss.length>0?
                    <>
                    <h1>Free Teachers from : {Time}</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <Table celled selectable color="grey">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sr#</Table.HeaderCell>
                                        <Table.HeaderCell>Instructor</Table.HeaderCell>
                                        <Table.HeaderCell>Instructor_Designation</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                {Instructorss.map((Instructorsss,index)=>{
                                    if(!busys.includes(Instructorsss))
                                        return (
                                            <Table.Row key={index}>
                                                <Table.Cell><b>{index+1}</b></Table.Cell>
                                                <Table.Cell><b>{String(Instructorsss).split(":")[0]}</b></Table.Cell>
                                                <Table.Cell><b>{String(Instructorsss).split(":")[2]}</b></Table.Cell>
                                            </Table.Row>)
                                    })}
                                </Table.Body>
                            </Table>
                        </div>
                    </div></>:<div></div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Free_Instructors;
