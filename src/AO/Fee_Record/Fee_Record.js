import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Select from "react-select";
import Header from '../Header/Header';
import { Table , Button, Modal  } from 'semantic-ui-react';
function Fee_Record() {

    const [Semester, setSemester] = useState("")
    const [data,setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")

    const changeselect = (e) => {
        setSemester(e.value)
    }


    const changeselectsemester = (e) => {
        setloading(true)
        axios.post("http://localhost:3001/api/ao/old/students/record",{Fall_Spring:e.value}).then((res)=>{
            setdata(res.data.data)
            setloading(false)

        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
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

    const [validate,setvalidate] = useState("")

    const Create = (e) => {
        axios.post("http://localhost:3001/api/ao/students/record",{Semester:Semester}).then((res)=>{
            if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
        }).catch((err)=>{console.log(err)})
    }

    // const toggles=(e)=>{
    //     setmtoggle(e.value)
    //     let Fee_Status = e.target.textContent === "Unpaid" ? "Paid" : "Unpaid"
    //     axios.put(`http://localhost:3001/api/hod/students/${e.target.id}`,{fee:Fee_Status}).then((res=>{
    //     }))
    // }

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
                <div className="container">
                    <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />              
                    <button style={{padding:"10px 100px"}} className="btn btn-primary" onClick={Create} >
                    <Modals validate={validate} />
                    </button>
                    <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <Select className="Admission_Form_Select" onChange={changeselectsemester} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                            </div>
                        </div>
                    <hr/>
                    {!loading?
                    data.length>0?
                    <div className="row">
                        <div className="col-md-12">
                            <Table celled selectable color="grey">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sr#</Table.HeaderCell>
                                        <Table.HeaderCell>Roll</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Father's Name</Table.HeaderCell>
                                        <Table.HeaderCell>Department</Table.HeaderCell>
                                        <Table.HeaderCell>Phone</Table.HeaderCell>
                                        <Table.HeaderCell>Semester</Table.HeaderCell>
                                        <Table.HeaderCell>Shift</Table.HeaderCell>
                                        <Table.HeaderCell>Fee Status</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    { data.map((student,index)=>{
                                        return (
                                            <Table.Row key={index}>
                                                <Table.Cell><b>{index+1}</b></Table.Cell>
                                                <Table.Cell><b>{student.Roll}</b></Table.Cell>
                                                <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                                <Table.Cell>{student.Father_Name}</Table.Cell>
                                                <Table.Cell>{student.Department}</Table.Cell>
                                                <Table.Cell>{student.Phone}</Table.Cell>
                                                <Table.Cell>{student.Semester}</Table.Cell>
                                                <Table.Cell>{student.Shift}</Table.Cell>
                                                <Table.Cell><button style={{margin:"0 10px"}} className={`btn ${student.Fee_Status==="Unpaid"?"button":"buttonPaid"}`} toggle active={student.Fee_Status==="Unpaid"?false:true} id={student.id} >
                                                    {student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}
                                                </button></Table.Cell>
                                            </Table.Row>
                                    )})}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>:<div></div>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:250}} >Loading...</h1>}
                </div>
		    </div>
        </React.Fragment>
    )
}

export default Fee_Record;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Create Record</Button>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 className="d-flex justify-content-center">{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
				<hr/>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }