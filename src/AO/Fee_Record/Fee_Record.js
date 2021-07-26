import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Select from "react-select";
import Header from '../Header/Header';
import { Table , Button, Modal  } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
function Fee_Record() {

    const [Semester, setSemester] = useState("")
    const [data,setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")
    const [op, setop] = useState(1)

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
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
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
                    <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Create Fee Record</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>

                                        <div className="col-md-3">
                                            <button style={{border:'none',background:"transparent",marginTop:20}} onClick={Create} >
                                                <Modals validate={validate} />
                                            </button>
                                        </div>

                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>View All Records</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <hr/>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Select className="Admission_Form_Select" onChange={changeselectsemester} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                            </div>
                                        </div>
                                    <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    
                    {!loading?
                    data.length>0?
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Fee Record</h4>
                            </MDBView>
                                <MDBCardBody>
                                <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Phone</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Department</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
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
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Phone}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Department}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Semester}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Shift}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>
                                                                {student.Fee_Status==="Paid"?
                                                                <MDBBtn gradient="blue"><b>{student.Status==="Unpaid"?"Unpaid":"Paid"}</b></MDBBtn>:
                                                                <MDBBtn outline color="primary"><b>{student.Fee_Status==="Unpaid"?"Unpaid":"Paid"}</b></MDBBtn>}
                                                        </td>
                                                    </tr>
                                            )})}
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>:<div></div>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:250}} ><MDBSpinner big crazy /></h1>}
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
		trigger={<MDBBtn gradient="blue" ><b>Create Record</b></MDBBtn>}
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