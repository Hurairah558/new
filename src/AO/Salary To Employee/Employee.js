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

    const [Employee, setEmployee] = useState([])
    const [message, setmessage] = useState("")
    const [data, setdata] = useState([])
    const [visiting, setvisiting] = useState({
        Employee : "" , Designation : "" , Amount : ""
    })

    const [employee, setemployee] = useState({
        Name : "" , Designation : ""
    })

    useEffect(() => {
        axios.get("http://localhost:3001/api/ao/employee").then((res)=>{
            setEmployee(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })

        axios.get("http://localhost:3001/api/ao/employeebill").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })

    }, [])



    var Designation = [
		
	]

    Employee.map((Employeess)=>{
        Designation.push( { value: Employeess.Designation, label: Employeess.Designation, Name : "Designation" })
    })

    const Amount = [
		{ value: '1000', label: 'Rs.1000', Name : "Amount" },
		{ value: '1100', label: 'Rs.1100', Name : "Amount" },
		{ value: '1200', label: 'Rs.1200', Name : "Amount" }
	]

    var Employees = [
		
	]

    Employee.map((Employeess)=>{
        Employees.push( { value: Employeess.Name, label: Employeess.Name, Name : "Name" })
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


      const changee = (e) => {
		setemployee({
		  ...employee,
		  [e.target.name] : e.target.value
		})
	  }

    const Add = (e) =>{
        e.preventDefault()
        if(employee.Name===""||employee.Designation===""){
            alert("Please Fill Red Marked Fields")
        }
        else{
        axios.post("http://localhost:3001/api/ao/employee" , employee).then((res)=>{
            if (res.data.message){
                
                alert(res.data.message)
            }
            else{
                
              alert(res.data)
            }
            }).catch((error)=>{
            })
        }
    }
  
    const submitHandler = () =>{
        axios.post("http://localhost:3001/api/ao/employeebill" , visiting).then((res)=>{
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
                        <h2 className='h2-responsive mb-0 font-weight-bold'>Add Employee</h2>
                    </MDBView>
                        <MDBCardBody>
                        <form className="form">
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="bill_p">Employee <span className="text-danger">*</span></p>
                                    <input className="bill_Input" onChange={changee} type="text" name="Name" placeholder="Employee's Name" required/>
                                </div>	
                                <div className="col-md-4">	
                                    <p className="bill_p">Designation <span className="text-danger">*</span></p>
                                    <input className="bill_Input" onChange={changee} type="text" name="Designation" placeholder="Employee's Designation" required/>
                                </div>
                                <div className="col-md-4">	
                                    <MDBBtn onClick={Add} style={{marginTop:25}} gradient="blue"><b>Add Employee</b></MDBBtn>
                                </div>
                            </div>
                        </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <MDBCard cascade narrow style={{marginTop:30}} >
                <MDBRow>
                    <MDBCol md='12'>
                    <MDBView
                        cascade
                        className='gradient-card-header light-blue lighten-1'
                    >
                        <h2 className='h2-responsive mb-0 font-weight-bold'>Salary to Employee</h2>
                    </MDBView>
                        <MDBCardBody>
                        <form className="form">
                            <div className="row">
                                <div className="col-md-4">	
                                    <p className="bill_p">Instructor <span className="text-danger">*</span></p>
                                    <Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Instructor" placeholder="Instructor Name" options={Employees} required />							
                                </div>
                                <div className="col-md-4">	
                                    <p className="bill_p">Designation <span className="text-danger">*</span></p>
                                    <Select className="Admission_Form_Select_Dept" onChange={changeselect} name="Designation" placeholder="Select Designation" options={Designation} required/>							
                                </div>
                                <div className="col-md-4">	
                                    <p className="bill_p">Total Amount (PKR) <span className="text-danger">*</span></p>
                                    <input className="bill_Input" onChange={change} type="text" name="Amount" placeholder="Periods #" required/>
                                </div>
                                <div className="col-md-4">
                                    <Link to={{pathname:"/ao/employeebill",state:visiting}}><MDBBtn onClick={submitHandler} style={{marginTop:25,marginLeft:20}} gradient="blue"><b>Generate Bill</b></MDBBtn></Link>
                                </div>
                            </div>
                        </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            {data.length>0?
            <MDBCard style={{marginTop:30}} cascade narrow>
                <MDBRow>
                    <MDBCol md='12'>
                    <MDBView
                        cascade
                        className='gradient-card-header light-blue lighten-1'
                    >
                        <h4 className='h4-responsive mb-0 font-weight-bold'>Employees Salary Record</h4>
                    </MDBView>
                    <MDBCardBody>
                        <div class="row">
                            <div className="col-md-12">
                            <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Employee Name</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Designation</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Amount</th>
                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Time of Payment</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((Employee,index)=>{
                                            return (
                                                <tr key={index}>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Name}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>{Employee.Designation}</td>
                                                    <td style={{fontWeight:'bold',textAlign:'center'}}>Rs. {Employee.Amount}</td>
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
                </MDBCard>:
                <div></div>}
            </div>
        </div>
      <Footer/>
    </>
      );
  }

  export default Visiting;