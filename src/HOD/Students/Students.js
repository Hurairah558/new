import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import { Button, Header, Modal } from 'semantic-ui-react'

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)

    const login = localStorage.getItem("HOD")

    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/students",{Department:login}).then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})
    },[])

    const update_data = () => {
        axios.post("http://localhost:3001/api/hod/students",{Department:login}).then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{console.log(err)})
    }


    const Delete=(id)=>{
        axios.delete(`http://localhost:3001/api/hod/students/${id}`).then((res)=>{
            update_data()
            // Delete Success Message
        })
    }

    const toggles=(e)=>{
        let Fee_Status = e.target.textContent === "Unpaid" ? "Paid" : "Unpaid"
        axios.put(`http://localhost:3001/api/hod/students/${e.target.id}`,{fee:Fee_Status}).then((res=>{
            update_data()
        }))
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
            <section>
            <h1>Total Students in {login} : {data.filter((student)=>student.Department==login).length}</h1>
            { data.filter((student)=>student.Department==login).map((student,index)=>{
                return (     
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                        <h5 className="card-title"><b>Roll</b> : {student.Roll}</h5>
                        <h5 className="card-title"><b>index</b> : {index}</h5>
                            <h5 className="card-title"><b>Name</b> : {student.Full_Name}</h5>
                            <p className="card-text"><b>Department</b> : {student.Department}</p>
                            <p className="card-text"><b>CNIC</b>: {student.CNIC}</p>
                            <p className="card-text"><b>DOB</b> : {student.DOB}</p>
                            <p className="card-text"><b>Email</b> : {student.Email}</p>
                            <p className="card-text"><b>Address</b> : {student.Address}</p>
                            <p className="card-text"><b>Semester</b> : {student.Semester}</p>
                            <p className="card-text"><b>Fee Status</b> : {student.Fee_Status}</p>
                            <p className="card-text"><b>Shift</b> : {student.Shift}</p>
                            <Modals student={student} />
                            <Button toggle active={student.Fee_Status==="Unpaid"?false:true} id={student.id} onClick={toggles} >
                                {student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}
                            </Button>
                            <button onClick={() => Delete(student.id)} className="ml-4 btn btn-danger">Delete</button>
                        </div>
                    </div>
            )})}
            </section>
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
        trigger={<Button toggle active={true} >View</Button>}
      ><section>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <h5 className="card-title"><b>Roll</b> : {props.student.Roll}</h5>
            <h5 className="card-title"><b>Name</b> : {props.student.Full_Name}</h5>
            <p className="card-text"><b>Department</b> : {props.student.Department}</p>
            <p className="card-text"><b>CNIC</b>: {props.student.CNIC}</p>
            <p className="card-text"><b>DOB</b> : {props.student.DOB}</p>
            <p className="card-text"><b>Email</b> : {props.student.Email}</p>
            <p className="card-text"><b>Address</b> : {props.student.Address}</p>
            <p className="card-text"><b>Semester</b> : {props.student.Semester}</p>
            <p className="card-text"><b>Fee Status</b> : {props.student.Fee_Status}</p>
            <p className="card-text"><b>Shift</b> : {props.student.Shift}</p>
          </Modal.Description>
          </section>
      </Modal>
    )
  }
