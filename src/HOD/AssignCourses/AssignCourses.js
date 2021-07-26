import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Button, Modal , Table} from 'semantic-ui-react';
import Select from "react-select";
import Header from'../../Fixed Components/Header';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
function AssignCourses() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [formdata,setformdata] = useState({
        Department : login.Department,
        Course_Code : "",
        Course_Title : "",
        Semester:""
    })

    const [courses,setcourses] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    const [AssignedCourses, setAssignedCourses] = useState("")

    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.post("http://localhost:3001/api/hod/course",{Department:login.Department}).then((res)=>{
            setcourses(res.data.data)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    },[])

    const changeselect = (e) => {
		setformdata({
		  ...formdata,
		  [e.Name] : e.value
		})
	  }

    const Add = () => {
        if(formdata.Course_Code!="" && formdata.Course_Title!=""){
            setAssignedCourses(AssignedCourses + String(formdata.Course_Code) + String(":") + String(formdata.Course_Title) + String(","))
        }
    }

    const Reset = () => {
        setAssignedCourses("")
    }


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

    var Course_Title = [
		
	]

    courses.map((coursess)=>{
        Course_Title.push( { value: coursess.Course_Title, label: coursess.Course_Title, Name : "Course_Title" })
    })

    var Course_Code = [
		
	]

    courses.map((coursess)=>{
        Course_Code.push( { value: coursess.Course_Code, label: coursess.Course_Code, Name : "Course_Code" })
    })

      const [validate,setvalidate] = useState("")

      const set=(e) => {
            if(AssignedCourses===""){
                setvalidate("No Course Selected")
            }
            else{
          e.preventDefault()
            axios.put("http://localhost:3001/api/hod/assigncourses",{
            Department: login.Department,
            Semester: formdata.Semester,
            Courses: AssignedCourses,
            })
            .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                setformdata({
                  Matric_Percentage : "",
                  Inter_Percentage : ""
                })
              })
              .catch((err)=>{
                setmessage("Something Went Wrong! Please Try Again After Sometime")
            })
        }
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
                <div className="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Assign Courses</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <div className="row ml-4">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                                        </div>
                                    
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                                        </div>
                                    
                                        <div className="col-md-3">
                                            <MDBBtn gradient="blue" style={{marginTop:20}} onClick={Add}> Add </MDBBtn>
                                        </div>

                                        <div className="col-md-3">
                                        <MDBBtn gradient="blue" style={{marginTop:20}} onClick={Reset}> Reset </MDBBtn>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row ml-4">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                                        </div>
                                    
                                        <div className="col-md-3">
                                            <button onClick={set} style={{border:'none',background:"transparent",marginTop:15}}> <Modals validate={validate} /> </button>
                                        </div>
                                    </div>
                                    <hr/>
                                    {AssignedCourses!=""?
                                        <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <MDBView
                                                        cascade
                                                        className='gradient-card-header light-blue lighten-1'
                                                    >
                                                        <h4 className='h4-responsive mb-0 font-weight-bold'>Courses Added</h4>
                                                    </MDBView>
                                                    <MDBCardBody>
                                                        <table className="table table-hover table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                                                    <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {AssignedCourses.split(",").map((coursess)=>{
                                                                    return(          
                                                                    <tr>
                                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{coursess.split(":")[0]}</td>
                                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{coursess.split(":")[1]}</td>
                                                                    </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </MDBCardBody>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCard>
                                    :<></>}
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AssignCourses;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<MDBBtn gradient="blue"><b>Assign</b></MDBBtn>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 style={{marginLeft:"100px"}}>{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }