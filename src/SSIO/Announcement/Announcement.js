import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Header from '../Header/Header';
import { Table , Button, Modal  } from 'semantic-ui-react';
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
function Announcement() {


    const [message, setmessage] = useState("")
    const [op, setop] = useState(1)

    const [formData, setFormData] = useState({
		Subject: '',
		Announcement: '',
        Timing : new Date()
	  })


      const change = (e) => {
		setFormData({...formData,[e.target.name] : e.target.value})
	}

    const [validate,setvalidate] = useState("")

    const send = (e) => {
        e.preventDefault()
              axios.post(`http://localhost:3001/api/ssio/announcement`,formData)
              .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                  update()
                  setmodal(true)
                setFormData({
                    Subject: '',
                    Announcement: '',
                    Timing : new Date()
                })
                })
                .catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
            })
    }

    const [data,setdata] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:3001/api/student/announcements").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
    },[])

    const update=()=>{
        axios.get("http://localhost:3001/api/student/announcements").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/ssio/announcements/${id}`).then((res)=>{
            update()
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
    })
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
                <div class="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Make Announcements</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <form onSubmit={send}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input className="Admission_Form_Input d-flex justify-content-center" onChange={change} value={formData.Subject} type="text" name="Subject" placeholder="Subject" required/>
                                            </div>
                                            <div className="col-md-9">
                                                <textarea class="form-control" onChange={change} value={formData.Announcement} id="exampleFormControlTextarea1" name="Announcement" placeholder="Announcement" rows="3" required></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <MDBBtn gradient="blue" type="submit" className="float-right" ><b>Submit</b></MDBBtn>
                                            </div>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Previous Announcements</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Subject</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Announcement</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Time</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { data.reverse().map((announcement,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{announcement.Subject}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{announcement.Announcement}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{String(announcement.Timing).slice(0,10)}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><MDBBtn gradient="peach" onClick={()=>Delete(announcement.id)} >Delete</MDBBtn></td>
                                                    </tr>
                                            )})}
                                        </tbody>
                                    </table>
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

export default Announcement;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<MDBBtn gradient="blue" >Submit</MDBBtn>}
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