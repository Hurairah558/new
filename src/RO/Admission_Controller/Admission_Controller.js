import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import Header from '../Header/Header';
import { Button, Modal } from 'semantic-ui-react';

function Admission_Controller() {

    const [Loading, setLoading] = useState(true)

    const [loadingmessage, setloadingmessage] = useState("")

	const [open, setopen] = useState(false)

	const [message, setmessage] = useState("")
    
    useEffect(()=>{
		axios.get("http://localhost:3001/api/ro/admission_control").then((res)=>{
			if (res.data.data[0].Open === "Open"){
                setloadingmessage(`Admission ${res.data.data[0].Open}`)
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
	})

    const update_data = () => {
        axios.get("http://localhost:3001/api/ro/admission_control").then((res)=>{
			if (res.data.data[0].Open === "Open"){
                setloadingmessage(`Admission ${res.data.data[0].Open}`)
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
			  setformdata({
				Matric_Percentage : "",
				Inter_Percentage : ""
			  })
			})
		  .catch((err)=>{setvalidate("Something Went Wrong! Please Try Again After Sometime")})
    }

    const toggles=(e)=>{
        setloadingmessage("Loading...")
        let openstatus = e.target.textContent === "Closed" ? "Open" : "Closed"
        axios.put(`http://localhost:3001/api/ro/admission_control`,{Admission_Controller:openstatus}).then((res=>{
            update_data()
			setformdata({
				Matric_Percentage : "",
				Inter_Percentage : ""
			  })
        }))
    }

    return (
        <React.Fragment>
            <Header/>
            {!Loading?
		message===""?
            <div className="Student">
                <div className="container">
                    <h2 style={{marginLeft:0}} className="col-md-12">{loadingmessage}</h2>                        
                    <button style={{padding:"10px 100px"}} className={`btn ${!open?"button":"buttonPaid"}`} toggle active={!open?false:true} onClick={toggles} >
                        {!open?"Closed":"Open"}
                    </button>
                    {!open?<h1>Please Set Merit List Formula Before Opening Admissions !</h1>:<div></div>}
                    <hr className="col-md-12"/>
                    <h1 style={{marginBottom:-15,marginTop:100}}>Merit List Formula</h1>
							<div className="col-md-12">
								<h1 style={{marginTop:0}} className="text-white">Merit List Formula</h1>
							</div>
							<div className="row">
							<div className="col-md-3">
								<b>Matric Percentage</b>
								<input className="Admission_Form_Input" onChange={change} type="text" name="Matric_Percentage" value={formdata.Matric_Percentage} placeholder="Matric Percentage" required=""/>
							</div>
						
							<div className="col-md-3">
							<b>Inter Percentage</b>
								<input className="Admission_Form_Input d-flex justify-content-center" onChange={change} type="text" name="Inter_Percentage" value={formdata.Inter_Percentage} placeholder="Inter Percentage" required=""/>
							</div>
						
							<div className="col-md-3">
								<button className="Admission_Form_button" onClick={set} style={{width:"100px",marginTop:40}} > <Modals validate={validate} /> </button>
							</div>
						</div>
                </div>
		    </div>
            :<h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            :<h1 className="d-flex justify-content-center" style={{marginTop:350}} >Loading...</h1>}
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
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >set</Button>}
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