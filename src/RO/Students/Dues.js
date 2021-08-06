import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../Header/Header';
import { Button, Modal , Table } from 'semantic-ui-react';
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
import { useLocation } from 'react-router';
function AddCourses() {


    const Location = useLocation()

    const Dues = Location.state!=undefined?Location.state.RO_Dues:""

    const [data,setdata] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    const [formdata,setformdata] = useState({
        id:Location.state!=undefined?Location.state.id:"",
        RO_Dues : Dues
    })


    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }

    const [validate,setvalidate] = useState("")

    const set=(e) => {

        e.preventDefault()
        axios.put("http://localhost:3001/api/ro/dues",formdata)
        .then((res)=>{
            if (res.data.message){
            setvalidate(res.data.message)
            }
            else{
            setvalidate(res.data)
            }
        })
        .catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
		})
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
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Add Dues</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-3">
                                            <textarea class="form-control" onChange={change} value={formdata.RO_Dues} id="exampleFormControlTextarea1" name="RO_Dues" placeholder="Dues" rows="3"></textarea>
                                        </div>
                                    
                                        <div className="col-md-3">
                                            <button onClick={set} style={{background:"transparent",border:"none",marginTop:10}} > <Modals validate={validate} /> </button>
                                        </div>
                                    </div>
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

export default AddCourses;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
        style={{height:"18%",margin:"auto"}}
		trigger={<MDBBtn gradient="blue">Add</MDBBtn>}
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
