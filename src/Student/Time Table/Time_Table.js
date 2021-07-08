import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
import Header from "../Header/Header";
import { Table } from 'semantic-ui-react';
const Time_Table = () => {

    const [data,setdata] = useState([])


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

    const changeselect = (e) => {
        
            axios.post("http://localhost:3001/api/hod/timetable",{Department:e.value}).then((res)=>{
                setdata(res.data.data)
        })
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <Select className="ml-4 w-25" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
                    {data.length>0?
                        <>
                            <h1>Currently Displaying Datesheet</h1>
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
                                                <Table.HeaderCell>Session</Table.HeaderCell>
                                                <Table.HeaderCell>Room #</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((timetable,index)=>{
                                                return (     
                                                    // <div className="card m-4" key={timetable.id}>
                                                    //     <div className="card-body">
                                                    //         <p className="card-text">Index : {index+1}</p>
                                                    //         <h5 className="card-title">	Instructor : {timetable.Instructor}</h5>
                                                    //         <p className="card-text">Instructor's Department : {timetable.Instructor_Department}</p>
                                                    //         <p className="card-text">Course Title : {timetable.Course_Title}</p>
                                                    //         <p className="card-text">Course Code : {timetable.Course_Code}</p>
                                                    //         <p className="card-text">Semester : {timetable.Semester}</p>
                                                    //         <p className="card-text">Time_Slot : {timetable.Time_Slot}</p>
                                                    //         <p className="card-text">Shift : {timetable.Shift}</p>
                                                    //         <p className="card-text">Session : {timetable.Fall_Spring}</p>
                                                    //         <p className="card-text">Room_no : {timetable.Room_no}</p>
                                                    //     </div>
                                                    // </div>
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

export default Time_Table;