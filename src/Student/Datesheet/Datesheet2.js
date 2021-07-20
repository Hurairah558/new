import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Select from "react-select";
import { Table } from 'semantic-ui-react';
import Header from '../Header/Header';

function Datesheet() {

    const [data,setdata] = useState([])

    const changeselect = (e) => {
        axios.post("http://localhost:3001/api/hod/datesheet2",{Department:e.value}).then((res)=>{
            setdata(res.data.data)
        })
    }

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


    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                <Select className="w-25" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
                {data.length>0?
                        <>
                            <h1>Currently Displaying Datesheet</h1>
                            <div class="row">
                                <div className="col-md-12">
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell>Instructor</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                                <Table.HeaderCell>Time</Table.HeaderCell>
                                                <Table.HeaderCell>Shift</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((datesheet,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{index+1}</Table.Cell>
                                                    <Table.Cell>{datesheet.Course_Title}</Table.Cell>
                                                    <Table.Cell>{datesheet.Course_Code}</Table.Cell>
                                                    <Table.Cell>{datesheet.Instructor}</Table.Cell>
                                                    <Table.Cell>{datesheet.Semester}</Table.Cell>
                                                    <Table.Cell>{datesheet.Time_Slot}</Table.Cell>
                                                    <Table.Cell>{datesheet.Shift}</Table.Cell>
                                                    <Table.Cell>{datesheet.Fall_Spring}</Table.Cell>
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

export default Datesheet;
