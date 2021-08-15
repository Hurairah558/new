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
    MDBSpinner 
  
  } from 'mdbreact';
function AssignCourses() {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [op, setop] = useState(1)

    const Location = useLocation()

    console.log(Location.state.id)

    const [formdata,setformdata] = useState({
        Activity : "",
        Position : ""
    })

    const [AssignedROA, setAssignedROA] = useState(JSON.stringify(login).includes("HOD")?Location.state.ROA==null?"":Location.state.ROA:"")

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }

    const Add = () => {
        if(formdata.Activity!="" && formdata.Position!=""){
        setAssignedROA(AssignedROA + String(formdata.Activity) + String(":") + String(formdata.Position) + String(","))
        }
    }

    const Reset = () => {
        setAssignedROA("")
    }

      const [validate,setvalidate] = useState("")

      const set=(e) => {
        if(AssignedROA===""){
            setvalidate("No Achievements Added")
        }
        else{
          e.preventDefault()
            axios.put("http://localhost:3001/api/hod/roa",{
            id: Location.state.id,
            ROA: AssignedROA,
            })
            .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                setformdata({
                  Activity : "",
                  Position : ""
                })
              })
            .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})
        }
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
                            <h4 className='h4-responsive mb-0 font-weight-bold'>Record of Achievements for {JSON.stringify(login).includes("HOD")?Location.state.Full_Name:""}</h4>
                        </MDBView>
                            <MDBCardBody>
                            <div className="row">
                                <div className="col-md-3">
                                    <input className="Admission_Form_Input" onChange={change} type="text" name="Activity" value={formdata.Activity} placeholder="Activity" required=""/>
                                </div>
                            
                                <div className="col-md-3">
                                    <input className="Admission_Form_Input" onChange={change} type="text" name="Position" value={formdata.Position} placeholder="Position" required=""/>
                                </div>
                            
                                <div className="col-md-3">
                                    <MDBBtn gradient="blue" style={{marginTop:20}} onClick={Add}> Add </MDBBtn>
                                </div>

                                <div className="col-md-3">
                                    <MDBBtn gradient="blue" style={{marginTop:20}} onClick={Reset}> Reset </MDBBtn>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button style={{border:'none',background:"transparent",marginTop:15}} onClick={set} > <Modals validate={validate} /> </button>
                                </div>
                            </div>
                            <hr/>
                            {AssignedROA!=""?
                            <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                                <MDBRow>
                                    <MDBCol md='12'>
                                        <MDBView
                                            cascade
                                            className='gradient-card-header light-blue lighten-1'
                                        >
                                            <h4 className='h4-responsive mb-0 font-weight-bold'>Record of Achievements Added</h4>
                                        </MDBView>
                                        <MDBCardBody>
                                            <table className="table table-hover table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Activity</th>
                                                        <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Position</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {AssignedROA.split(",").map((coursess)=>{
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
		trigger={<MDBBtn gradient="blue" style={{width:200}}><b>Save</b></MDBBtn>}
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