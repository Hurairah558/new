import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../../Fixed Components/Header';
import { Button, Modal , Table } from 'semantic-ui-react';
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
        Department : login!=null?login.Department:"",
        Course_Title : "",
        Course_Code : ""
    })


    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.post("http://localhost:3001/api/hod/course",{Department:login!=null?login.Department:""}).then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    },[])

    const update=()=>{
        axios.post("http://localhost:3001/api/hod/course",{Department:login!=null?login.Department:""}).then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    }

    const Delete =(id)=>{
        setop(0.8)
        axios.delete(`http://localhost:3001/api/hod/courses/${id}`).then((res)=>{
            update()
			setop(1)
        }).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
    }


    const [validate,setvalidate] = useState("")

    const set=(e) => {
        setop(0.8)
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
            setmodal(true)
			setop(1)
        })
        .catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
            setop(1)
		})
        update()
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
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Add Courses</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <form onSubmit={set}>
                                        <div className="row">
                                            <div className="col-md-3 ml-4">
                                                <input className="Admission_Form_Input" onChange={change} type="text" name="Course_Title" value={formdata.Course_Title} placeholder="Course Title" required/>
                                            </div>
                                        
                                            <div className="col-md-3">
                                                <input className="Admission_Form_Input d-flex justify-content-center" onChange={change} type="text" name="Course_Code" value={formdata.Course_Code} placeholder="Course Code" required/>
                                            </div>
                                            <div className="col-md-3">
                                                <MDBBtn gradient="blue" type="submit" style={{width:"100px",marginTop:20}} > Add </MDBBtn>
                                            </div>
                                        </div>
                                    </form>
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
                                            <tbody>
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
                                            </tbody>
                                        </table>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    :<div></div>}

                </div>
		    </div>
            <Footer/>
        </React.Fragment>
    )
}

export default AddCourses;
