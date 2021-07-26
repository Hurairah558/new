import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../Header/Header';
import Select from "react-select";
import { Button, Header, Modal , Table } from 'semantic-ui-react';
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

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [seach,setseach] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")
    const [op, setop] = useState(1)

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
                <h1 className="d-flex justify-content-center" style={{marginTop:350}}><MDBSpinner big crazy /></h1>
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
                    <MDBCard cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Filter Students</h4>
                            </MDBView>
                                <MDBCardBody>
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
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op,marginTop:30}}cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Students {data.length}</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Department</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Address</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Email</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Status</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Fee Status</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>View</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { data.map((student,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{index+1}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Roll}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Full_Name}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Father_Name}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Department}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Address}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Email}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Semester}</td>
                                                        {
                                                            student.Status==="Inactive"?<td style={{color:"red",fontWeight:'bold',textAlign:'center'}} >{student.Status}</td>:
                                                            <td style={{color:"green",fontWeight:'bold',textAlign:'center'}} >{student.Status}</td>
                                                        }
                                                        {
                                                            student.Fee_Status==="Unpaid"?<td style={{color:"red",fontWeight:'bold',textAlign:'center'}} >{student.Fee_Status}</td>:
                                                            <td style={{color:"green"}} >{student.Fee_Status}</td>
                                                        }
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><Modals student={student} /></td>
                                                    </tr>
                                            )})}
                                        </tbody>
                                    </table>
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







function Modals(props) {
    const [open, setOpen] = React.useState(false)
  
    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<MDBBtn gradient="blue" >View</MDBBtn>}
      >
          <div style={{marginLeft:"100px"}} className="Student">
            <Modal.Description>
                <Header>
                    <hr/>
                        <div ><h1 className="mb-4"><b>Full Profile Information</b></h1></div>
                    <hr/>
                </Header>
                <h2 className="mb-4">{props.student.Full_Name}</h2>
                <hr/>
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
