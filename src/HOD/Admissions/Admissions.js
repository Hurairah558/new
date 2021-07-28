import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import { Header, Modal , Table} from 'semantic-ui-react';
import Select from 'react-select';
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

    const [data,setdata] = useState([{
        Year:""
    }])
    const [loading, setloading] = useState(true)
    const [Year, setYear] = useState([])
    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    const login = JSON.parse(localStorage.getItem("HOD"))

    useEffect(()=>{

        axios.get("http://localhost:3001/api/hod/admissions/years").then((res)=>{
            setYear(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})

        axios.post("http://localhost:3001/api/hod/admissions",{Department:login!=null?login.Department:"",Year:new Date().getFullYear()}).then((res)=>{
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
		axios.post("http://localhost:3001/api/hod/admissions",{Department:login!=null?login.Department:"",Year:e.value}).then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})
	  }


    if (login==null){
        return <Redirect to="/login"/>;
    }

    if(message!=""){
        return (
            <React.Fragment>
                <Header/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            </React.Fragment>
        )
    }


    if(loading){
        return (
            <React.Fragment>
                <Header/>
                <div className="d-flex justify-content-center" style={{marginTop:350}} ><MDBSpinner big crazy /></div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Headers/>
            <div className="Student">
                <div class="container">
                    <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Select Year</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <hr/>
                                        <Select style className="Admission_Form_Select w-100" onChange={changeselect} name="Years" placeholder="Year Of Admission" options={Years} required />
                                    <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Admissions {data[0].Year}</h4>
                                </MDBView>
                                <MDBCardBody>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Email</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Address</th>
                                            <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Full Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.filter((student)=>student.Department==login.Department).map((student,index)=>{
                                            return (
                                                <tr key={index}>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}><b>{index+1}</b></td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Full_Name}</b></td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Father_Name}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Email}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Address}</td>
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
