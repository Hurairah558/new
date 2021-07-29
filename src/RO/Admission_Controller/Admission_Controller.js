import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../Header/Header';
import { Button, Modal } from 'semantic-ui-react';
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
function Admission_Controller() {

    const [Loading, setLoading] = useState(true)

	const [data, setdata] = useState([{
		Matric: "",
		Inter: ""
	}])

    const [loadingmessage, setloadingmessage] = useState("")

	const [open, setopen] = useState(false)

	const [message, setmessage] = useState("")

    const [op, setop] = useState(1)
    
    useEffect(()=>{
		axios.get("http://localhost:3001/api/ro/admission_control").then((res)=>{
			if (res.data.data[0].Open === "Open"){
                setloadingmessage(`Admission ${res.data.data[0].Open}ed`)
				setopen(true)
			}
            if (res.data.data[0].Open === "Closed"){
				setopen(false)
                setloadingmessage(`Admission ${res.data.data[0].Open}`)
			}
			setLoading(false)
		}).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setLoading(false)
		})

		axios.get("http://localhost:3001/api/ro/formula").then((res)=>{
			setdata(res.data.data)
			setLoading(false)
		}).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setLoading(false)
		})
	},[])

    const update_data = () => {
        axios.get("http://localhost:3001/api/ro/admission_control").then((res)=>{
			if (res.data.data[0].Open === "Open"){
                setloadingmessage(`Admission ${res.data.data[0].Open}ed`)
				setopen(true)
			}
            if (res.data.data[0].Open === "Closed"){
				setopen(false)
                setloadingmessage(`Admission ${res.data.data[0].Open}`)
			}
			setLoading(false)
		})
		.catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setLoading(false)
		})
		axios.get("http://localhost:3001/api/ro/formula").then((res)=>{
			setdata(res.data.data)
			setLoading(false)
		}).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setLoading(false)
		})
    }

    const [formdata,setformdata] = useState({
        Matric_Percentage : "",
        Inter_Percentage : ""
    })

    const change = (e) => {
		setformdata({
		  ...formdata,
		  [e.target.name] : e.target.value
		})
	  }

    const [validate,setvalidate] = useState("")

    const set=(e) => {

        e.preventDefault()
		  axios.put("http://localhost:3001/api/ro/meritlist/formula",formdata)
		  .then((res)=>{
			  if (res.data.message){
			  	setvalidate(res.data.message)
			  }
			  else{
				setvalidate(res.data)
			  }
			  update_data()
			  setformdata({
				Matric_Percentage : "",
				Inter_Percentage : ""
			  })
			})
		  .catch((err)=>{setmessage("Something Went Wrong! Please Try Again After Sometime")})
    }

    const toggles=(t)=>{
        setloadingmessage("Loading...")
        let openstatus = t
        axios.put(`http://localhost:3001/api/ro/admission_control`,{Admission_Controller:openstatus}).then((res=>{
            update_data()
			setformdata({
				Matric_Percentage : "",
				Inter_Percentage : ""
			  })
        }))
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
            {!Loading?
            <div className="Student">
                <div className="container">
					<MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>{loadingmessage}</h4>
                            </MDBView>
                                <MDBCardBody>
								{!open?
									<MDBBtn gradient="blue" style={{margin:'auto',display:'block'}} onClick={() =>toggles("Open")} >
										<b>{!open?"Open Admissions":"Close Admissions"}</b>
									</MDBBtn>
									:<MDBBtn gradient="peach" style={{margin:'auto',display:'block'}} onClick={() =>toggles("Closed")} >
										<b>{!open?"Open Admissions":"Close Admissions"}</b>
									</MDBBtn>
								}
								<hr className="col-md-12"/>
								{!open?<h2 className="d-flex justify-content-center text-danger"><b>Please Confirm Merit List Formula Before Opening Admissions !</b></h2>:<div></div>}
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
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Merit List Formula</h4>
                            </MDBView>
                                <MDBCardBody>
								<div className="row d-flex justify-content-center">
									<div className="col-md-3">
										<input className="Admission_Form_Input" onChange={change} type="text" name="Matric_Percentage" value={formdata.Matric_Percentage} placeholder="Matric Percentage" required=""/>
									</div>
								
									<div className="col-md-3">
										<input className="Admission_Form_Input d-flex justify-content-center" onChange={change} type="text" name="Inter_Percentage" value={formdata.Inter_Percentage} placeholder="Inter Percentage" required=""/>
									</div>
								
									<div className="col-md-3">
										<button onClick={set} style={{marginTop:18,border:'none',background:"transparent"}} > <Modals validate={validate} /> </button>
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
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Current Merit List Formula</h4>
                            </MDBView>
                                <MDBCardBody>
								<table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Matric Percentage (%)</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Inter Percentage (%)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
											<tr>
												<td style={{fontWeight:'bold',textAlign:'center'}}>{data[0].Matric}</td>
												<td style={{fontWeight:'bold',textAlign:'center'}}>{data[0].Inter}</td>												
											</tr>
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
		    </div>
            :<div className="d-flex justify-content-center" style={{marginTop:350}} ><MDBSpinner big crazy /></div>}
			<Footer/>
        </React.Fragment>
    )
}

export default Admission_Controller;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<MDBBtn gradient="blue" >set</MDBBtn>}
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


  