import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../../Fixed Components/Header';
import { Button, Modal , Table } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
function AddCourses() {

    const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [data,setdata] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    const [formdata,setformdata] = useState({
        Department : login.Department,
        Course_Title : "",
        Course_Code : ""
    })


    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.post("http://localhost:3001/api/hod/course",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    },[])

    const update=()=>{
        axios.post("http://localhost:3001/api/hod/course",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/courses/${id}`).then((res)=>{
            update()
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
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
        .catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
        update()
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
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Add Courses</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <div className="row">
                                        <div className="col-md-3 ml-4">
                                            <input className="Admission_Form_Input" onChange={change} type="text" name="Course_Title" value={formdata.Course_Title} placeholder="Course Title" required=""/>
                                        </div>
                                    
                                        <div className="col-md-3">
                                            <input className="Admission_Form_Input d-flex justify-content-center" onChange={change} type="text" name="Course_Code" value={formdata.Course_Code} placeholder="Course Code" required=""/>
                                        </div>
                                    
                                        <div className="col-md-3">
                                            <button className="Admission_Form_button" onClick={set} style={{width:"100px"}} > <Modals validate={validate} /> </button>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    
                <hr/>
                    {data.length>0?
                        <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                            <MDBRow>
                                <MDBCol md='12'>
                                    <MDBView
                                        cascade
                                        className='gradient-card-header light-blue lighten-1'
                                    >
                                        <h4 className='h4-responsive mb-0 font-weight-bold'>{login.Department} Courses</h4>
                                    </MDBView>
                                    <MDBCardBody>
                                        <table className="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                    <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                                    <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                                    <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Delete</th>
                                                </tr>
                                            </thead>
                                            <tobdy>
                                                {data.map((course,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{course.Course_Title}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{course.Course_Code}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>
                                                        	<MDBBtn style={{fontWeight:'bold',textAlign: 'center'}} onClick={()=>Delete(course.id)} gradient="peach"><b>Delete</b></MDBBtn>    
                                                    	</td>
                                                    </tr>
                                                )})
                                                }
                                            </tobdy>
                                        </table>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
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
