import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../Header/Header';
import { Button, Header, Modal , Table } from 'semantic-ui-react';

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)

    const login = localStorage.getItem("HOD")

    useEffect(()=>{
        axios.get("http://localhost:3001/api/all/students2").then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})
    },[])

    if (login==null){
        return <Redirect to="/login"/>;
    }


    if(false){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <React.Fragment>
            <Headers/>
            <div className="Student">
                <div class="container">
                    <h1>Total Students in GMC {data.length}</h1>
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
                                                <Table.Cell><b>{student.Father_Name}</b></Table.Cell>
                                                <Table.Cell>{student.Department}</Table.Cell>
                                                <Table.Cell>{student.Address}</Table.Cell>
                                                <Table.Cell>{student.Email}</Table.Cell>
                                                <Table.Cell>{student.Semester}</Table.Cell>
                                                <Table.Cell>{student.Shift}</Table.Cell>
                                                <Table.Cell>{student.Fee_Status}</Table.Cell>
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







function Modals(props) {
    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button toggle active={true} >View</Button>}
      ><section>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <h5 className="card-title"><b>Roll</b> : {props.student.Roll}</h5>
            <h5 className="card-title"><b>Name</b> : {props.student.Full_Name}</h5>
            <p className="card-text"><b>Department</b> : {props.student.Department}</p>
            <p className="card-text"><b>CNIC</b>: {props.student.CNIC}</p>
            <p className="card-text"><b>DOB</b> : {props.student.DOB}</p>
            <p className="card-text"><b>Email</b> : {props.student.Email}</p>
            <p className="card-text"><b>Address</b> : {props.student.Address}</p>
            <p className="card-text"><b>Semester</b> : {props.student.Semester}</p>
            <p className="card-text"><b>Fee Status</b> : {props.student.Fee_Status}</p>
            <p className="card-text"><b>Shift</b> : {props.student.Shift}</p>
          </Modal.Description>
          </section>
      </Modal>
    )
  }
