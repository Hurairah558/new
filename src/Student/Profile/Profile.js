import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import {Table } from 'semantic-ui-react';
function Profile() {

    var login = JSON.parse(localStorage.getItem("HOD"))
    console.log(login)

    const [data, setdata] = useState({})
    useEffect(() => {
        axios.post("http://localhost:3001/api/student/profile",{id:login.id}).then((res)=>{
                setdata(res.data.data)
            })
        .catch((err)=>{
        console.log(err)
        })
    },[]);

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div className="container">
                <div className="row">
                        <div className="col-md-12">
                            <Table celled selectable color="grey">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Roll</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Father's Name</Table.HeaderCell>
                                        <Table.HeaderCell>Department</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell>Semester</Table.HeaderCell>
                                        <Table.HeaderCell>Shift</Table.HeaderCell>
                                        <Table.HeaderCell>Course</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{data.Roll}</Table.Cell>
                                        <Table.Cell>{data.Full_Name}</Table.Cell>
                                        <Table.Cell>{data.Father_Name}</Table.Cell>
                                        <Table.Cell>{data.Department}</Table.Cell>
                                        <Table.Cell>{data.Address}</Table.Cell>
                                        <Table.Cell>{data.Semester}</Table.Cell>
                                        <Table.Cell>{data.Shift}</Table.Cell>
                                        <Table.Cell>{data.Courses}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Student Home</h1>
        </React.Fragment>
    )
}

export default Profile;
