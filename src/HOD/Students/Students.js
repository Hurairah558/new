import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import Select from "react-select";
import { Table , Modal} from 'semantic-ui-react';
import {Export} from '../../Export';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';

const Students = () => {

    var login = JSON.parse(localStorage.getItem("HOD"))

    const [open, setOpen] = useState(false)

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")
    const [seach,setseach] = useState([])
    const [toggle, setmtoggle] = useState("")
    const [op, setop] = useState(1)

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


    const toggles=(t,id)=>{
        setop(0.3)
        setloading(true)
        setmtoggle(t)
        let Status = t === "Inactive" ? "Active" : "Inactive"
        axios.put(`http://localhost:3001/api/hod/students/status/${id}`,{Statuss:Status}).then((res=>{
            setmtoggle("")
            setloading(false)
            setop(1)
        })).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
            setop(1)
        })
    }

    const Degree_toggles=(t,id)=>{
        setop(0.3)
        setloading(true)
        setmtoggle(t)
        let Status = t === "Move to Completed" ? "Completed" : "Continue"
        axios.put(`http://localhost:3001/api/hod/students/degreestatus/${id}`,{Statuss:Status}).then((res=>{
            setmtoggle("")
            setloading(false)
            setop(1)
        })).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
            setop(1)
        })
    }

    const Upgrade = (e) => {
        e.preventDefault()
        setOpen(false)
        setop(0.3)
        setloading(true)
        axios.post("http://localhost:3001/api/hod/semesterupgrade",{Department:login.Department}).then((res)=>{  
            setmtoggle("Upgrade")
            setloading(false)
            setop(1)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
            setop(1)
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
                <hr style={{fontWeight:'bold'}}/>
                    <div style={{opacity:op}} className="row">
                        <div className="col-md-6">
                            <h1><b>Filter Students</b></h1>
                        </div>
                        <div className="col-md-6">
                            <button style={{background:'transparent',border:'none'}} className="float-right">
                                
                                
                                <Modal
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}
                                        style={{height:"37%",margin:"auto"}}
                                        trigger={<MDBBtn gradient="blue"><b>Semester Upgrade</b></MDBBtn>}
                                    >
                                    <Modal.Header><h1><b>Response</b></h1></Modal.Header>
                                        <Modal.Description>
                                            <h2 className="d-flex justify-content-center ml-4 mb-4 mt-4"><b>Are You Sure You Want to Upgrade the Semester of Paid and Active Students? <br/><br/> This Operation can't be Undone</b></h2>
                                            <hr/>
                                        </Modal.Description>
                                    <div className="row float-right">
                                        <div  style={{marginRight:40}} className="col-md-3">
                                            <MDBBtn onClick={Upgrade} gradient="blue"><b>Yes</b></MDBBtn>
                                        </div>
                                        <div className="col-md-3">
                                            <MDBBtn onClick={() => setOpen(false)} gradient="peach"><b>No</b></MDBBtn>
                                        </div>
                                    </div>
                                </Modal>


                            </button>
                        </div>
                    </div>
                    <hr style={{fontWeight:'bold'}}/>
                    <div style={{opacity:op}} className="row">
                        <div className="col-md-3">
                            <Select  className="Admission_Form_Select" onChange={changeselect} options={Status}  name="Status" placeholder="Active / Inactive" required />
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
                    <hr style={{fontWeight:'bold'}}/>
                    <div style={{opacity:op}} className="row">
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
                    {loading?
                        <div className="d-flex justify-content-center" ><MDBSpinner big crazy /></div>
                        :
                        <div style={{display:'none'}}>
                        <MDBSpinner big crazy />
                    </div>
                    }
                    <MDBCard style={{marginTop:30,opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                              cascade
                              className='gradient-card-header light-blue lighten-1'
                            >
                              <h4 className='h4-responsive mb-0 font-weight-bold'>Students Table : {data.filter((student)=>student.Department==login.Department).length}</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Table celled selectable>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Sr#</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Role_Number</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Name</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Semester</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Shift</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Fee_Status</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Status</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Add_Course</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Full Details</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Degree Status</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    { data.filter((student)=>student.Department==login.Department).map((student,index)=>{
                                                        return (
                                                    <Table.Row key={index}>
                                                        <Table.Cell style={{fontWeight:'bold'}}><b>{index+1}</b></Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}><b>{student.Roll}</b></Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}><b>{student.Full_Name}</b></Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{student.Semester}</Table.Cell>
                                                        <Table.Cell style={{fontWeight:'bold'}}>{student.Shift}</Table.Cell>
                                                        {
                                                            student.Fee_Status==="Unpaid"?<Table.Cell style={{color:"red"}} ><b>{student.Fee_Status}</b></Table.Cell>:
                                                            <Table.Cell style={{color:"green"}} ><b>{student.Fee_Status}</b></Table.Cell>
                                                        }
                                                        {
                                                            <Table.Cell>
                                                                {student.Status==="Active"?
                                                                <MDBBtn gradient="blue" onClick={()=>toggles(student.Status,student.id)}><b>{student.Status==="Inactive"?"Inactive":"Active"}</b></MDBBtn>:
                                                                <MDBBtn outline color="primary"  onClick={()=>toggles(student.Status,student.id)}><b>{student.Status==="Inactive"?"Inactive":"Active"}</b></MDBBtn>}
                                                            </Table.Cell>
                                                        }
                                                        <Table.Cell><Link to={{pathname:"/hod/assigncourse",state:student}}><MDBBtn gradient="blue"><i class="fa fa-book" aria-hidden="true"></i></MDBBtn></Link></Table.Cell>
                                                        <Table.Cell><Link to={{pathname:"/hod/editstudent",state:student}}><MDBBtn gradient="blue"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></MDBBtn></Link></Table.Cell>
                                                        {
                                                            <Table.Cell>
                                                                {student.Degree_Status==="Continue"?
                                                                <MDBBtn gradient="blue" onClick={()=>Degree_toggles("Move to Completed",student.id)}><b>{student.Degree_Status==="Completed"?"Completed":"Move to Completed"}</b></MDBBtn>:
                                                                <MDBBtn outline color="primary"  onClick={()=>Degree_toggles("Continue",student.id)}><b>{student.Degree_Status==="Completed"?"Completed":"Move to Completed"}</b></MDBBtn>}
                                                            </Table.Cell>
                                                        }
                                                    </Table.Row>
                                                    )})}
                                                </Table.Body>
                                            </Table>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Students;
