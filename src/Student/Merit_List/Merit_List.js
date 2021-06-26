import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
import Header from "../Header/Header";
import { Table } from 'semantic-ui-react';
const Merit_List = () => {

    const [data,setdata] = useState([])

    const [merit,setmerit] = useState({
        MeritList: "",
        NOS_Start : 0,
        NOS_End : 0,
        Display : "",
        Department : ""
    })


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

            axios.post("http://localhost:3001/hod/meritlistcurrent",{Department:e.value}).then((res)=>{
                setmerit(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist",{Department:e.value, Year: new Date().getFullYear() }).then((res)=>{
                    setdata(res.data.data)
                })
        })

    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <Select className="w-25" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
                    {data.length>0?
                        <div class="row mt-4">
                            <div className="col-md-12">
                                <Table celled selectable color="grey">
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Sr#</Table.HeaderCell>
                                            <Table.HeaderCell>ID</Table.HeaderCell>
                                            <Table.HeaderCell>Name</Table.HeaderCell>
                                            <Table.HeaderCell>Father's Name'</Table.HeaderCell>
                                            <Table.HeaderCell>Department</Table.HeaderCell>
                                            <Table.HeaderCell>CNIC</Table.HeaderCell>
                                            <Table.HeaderCell>Inter Marks</Table.HeaderCell>
                                            <Table.HeaderCell>Year</Table.HeaderCell>
                                            <Table.HeaderCell>Shift</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {merit.Display==1?
                                        data.slice(merit.NOS_Start-1,merit.NOS_End).map((student,index)=>{
                                            return (     
                                                <Table.Row key={index}>
                                                    <Table.Cell><b>{index+1}</b></Table.Cell>
                                                    <Table.Cell><b>{student.id}</b></Table.Cell>
                                                    <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                                    <Table.Cell>{student.Father_Name}</Table.Cell>
                                                    <Table.Cell>{student.Department}</Table.Cell>
                                                    <Table.Cell>{student.CNIC}</Table.Cell>
                                                    <Table.Cell>{student.Inter_Obtained_Marks}</Table.Cell>
                                                    <Table.Cell>{student.Year}</Table.Cell>
                                                    <Table.Cell>{student.Shift}</Table.Cell>
                                                </Table.Row>
                                        )}):
                                        <h1>Not published yet</h1>
                                        }
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    :<div></div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Merit_List;
