import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../Header/Header';
import {Table } from 'semantic-ui-react';

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")

    const login = localStorage.getItem("HOD")

    useEffect(()=>{
        axios.get("http://localhost:3001/api/all/students2").then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[])

    const update_data = () => {
        axios.get("http://localhost:3001/api/all/students2").then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    }

    const toggles=(e)=>{
        let Fee_Status = e.target.textContent === "Unpaid" ? "Paid" : "Unpaid"
        axios.put(`http://localhost:3001/api/hod/students/${e.target.id}`,{fee:Fee_Status}).then((res=>{
            update_data()
        }))
    }

    if (login==null){
        return <Redirect to="/login"/>;
    }


    if(loading){
        return (
            <React.Fragment>
                <Headers/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Loading...</h1>
            </React.Fragment>
        )
    }

    if(message!=""){
        return (
            <React.Fragment>
                <Headers/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Headers/>
            <div className="Student">
                <div class="container">
                    <h1>Total Students in GMC (Evening Shift) {data.length}</h1>
                    <div class="row">
                        <div className="col-md-12">
                            <Table celled selectable color="grey">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sr#</Table.HeaderCell>
                                        <Table.HeaderCell>Roll</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Father's Name</Table.HeaderCell>
                                        <Table.HeaderCell>Department</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>Semester</Table.HeaderCell>
                                        <Table.HeaderCell>Shift</Table.HeaderCell>
                                        <Table.HeaderCell>Fee Status</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    { data.map((student,index)=>{
                                        return (
                                            <Table.Row key={index}>
                                                <Table.Cell><b>{index+1}</b></Table.Cell>
                                                <Table.Cell><b>{student.Roll}</b></Table.Cell>
                                                <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                                <Table.Cell>{student.Father_Name}</Table.Cell>
                                                <Table.Cell>{student.Department}</Table.Cell>
                                                <Table.Cell>{student.Address}</Table.Cell>
                                                <Table.Cell>{student.Email}</Table.Cell>
                                                <Table.Cell>{student.Semester}</Table.Cell>
                                                <Table.Cell>{student.Shift}</Table.Cell>
                                                {student.Semester==="1"?<></>:
                                                <Table.Cell><button style={{margin:"0 10px"}} className={`btn ${student.Fee_Status==="Unpaid"?"button":"buttonPaid"}`} toggle active={student.Fee_Status==="Unpaid"?false:true} id={student.id} onClick={toggles} >
                                                    {student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}
                                                </button></Table.Cell>}
                                            </Table.Row>
                                    )})}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Students;
