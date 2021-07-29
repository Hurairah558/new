import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Select from 'react-select';
import { Table } from 'semantic-ui-react';
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
function AwardLists() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [data, setdata] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    useEffect(()=>{
        axios.post("http://localhost:3001/api/ssio/attendance").then((res)=>{
			setdata(res.data.data)
		})
        .catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    },[])


    const update=()=>{
        axios.post("http://localhost:3001/api/ssio/attendance").then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/ssio/attendance/${id}`).then((res)=>{
            update()
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }


    const Fall_Spring = [
		{ value: 'Fall-2021', label: 'Fall-2021', Name : "Fall_Spring" },
		{ value: 'Spring-2021', label: 'Spring-2021', Name : "Fall_Spring" },
		{ value: 'Fall-2022', label: 'Fall-2022', Name : "Fall_Spring" },
		{ value: 'Spring-2022', label: 'Spring-2022', Name : "Fall_Spring" },
		{ value: 'Fall-2023', label: 'Fall-2023', Name : "Fall_Spring" },
		{ value: 'Spring-2023', label: 'Spring-2023', Name : "Fall_Spring" },
		{ value: 'Fall-2024', label: 'Fall-2024', Name : "Fall_Spring" },
		{ value: 'Spring-2024', label: 'Spring-2024', Name : "Fall_Spring" },
		{ value: 'Fall-2025', label: 'Fall-2025', Name : "Fall_Spring" },
		{ value: 'Spring-2025', label: 'Spring-2025', Name : "Fall_Spring" },
		{ value: 'Fall-2026', label: 'Fall-2026', Name : "Fall_Spring" },
		{ value: 'Spring-2026', label: 'Spring-2026', Name : "Fall_Spring" },
		{ value: 'Fall-2027', label: 'Fall-2027', Name : "Fall_Spring" },
		{ value: 'Spring-2027', label: 'Spring-2021', Name : "Fall_Spring" },
	]

    const changeselects = (e) => {
        axios.post("http://localhost:3001/api/ssio/attendance",{Fall_Spring:e.value,Department:login.Department}).then((res)=>{
            setdata(res.data.data)
    }).catch((err)=>{
        setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
    }
    if(message!=""){
        return (
            <React.Fragment>
                <Header/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Fall / Spring</h4>
                            </MDBView>
                                <MDBCardBody>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Select className="Admission_Form_Select w-100" onChange={changeselects} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>
                                    </div>
                                    
                                <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    {data.length>0?
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                    <MDBRow>
                        <MDBCol md='12'>
                        <MDBView
                            cascade
                            className='gradient-card-header light-blue lighten-1'
                        >
                            <h4 className='h4-responsive mb-0 font-weight-bold'>Attendance Lists</h4>
                        </MDBView>
                            <MDBCardBody>
                            <table className="table table-hover table-bordered">    
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Fall / Spring</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>View</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>         
                                            {data.map((Course,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Instructor}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Course_Title}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Course_Code}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Shift}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Semester}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Fall_Spring}</td>
                                                        <td  style={{fontWeight:'bold',textAlign:'center'}}><Link to={{pathname:"/ssio/attendancedetails",state:{Course}}} ><MDBBtn gradient="blue"><b>View</b></MDBBtn></Link></td>
                                                        <td  style={{fontWeight:'bold',textAlign:'center'}}><MDBBtn onClick={()=>Delete(Course.id)} gradient="peach"><b>Delete</b></MDBBtn></td>
                                                    </tr>
                                            )})
                                            }
                                        </tbody>
                                    </table>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:150}} >Nothing to Show...</h1>}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default AwardLists;
