import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect ,Link } from "react-router-dom";
import Headers from '../Header/Header';
import {Table } from 'semantic-ui-react';
import Select from "react-select";
import {Export} from '../../Export';
import Footer from '../../Footer/Footer';
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
    const [toggle, setmtoggle] = useState("")
    const [op, setop] = useState(1)

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [filter, setfilter] = useState({
        Fee_Status:"",
        Semester:"",
        Department:"",
        Names : "",
        Roll:""
    })

    useEffect(()=>{
        axios.post("http://localhost:3001/api/ao/students",filter).then((res)=>{
            setdata(res.data.data)
            setloading(false)
            setmtoggle("")

            axios.get("http://localhost:3001/api/all/students").then((res)=>{
                setseach(res.data.data)
            }).catch((err)=>{
                setmessage("Something Went Wrong! Please Try Again After Sometime")
            })

        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[filter,toggle])

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

    const Fee_Status = [
		{ value: 'Paid', label: 'Paid', Name : "Fee_Status" },
		{ value: 'Unpaid', label: 'Unpaid', Name : "Fee_Status" },
	]

    var Names = [
		
	]

    seach.filter((student)=>student.Status=="Active").map((Stu)=>{
        Names.push( { value: Stu.Full_Name, label: Stu.Full_Name, Name : "Names" })
    })

    var Roll = [
		
	]

    seach.filter((student)=>student.Status=="Active").map((Stu)=>{
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
            Fee_Status:"",
            Semester:"",
            Department:"",
            Names : e.value,
            Roll : ""
        })
    }

    const toggles=(t,id)=>{
        setmtoggle(t)
        let Fee_Status = t === "Unpaid" ? "Paid" : "Unpaid"
        axios.put(`http://localhost:3001/api/hod/students/${id}`,{fee:Fee_Status}).then((res=>{
        })).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    }

    if (login==null){
        return <Redirect to="/login"/>;
    }


    if(loading){
        return (
            <React.Fragment>
                <Headers/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} ><MDBSpinner big crazy /></h1>
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
                    <MDBCard cascade narrow>
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
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Dues</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Fee Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { data.map((student,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{index+1}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Roll}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Full_Name}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Father_Name}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Department}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Semester}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Shift}</td>
                                                        <td><Link to={{pathname:"/ao/dues",state:student}}><MDBBtn gradient="blue"><i class="fa fa-exclamation" aria-hidden="true"></i></MDBBtn></Link></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>
                                                                {student.Fee_Status==="Paid"?
                                                                <MDBBtn gradient="blue" onClick={()=>toggles(student.Fee_Status,student.id)}><b>{student.Status==="Unpaid"?"Unpaid":"Paid"}</b></MDBBtn>:
                                                                <MDBBtn outline color="primary"  onClick={()=>toggles(student.Fee_Status,student.id)}><b>{student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}</b></MDBBtn>}
                                                        </td>
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
            <Footer/>
        </React.Fragment>
    )
}

export default Students;
