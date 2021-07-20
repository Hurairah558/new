import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../Header/Header';
import Select from "react-select";
import { Button, Header, Modal , Table } from 'semantic-ui-react';
import {Export} from '../../Export';

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [seach,setseach] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [filter, setfilter] = useState({
        Status:"",
        Fee_Status:"",
        Semester:"",
        Department:"",
        Names : "",
        Roll:""
    })

    useEffect(()=>{
        axios.post("http://localhost:3001/api/ro/students2",filter).then((res)=>{
            setdata(res.data.data)
            update()
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[filter])


    const update=()=>{
        axios.get("http://localhost:3001/api/all/students2").then((res)=>{
            setseach(res.data.data)
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
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

    const Status = [
		{ value: 'Active', label: 'Active', Name : "Status" },
		{ value: 'Inactive', label: 'Inactive', Name : "Status" },
	]

    const Fee_Status = [
		{ value: 'Paid', label: 'Paid', Name : "Fee_Status" },
		{ value: 'Unpaid', label: 'Unpaid', Name : "Fee_Status" },
	]

    var Names = [
		
	]

    seach.map((Stu)=>{
        Names.push( { value: Stu.Full_Name, label: Stu.Full_Name, Name : "Names" })
    })

    var Roll = [
		
	]

    seach.map((Stu)=>{
        Roll.push( { value: Stu.Roll, label: Stu.Roll, Name : "Roll" })
    })

    

    const changeselect = (e) => {

        setfilter({
            ...filter,
            Names : "",
            Roll:"",
            [e.Name] : e.value
          })
    }

    const seachbyroll = (e) => {
        setfilter({
            ...filter,
            Status:"",
            Fee_Status:"",
            Semester:"",
            Department:"",
            Names : "",
            Roll:e.value
        })
    }

    const seachbyname = (e) => {
        setfilter({
            ...filter,
            Status:"",
            Fee_Status:"",
            Semester:"",
            Department:"",
            Names : e.value,
            Roll : ""
        })
    }

    if (login==null){
        return <Redirect to="/login"/>;
    }

    if(loading){
        return (
            <React.Fragment>
                <Headers/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}}>Loading...</h1>
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
                <div className="container">
                    <h1>Total Students Displaying (Morning Evening) {data.length}</h1>
                    <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Status}  name="Status" placeholder="Active / Inactive" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Fee_Status}  name="Fee_Status" placeholder="Paid / Unpaid" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Department}  name="Department" placeholder="Department" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                            </div>
                        </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <Select defaultInputValue="" className="Admission_Form_Select" onChange={seachbyname} options={Names}  name="Names" placeholder="Search By Name" required />
                        </div>
                        <div className="col-md-3">
                            <Select className="Admission_Form_Select" onChange={seachbyroll} options={Roll}  name="Roll" placeholder="Search By Roll" required />
                        </div>
                        <div className="col-md-6">
                            <Export csvData={data} fileName={"Students"} />
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
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
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Fee Status</Table.HeaderCell>
                                        <Table.HeaderCell>View</Table.HeaderCell>
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
                                                {
                                                    student.Status==="Inactive"?<Table.Cell style={{color:"red"}} >{student.Status}</Table.Cell>:
                                                    <Table.Cell style={{color:"green"}} >{student.Status}</Table.Cell>
                                                }
                                                {
                                                    student.Fee_Status==="Unpaid"?<Table.Cell style={{color:"red"}} >{student.Fee_Status}</Table.Cell>:
                                                    <Table.Cell style={{color:"green"}} >{student.Fee_Status}</Table.Cell>
                                                }
                                                <Table.Cell><Modals student={student} /></Table.Cell>
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
