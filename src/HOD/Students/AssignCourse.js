import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Select from "react-select";
import Header from'../../Fixed Components/Header';
import { useLocation } from 'react-router-dom';

function AssignCourses() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const Location = useLocation()

    const [formdata,setformdata] = useState({
        Department : login.Department,
        Course_Code : "",
        Course_Title : "",
        Semester:""
    })

    const [courses,setcourses] = useState([])

    const [AssignedCourses, setAssignedCourses] = useState(Location.state.Courses)

    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.post("http://localhost:3001/api/hod/course",{Department:login.Department}).then((res)=>{
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
        setAssignedCourses(AssignedCourses + String(formdata.Course_Code) + String(" ") + String(formdata.Course_Title) + String(","))
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
  
          e.preventDefault()
            axios.put("http://localhost:3001/api/hod/assigncourse",{
            id: Location.state.id,
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
            .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})
      }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div className="container">
                    <div className="col-md-12">
                        <h1 style={{marginTop:0}} className="text">Assign Courses to {Location.state.Full_Name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                        </div>
                    
                        <div className="col-md-3">
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                        </div>
                    
                        <div className="col-md-3">
                            <button className="Admission_Form_button" onClick={Add} style={{width:"100px"}} > Add </button>
                        </div>

                        <div className="col-md-3">
                            <button className="Admission_Form_button" onClick={Reset} style={{width:"100px"}} > Reset </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <button className="Admission_Form_button" onClick={set} style={{width:"100px"}} > <Modals validate={validate} /> </button>
                        </div>
                    </div>
                    <hr/>
                    {AssignedCourses.split(",").map((coursess)=>{
                        return(<h1>{coursess}</h1> )
                    })}
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
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Assign</Button>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 style={{marginLeft:"100px"}}>{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
			</Modal.Description>
		</Modal.Content>
		<Modal.Actions>
			<Button onClick={() => setOpen(false)}>Cancel</Button>
			<Button onClick={() => setOpen(false)} positive>Ok</Button>
		</Modal.Actions>
	</Modal>
	)
  }