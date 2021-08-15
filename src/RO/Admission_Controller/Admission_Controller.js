import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../Header/Header';
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
		setop(0.8)
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
			  setmodal(true)
			setop(1)
			})
			.catch((err)=>{
				setmessage("Something Went Wrong! Please Try Again After Sometime")
				setop(1)
			})
    }

    const toggles=(t)=>{
		setop(0.8)
        setloadingmessage("Loading...")
        let openstatus = t
        axios.put(`http://localhost:3001/api/ro/admission_control`,{Admission_Controller:openstatus}).then((res=>{
            update_data()
			setformdata({
				Matric_Percentage : "",
				Inter_Percentage : ""
			  })
			setop(1)
        })).catch((err)=>{
			setmessage("Something Went Wrong! Please Try Again After Sometime")
			setop(1)
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
            {!Loading?
            <div className="Student"  style={{opacity:op}}>
                <div className="container">
					<MDBCard cascade narrow>
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
									<form onSubmit={set}>
										<div className="row d-flex justify-content-center">
											<div className="col-md-3 d-flex justify-content-center">
												<input className="Admission_Form_Input" onChange={change} type="text" name="Matric_Percentage" value={formdata.Matric_Percentage} placeholder="Matric Percentage" required/>
											</div>
										
											<div className="col-md-3 d-flex justify-content-center">
												<input className="Admission_Form_Input" onChange={change} type="text" name="Inter_Percentage" value={formdata.Inter_Percentage} placeholder="Inter Percentage" required/>
											</div>
										
											<div className="col-md-3">
												<MDBBtn gradient="blue" type="submit" style={{marginTop:20}} > <b>Set</b> </MDBBtn>
											</div>
										</div>
									</form>
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

  