import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import { Header, Modal, Table } from 'semantic-ui-react';

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")

    const login = localStorage.getItem("HOD")

    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/students",{Department:login}).then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[])

    const update_data = () => {
        axios.post("http://localhost:3001/api/hod/students",{Department:login}).then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    }


    const Delete=(id)=>{
        axios.delete(`http://localhost:3001/api/hod/students/${id}`).then((res)=>{
            update_data()
        })
    }

    // const toggles=(e)=>{
    //     let Fee_Status = e.target.textContent === "Unpaid" ? "Paid" : "Unpaid"
    //     axios.put(`http://localhost:3001/api/hod/students/${e.target.id}`,{fee:Fee_Status}).then((res=>{
    //         update_data()
    //     }))
    // }

    if (login==null){
        return <Redirect to="/login"/>;
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
                <div class="container">
                    <h1>Total Students in {login} : {data.filter((student)=>student.Department==login).length}</h1>
                    <div class="row">
                        <div className="col-md-12">
                            <Table celled selectable color="grey">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sr#</Table.HeaderCell>
                                        <Table.HeaderCell>Roll</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Father's Name</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell>Fee Status</Table.HeaderCell>
                                        <Table.HeaderCell>Full Details</Table.HeaderCell>
                                        <Table.HeaderCell>Delete</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    { data.filter((student)=>student.Department==login).map((student,index)=>{
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
                                        <Table.Cell>{student.Email}</Table.Cell>
                                        <Table.Cell>{student.Address}</Table.Cell>
                                        {/* <Table.Cell><button className={`btn ${student.Fee_Status==="Unpaid"?"button":"buttonPaid"}`} toggle active={student.Fee_Status==="Unpaid"?false:true} id={student.id} onClick={toggles} >
                                                    {student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}
                                                </button></Table.Cell> */}
                                        {
                                            student.Fee_Status==="Unpaid"?<Table.Cell style={{color:"red"}} >{student.Fee_Status}</Table.Cell>:
                                            <Table.Cell style={{color:"green"}} >{student.Fee_Status}</Table.Cell>
                                        }
                                        <Table.Cell><Modals student={student} /></Table.Cell>
                                        <Table.Cell><button onClick={() => Delete(student.id)} className="btn btn-danger">Delete</button></Table.Cell>
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
