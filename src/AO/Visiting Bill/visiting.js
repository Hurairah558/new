import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PDF from './Bill';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import Select from "react-select";
import { Link } from "react-router-dom";
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
const Visiting = () =>{

    const [Instructors, setInstructors] = useState([])
    const [data, setdata] = useState([])
    const [message, setmessage] = useState("")
    const [visiting, setvisiting] = useState({
        Instructor : "" , Designation : "" , Periods : "" , Amount : ""
    })

    useEffect(() => {
        axios.post("http://localhost:3001/api/ssio/instructors").then((res)=>{
            setInstructors(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
        axios.get("http://localhost:3001/api/ao/visiting").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })

    }, [])



    const Designation = [
		{ value: 'Professor', label: 'Professor', Name : "Designation" },
		{ value: 'Associate professor', label: 'Associate professor', Name : "Designation" },
		{ value: 'Assistant professor', label: 'Assistant professor', Name : "Designation" },
		{ value: 'Lecturer', label: 'Lecturer', Name : "Designation" },
		{ value: 'CTI', label: 'CTI', Name : "Designation" }
	]

    const Amount = [
		{ value: '1000', label: 'Rs.1000', Name : "Amount" },
		{ value: '1100', label: 'Rs.1100', Name : "Amount" },
		{ value: '1200', label: 'Rs.1200', Name : "Amount" }
	]

    var Instructorss = [
		
	]

    Instructors.map((Instructor)=>{
        Instructorss.push( { value: Instructor.Name, label: Instructor.Name, Name : "Instructor" })
    })

    const change = (e) => {
		setvisiting({
		  ...visiting,
		  [e.target.name] : e.target.value
		})
	  }

      const changeselect = (e) => {
		setvisiting({
		  ...visiting,
		  [e.Name] : e.value
		})
	  }


  
    const submitHandler = () =>{
        axios.post("http://localhost:3001/api/ao/visiting" , visiting).then((res)=>{
          }).catch((error)=>{
            
          })
    }
      return (
    
    <>
    <Header/>
        <div className="Student">
            <div className="container">
            <MDBCard cascade narrow>
                <MDBRow>
                    <MDBCol md='12'>
                    <MDBView
                        cascade
                        className='gradient-card-header light-blue lighten-1'
                    >
                        <h2 className='h2-responsive mb-0 font-weight-bold'>Pay Bill for Visiting Teachers</h2>
                    </MDBView>
                        <MDBCardBody>
                        <form className="form">
                            <div className="row">
                                <div className="col-md-4">	
                                    <p className="bill_p">Instructor <span className="text-danger">*</span></p>
                                    <Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Instructor" placeholder="Instructor Name" options={Instructorss} required />							
                                </div>
                                <div className="col-md-4">	
                                    <p className="bill_p">Designation <span className="text-danger">*</span></p>
                                    <Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Designation" placeholder="Select Designation" options={Designation} required/>							
                                </div>
                                <div className="col-md-4">	
                                    <p className="bill_p">Amount per Lecture <span className="text-danger">*</span></p>
                                    <Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Amount" placeholder="Rs. 1000" options={Amount} required/>							
                                </div>
                                <div className="col-md-4">
                                    <p className="bill_p">No. of Periods <span className="text-danger">*</span></p>
                                    <input className="bill_Input" onChange={change} type="text" name="Periods" placeholder="Periods #" required/>
                                </div>
                                <div className="col-md-4">
                                    <Link to={{pathname:"/ao/bill",state:visiting}}><MDBBtn onClick={submitHandler} style={{marginTop:25,marginLeft:20}} gradient="blue"><b>Generate Bill</b></MDBBtn></Link>
                                </div>
                            </div>
                        </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <MDBCard cascade narrow style={{marginTop:30}}>
                <MDBRow>
                    <MDBCol md='12'>
                    <MDBView
                        cascade
                        className='gradient-card-header light-blue lighten-1'
                    >
                        <h2 className='h2-responsive mb-0 font-weight-bold'>Records of Pay Bill for Visiting Teachers</h2>
                    </MDBView>
                        <MDBCardBody>
                        <div class="row">
                            <div className="col-md-12">
                            <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Designation</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Total Lectures</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Amount per Lecture</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Total Amout</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Time of Payment</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((Employee,index)=>{
                                            return (
                                                <tr key={index}>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Instructor}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Designation}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>Rs. {Employee.Periods}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Amount_per_lecture}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Total_Amount}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Time}</td>
                                                </tr>
                                        )})
                                        }
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            </div>
        </div>
      <Footer/>
    </>
      );
  }

  export default Visiting;