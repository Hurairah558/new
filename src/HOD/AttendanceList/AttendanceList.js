import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Fixed Components/Header';
import Select from 'react-select';
import { Table } from 'semantic-ui-react';

function AwardLists() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [data, setdata] = useState([])

    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/attendance",{Department:login.Department}).then((res)=>{
			setdata(res.data.data)
		})
			.catch((err)=>{console.log(err)})
    },[])


    const update=()=>{
        axios.post("http://localhost:3001/api/hod/attendance",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
        })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/ssio/attendance/${id}`).then((res)=>{
            update()
        })
    }


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

    const changeselects = (e) => {
        axios.post("http://localhost:3001/api/hod/attendance",{Fall_Spring:e.value,Department:login.Department}).then((res)=>{
            setdata(res.data.data)
    })
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <p className="Admission_p">Fall / Spring</p>
                    <Select className="Admission_Form_Select" onChange={changeselects} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                    <hr/>
                    {data.length>0?
                        <>
                            <h1>Currently Displaying Award Lists</h1>
                            <div class="row">
                                <div className="col-md-12">
                                    <Table style={{textAlign:"center"}} celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell>Instructor</Table.HeaderCell>
                                                <Table.HeaderCell>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell>Shift</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                                <Table.HeaderCell>Fall / Spring</Table.HeaderCell>
                                                <Table.HeaderCell>View</Table.HeaderCell>
                                                <Table.HeaderCell>Delete</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>         
                                            {data.map((Course,index)=>{
                                                return (
                                                    <Table.Row key={index}>
                                                        <Table.Cell>{index+1}</Table.Cell>
                                                        <Table.Cell>{Course.Instructor}</Table.Cell>
                                                        <Table.Cell>{Course.Course_Title}</Table.Cell>
                                                        <Table.Cell>{Course.Course_Code}</Table.Cell>
                                                        <Table.Cell>{Course.Shift}</Table.Cell>
                                                        <Table.Cell>{Course.Semester}</Table.Cell>
                                                        <Table.Cell>{Course.Fall_Spring}</Table.Cell>
                                                        <Table.Cell><Link to={{pathname:"/hod/attendancedetails",state:{Course}}} ><button className="btn btn-primary">View</button></Link></Table.Cell>
                                                        <Table.Cell><button className="btn btn-danger" onClick={()=>Delete(Course.id)} >Delete</button></Table.Cell>
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

export default AwardLists;
