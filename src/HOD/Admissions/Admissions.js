import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import { Header, Modal , Table} from 'semantic-ui-react';
import Select from 'react-select';

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [Year, setYear] = useState([])

    const login = localStorage.getItem("HOD")

    useEffect(()=>{

        axios.get("http://localhost:3001/api/hod/admissions/years").then((res)=>{
            setYear(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})

        axios.post("http://localhost:3001/api/hod/admissions",{Department:login,Year:new Date().getFullYear()}).then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})
    },[])

    var Years = [
		
	]

    Year.map((Year)=>{
        Years.push( { value: Year.Year, label: Year.Year, Name : "Years" })
    })

    const changeselect = (e) => {
		axios.post("http://localhost:3001/api/hod/admissions",{Department:login,Year:e.value}).then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})
	  }


    if (login==null){
        return <Redirect to="/login"/>;
    }


    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <React.Fragment>
            <Headers/>
            <div className="Student">
                <div class="container">
                    <h1>Total Admissions in {login} : {data.filter((student)=>student.Department==login).length}</h1>
                    <Select style className="Admission_Form_Select" onChange={changeselect} name="Years" placeholder="Year Of Admission" options={Years} required />
                    <div class="row">
                        <div className="col-md-12">
                            <Table celled selectable color="grey">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sr#</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Father's Name</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell>Full Details</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {data.filter((student)=>student.Department==login).map((student,index)=>{
                                        return (
                                            <Table.Row key={index}>
                                                <Table.Cell><b>{index+1}</b></Table.Cell>
                                                <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                                <Table.Cell>{student.Father_Name}</Table.Cell>
                                                <Table.Cell>{student.Email}</Table.Cell>
                                                <Table.Cell>{student.Address}</Table.Cell>
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
        trigger={<button style={{marginRight:"10px"}} className="btn button" toggle active={true} >View</button>}
      >
          <div style={{marginLeft:"100px"}} className="Student">
            <Modal.Description>
                <i className="fa fa-times float-right" onClick={()=>{setOpen(false)}} aria-hidden="true"></i>
                <Header><div style={{background:"grey"}}><h1 className="mb-4">Full Profile Information</h1></div></Header>
                <h2 className="mb-4">{props.student.Full_Name}</h2>
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <p className="card-text"><b>Department</b> : {props.student.Department}</p>
                        <p className="card-text"><b>CNIC</b>: {props.student.CNIC}</p>
                        <p className="card-text"><b>Gender</b>: {props.student.Gender}</p>
                        <p className="card-text"><b>DOB</b> : {props.student.DOB}</p>
                        <p className="card-text"><b>Phone</b> : {props.student.Phone}</p>
                        <p className="card-text"><b>Email</b> : {props.student.Email}</p>
                        <p className="card-text"><b>Address</b> : {props.student.Address}</p>
                        <p className="card-text"><b>Shift</b> : {props.student.Shift}</p>
                    </div>
                    <div className="col-md-6 mt-4">
                        <p className="card-title"><b>Matric Roll</b>: {props.student.Matric_Roll}</p>
                        <p className="card-title"><b>Matric Total Marks</b> : {props.student.Matric_Total}</p>
                        <p className="card-text"><b>Matric Obtained Marks</b> : {props.student.Matric_Obtained_Marks}</p>
                        <p className="card-text"><b>Matric Year</b> : {props.student.Matric_Year}</p>
                        <p className="card-text"><b>Matric Board</b>: {props.student.Matric_Board}</p>
                        <p className="card-text"><b>Inter Roll</b> : {props.student.Inter_Roll}</p>
                        <p className="card-text"><b>Inter Total Marks</b> : {props.student.Inter_Total}</p>
                        <p className="card-text"><b>Inter Obtained Marks</b> : {props.student.Inter_Obtained_Marks}</p>
                        <p className="card-text"><b>Inter Year</b> : {props.student.Inter_Year}</p>
                        <p className="card-text"><b>Inter Board</b> : {props.student.Inter_Board}</p>
                    </div>
                </div>
            </Modal.Description>
          </div>
      </Modal>
    )
  }
