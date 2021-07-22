import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect , Link } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import Select from "react-select";
import { Header, Modal, Table } from 'semantic-ui-react';
import {Export} from '../../Export';

const Students = () => {

    axios.defaults.withCredentials = true

    var login = JSON.parse(localStorage.getItem("HOD"))

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")
    const [seach,setseach] = useState([])
    const [toggle, setmtoggle] = useState("")

    const [filter, setfilter] = useState({
        Status:"",
        Fee_Status:"",
        Department: login.Department,
        Semester:"",
        Shift:"",
        Degree_Status:"",
        Gender:"",
        Names : "",
        Roll:""
    })

    var dep = ""

    const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" }
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

    const Gender = [
		{ value: 'Male', label: 'Male', Name : "Gender" },
		{ value: 'Female', label: 'Female', Name : "Gender" },
	]

    const Degree_Status = [
		{ value: 'Completed', label: 'Completed', Name : "Degree_Status" },
		{ value: 'Continue', label: 'Continue', Name : "Degree_Status" },
	]

    const Fee_Status = [
		{ value: 'Paid', label: 'Paid', Name : "Fee_Status" },
		{ value: 'Unpaid', label: 'Unpaid', Name : "Fee_Status" },
	]


    if(login!=null){
        dep = login.Department
    }
    else{
        dep = login
    }

    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/students",filter).then((res)=>{
            setdata(res.data.data)
            setloading(false)
            setmtoggle("")
            axios.get("http://localhost:3001/api/alll/students").then((res)=>{
                setseach(res.data.data)
            }).catch((err)=>{
                setmessage("Something Went Wrong! Please Try Again After Sometime")
        })

        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[filter,toggle])


    const Delete=(id)=>{
        axios.delete(`http://localhost:3001/api/hod/students/${id}`).then((res)=>{
            setmtoggle("Delete")
        })
    }

    const toggles=(e)=>{
        setmtoggle(e.value)
        let Status = e.target.textContent === "Inactive" ? "Active" : "Inactive"
        axios.put(`http://localhost:3001/api/hod/students/status/${e.target.id}`,{Statuss:Status}).then((res=>{
            setmtoggle("")
        }))
    }

    const Degree_toggles=(e)=>{
        setmtoggle(e.value)
        let Status = e.target.textContent === "Move to Completed" ? "Completed" : "Continue"
        axios.put(`http://localhost:3001/api/hod/students/degreestatus/${e.target.id}`,{Statuss:Status}).then((res=>{
            setmtoggle("")
        }))
    }

    const Upgrade = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/hod/semesterupgrade",{Department:login.Department}).then((res)=>{
            setmtoggle("Upgrade")
        })
    }

    var Names = [
		
	]

    seach.filter((student)=>student.Department==login.Department).map((Stu)=>{
        Names.push( { value: Stu.Full_Name, label: Stu.Full_Name, Name : "Names" })
    })

    var Roll = [
		
	]

    seach.filter((student)=>student.Department==login.Department).map((Stu)=>{
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
            Department: login.Department,
            Semester:"",
            Shift:"",
            Degree_Status:"",
            Gender:"",
            Names : "",
            Roll:e.value
        })
    }

    const seachbyname = (e) => {
        setfilter({
            ...filter,
            Status:"",
            Fee_Status:"",
            Department: login.Department,
            Semester:"",
            Shift:"",
            Degree_Status:"",
            Gender:"",
            Names : e.value,
            Roll : ""
        })
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Total Students in {login.Department} : {data.filter((student)=>student.Department==login.Department).length}</h1>
                        </div>
                        <div className="col-md-6">
                            <button onClick={Upgrade} className="btn btn-success float-right">Semester Upgrade</button>
                        </div>
                    </div>
                    <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Status}  name="Status" placeholder="Active / Inactive" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Fee_Status}  name="Fee_Status" placeholder="Paid / Unpaid" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Shift" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Degree_Status}  name="Degree_Status" placeholder="Completed / Continue" required />
                            </div>
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselect} options={Gender}  name="Gender" placeholder="Male / Female" required />
                            </div>
                        </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <Select className="Admission_Form_Select" onChange={seachbyname} options={Names}  name="Names" placeholder="Search By Name" required />
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
                                        <Table.HeaderCell>Semester</Table.HeaderCell>
                                        <Table.HeaderCell>Shift</Table.HeaderCell>
                                        <Table.HeaderCell>M</Table.HeaderCell>
                                        <Table.HeaderCell>Fee Status</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Add Course</Table.HeaderCell>
                                        <Table.HeaderCell>Full Details</Table.HeaderCell>
                                        <Table.HeaderCell>Degree Status</Table.HeaderCell>
                                        {/* <Table.HeaderCell>Delete</Table.HeaderCell> */}
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    { data.filter((student)=>student.Department==login.Department).map((student,index)=>{
                                        return (     
                                        // <div style={{border:"1px dashed",paddingBottom:"10px",paddingTop:"10px",marginBottom:"10px"}} className="col-xl-3">
                                        //     <h4>{student.Full_Name} - {student.Roll}</h4>
                                        //     {student.Gender === "Male"?
                                        //     <p>S/O {student.Father_Name}</p>:
                                        //     <p>D/O {student.Father_Name}</p>
                                        //     }
                                        //     <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp; {student.Address} </p>
                                        //     <p><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;{student.Email}</p>
                                        //     <p><i className="glyphicon glyphicon-globe"></i></p>
                                        //     <Modals student={student} />
                                        //     <button className={`btn ${student.Fee_Status==="Unpaid"?"button":"buttonPaid"}`} toggle active={student.Fee_Status==="Unpaid"?false:true} id={student.id} onClick={toggles} >
                                        //         {student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}
                                        //     </button>
                                        //     <button onClick={() => Delete(student.id)} className="ml-4 btn btn-danger">Delete</button>
                                        // </div>
                                    <Table.Row key={index}>
                                        <Table.Cell><b>{index+1}</b></Table.Cell>
                                        <Table.Cell><b>{student.Roll}</b></Table.Cell>
                                        <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                        <Table.Cell>{student.Father_Name}</Table.Cell>
                                        <Table.Cell>{student.Semester}</Table.Cell>
                                        <Table.Cell>{student.Shift}</Table.Cell>
                                        <Table.Cell>{student.Matric_Total}</Table.Cell>
                                        {
                                            student.Fee_Status==="Unpaid"?<Table.Cell style={{color:"red"}} >{student.Fee_Status}</Table.Cell>:
                                            <Table.Cell style={{color:"green"}} >{student.Fee_Status}</Table.Cell>
                                        }
                                        {
                                            <Table.Cell><button style={{margin:"0 10px"}} className={`btn ${student.Status==="Inactive"?"button":"buttonPaid"}`} toggle active={student.Status==="Inactive"?false:true} id={student.id} onClick={toggles} >
                                            {student.Status==="Inactive"?"Inactive":"Active"}
                                            </button></Table.Cell>
                                        }
                                        <Table.Cell><Link to={{pathname:"/hod/assigncourse",state:student}}><button className="btn button" toggle="true" active={"true"} ><i class="fa fa-book" aria-hidden="true"></i></button></Link></Table.Cell>
                                        <Table.Cell><Link to={{pathname:"/hod/editstudent",state:student}}><button className="btn button" toggle="true" active={"true"} ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link></Table.Cell>
                                        {/* <Table.Cell><button onClick={() => Delete(student.id)} className="btn btn-danger">Delete</button></Table.Cell> */}
                                        {
                                            <Table.Cell><button style={{margin:"0 10px"}} className={`btn ${student.Degree_Status==="Continue"?"button":"buttonPaid"}`} toggle active={student.Degree_Status==="Continue"?false:true} id={student.id} onClick={Degree_toggles} >
                                            {student.Degree_Status==="Continue"?"Move to Completed":"Completed"}
                                            </button></Table.Cell>
                                        }
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
        trigger={<button style={{marginRight:"10px"}} className="btn button" toggle="true" active={"true"} >View</button>}
      >
          <div style={{marginLeft:"100px"}} className="Student">
          <Modal.Description>
          <i className="fa fa-times float-right" onClick={()=>{setOpen(false)}} aria-hidden="true"></i>
            <Header><div style={{background:"grey"}}><h1 className="mb-4">Full Profile Information</h1></div></Header>
            <h2 className="mb-4">{props.student.Full_Name} - {props.student.Roll}</h2>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <p className="card-text"><b>Department</b> : {props.student.Department}</p>
                    <p className="card-text"><b>CNIC</b>: {props.student.CNIC}</p>
                    <p className="card-text"><b>Gender</b>: {props.student.Gender}</p>
                    <p className="card-text"><b>DOB</b> : {props.student.DOB}</p>
                    <p className="card-text"><b>Phone</b> : {props.student.Phone}</p>
                    <p className="card-text"><b>Email</b> : {props.student.Email}</p>
                    <p className="card-text"><b>Address</b> : {props.student.Address}</p>
                    <p className="card-text"><b>Semester</b> : {props.student.Semester}</p>
                    <p className="card-text"><b>Fee Status</b> : {props.student.Fee_Status}</p>
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
