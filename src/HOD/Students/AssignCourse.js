import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Select from "react-select";
import Header from'../../Fixed Components/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { 
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBView,
	MDBBtn,
	MDBSpinner,
	MDBContainer, MDBModal, MDBModalHeader, MDBModalFooter,MDBModalBody
  } from 'mdbreact';
function AssignCourses() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const Location = useLocation()

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    const [formdata,setformdata] = useState({
        Department : login!=null?login.Department:"",
        Course_Code : "",
        Course_Title : ""
    })

    const [courses,setcourses] = useState([])

    const [AssignedCourses, setAssignedCourses] = useState(JSON.stringify(login).includes("HOD")?Location.state.Courses:"")

    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.post("http://localhost:3001/api/hod/course",{Department:login!=null?login.Department:""}).then((res)=>{
            setcourses(res.data.data)
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
        setop(0.8)
        if(AssignedCourses===""){
            setvalidate("No Course Selected")
            setmodal(true)
			    setop(1)
        }
        else{
          e.preventDefault()
            axios.put("http://localhost:3001/api/hod/assigncourse",{
            id: Location.state.id,
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
                setmodal(true)
			    setop(1)
              })
              .catch((err)=>{
                setmessage("Something Went Wrong! Please Try Again After Sometime")
			    setop(1)
            })
        }
      }

      const [modal, setmodal] = useState(false);


	  const toggle = (state) =>{
		setmodal(!modal)
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
            <MDBContainer>
				<MDBModal isOpen={modal} centered>
					<MDBModalHeader onClick={toggle}><h2><b>Response</b></h2></MDBModalHeader>
					<MDBModalBody onClick={toggle}>
						<h3><b>{validate}</b></h3>
					</MDBModalBody>
					<MDBModalFooter>
					<MDBBtn color="primary" onClick={toggle}>Close</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>	
            <div className="Student">
                <div className="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                    <MDBRow>
                        <MDBCol md='12'>
                        <MDBView
                            cascade
                            className='gradient-card-header light-blue lighten-1'
                        >
                            <h4 className='h4-responsive mb-0 font-weight-bold'>Assign Courses to {JSON.stringify(login).includes("HOD")?Location.state.Full_Name:""}</h4>
                        </MDBView>
                            <MDBCardBody>
                            <div className="row">
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
                                    <MDBBtn gradient="blue"style={{marginTop:20}} onClick={set} >Assign</MDBBtn>
                                </div>
                            </div>
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
            <Footer/>
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
		trigger={<MDBBtn gradient="blue" style={{width:200}}><b>Assign</b></MDBBtn>}
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