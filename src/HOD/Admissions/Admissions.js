import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Headers from '../../Fixed Components/Header';
import { Button, Header, Modal } from 'semantic-ui-react';
import Select from 'react-select';

const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [Year, setYear] = useState([])

    const login = localStorage.getItem("HOD")

    useEffect(()=>{

        axios.get("http://localhost:3001/api/hod/admissions/years").then((res)=>{
            setYear(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})

        axios.post("http://localhost:3001/api/hod/admissions",{Department:login,Year:new Date().getFullYear()}).then((res)=>{
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
		axios.post("http://localhost:3001/api/hod/admissions",{Department:login,Year:e.value}).then((res)=>{
            setdata(res.data.data)
            setloading(false)
        }).catch((err)=>{console.log(err)})
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
            <p className="Admission_p">Select Year</p>
			<Select className="Admission_Form_Select" onChange={changeselect} name="Years" placeholder="Year Of Admission" options={Years} required />
            <h1>Total Students in {login} : {data.filter((student)=>student.Department==login).length}</h1>
            { data.filter((student)=>student.Department==login).map((student,index)=>{
                return (     
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                        <h5 className="card-title"><b>index</b> : {index}</h5>
                            <h5 className="card-title"><b>Name</b> : {student.Full_Name}</h5>
                            <p className="card-text"><b>Department</b> : {student.Department}</p>
                            <p className="card-text"><b>CNIC</b>: {student.CNIC}</p>
                            <p className="card-text"><b>DOB</b> : {student.DOB}</p>
                            <p className="card-text"><b>Email</b> : {student.Email}</p>
                            <p className="card-text"><b>Address</b> : {student.Address}</p>
                            <p className="card-text"><b>Shift</b> : {student.Shift}</p>
                            <p className="card-text"><b>Year</b> : {student.Year}</p>
                            <Modals student={student} />
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
            <h5 className="card-title"><b>Name</b> : {props.student.Full_Name}</h5>
            <p className="card-text"><b>Department</b> : {props.student.Department}</p>
            <p className="card-text"><b>CNIC</b>: {props.student.CNIC}</p>
            <p className="card-text"><b>DOB</b> : {props.student.DOB}</p>
            <p className="card-text"><b>Email</b> : {props.student.Email}</p>
            <p className="card-text"><b>Fee Status</b> : {props.student.Fee_Status}</p>
            <p className="card-text"><b>Shift</b> : {props.student.Shift}</p>
          </Modal.Description>
          </section>
      </Modal>
    )
  }
