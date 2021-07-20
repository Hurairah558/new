import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../../Fixed Components/Header';
import { Button, Modal , Table } from 'semantic-ui-react';

function AddCourses() {

    const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [data,setdata] = useState([])

    const [formdata,setformdata] = useState({
        Department : login.Department,
        Course_Title : "",
        Course_Code : ""
    })


    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/courses",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
        })
    },[])

    const update=()=>{
        axios.post("http://localhost:3001/api/hod/courses",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
        })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/courses/${id}`).then((res)=>{
            update()
        })
    }


    const [validate,setvalidate] = useState("")

    const set=(e) => {

        e.preventDefault()
        axios.post("http://localhost:3001/api/hod/addcourses",formdata)
        .then((res)=>{
            if (res.data.message){
            setvalidate(res.data.message)
            }
            else{
            setvalidate(res.data)
            }
            update()
        })
        .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})
        update()
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                        <b>Course Title</b>
                        <input className="Admission_Form_Input" onChange={change} type="text" name="Course_Title" value={formdata.Course_Title} placeholder="Course Title" required=""/>
                    </div>
                
                    <div className="col-md-3">
                    <b>Course Code</b>
                        <input className="Admission_Form_Input d-flex justify-content-center" onChange={change} type="text" name="Course_Code" value={formdata.Course_Code} placeholder="Course Code" required=""/>
                    </div>
                
                    <div className="col-md-3">
                        <button className="Admission_Form_button" onClick={set} style={{width:"100px",marginTop:40}} > <Modals validate={validate} /> </button>
                    </div>
                </div>

                <hr/>
                    {data.length>0?
                        <>
                            <h1>Currently Displaying Courses</h1>
                            <div class="row">
                                <div className="col-md-12">
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell>Delete</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((course,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{index+1}</Table.Cell>
                                                    <Table.Cell>{course.Course_Title}</Table.Cell>
                                                    <Table.Cell>{course.Course_Code}</Table.Cell>
                                                    <Table.Cell><button className="btn btn-danger" onClick={()=>Delete(course.id)} >Delete</button></Table.Cell>
                                                </Table.Row>
                                            )})
                                            }
                                        </Table.Body>
                                    </Table>
                                </div>
                            </div>
                        </>
                    :<div></div>}

                </div>
		    </div>
        </React.Fragment>
    )
}

export default AddCourses;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
        style={{height:"18%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Add</Button>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 className="d-flex justify-content-center">{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }
