import axios from 'axios'
import Select from 'react-select';
import './MeritList_Controller_Design.css';
import React, { useEffect, useState } from 'react'
import Header from '../../Fixed Components/Header';
import { Table , Button, Modal} from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
const MeritListData = () => {
    
    axios.defaults.withCredentials = true;

    const login = JSON.parse(localStorage.getItem("HOD"))
    const [data,setdata] = useState([{
        Fall_Spring:"",
        Shift:""
    }])
    const [Year, setYear] = useState([])
    const [op, setop] = useState(1)
    const [message,setmessage] = useState("")

    const [filter, setfilter] = useState({
        Department: login.Department,
        Years:"",
        Status:""
    })

    const Status = [
		{ value: 'WhiteList', label: 'WhiteList', Name : "Status" },
		{ value: 'BlackList', label: 'BlackList', Name : "Status" },
	]

    const [formData, setFormData] = useState({
		MeritList: '',
		Start: '',
		End: '',
		Display: '',
		Department: login.Department
	  })

    const [CurrentData, setCurrentData] = useState({
        MeritList: "",
        NOS_Start : "",
        NOS_End : "",
        Display : "",
        Department : login.Department
    })

    useEffect(()=>{
        axios.post("http://localhost:3001/hod/meritlistcurrent2",{Department:login.Department}).then((res)=>{
            setCurrentData(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist2",filter).then((res)=>{
                    setdata(res.data.data)
                }).catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                })
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
        axios.get("http://localhost:3001/api/hod/admissions/years").then((res)=>{
            setYear(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    },[filter])


    var st=[

    ]

    for (var i=0;i<99;i++){
        st.push({ value: `${i+1}`, label: `${i+1}`, Name : "Start" })
    }

    var en=[

    ]

    for (var i=0;i<99;i++){
        en.push({ value: `${i+1}`, label: `${i+1}`, Name : "End" })
    }


    var Years = [
		
	]

    Year.map((Year)=>{
        Years.push( { value: Year.Year, label: Year.Year, Name : "Years" })
    })


      const update_data = () => {
        axios.post("http://localhost:3001/hod/meritlistcurrent2",{Department:login.Department}).then((res)=>{
            setCurrentData(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist2",filter).then((res)=>{
                    setdata(res.data.data)
                }).catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                })
    
        })
      }


    const [validate,setvalidate] = useState("")

    const Apply_MeritList =()=>{
        axios.post("http://localhost:3001/hod/meritlistcontroller2",{formData}).then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                update_data()
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }

    const change = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const changeselectYear = (e) => {
        setfilter({
            ...filter,
            Department : login.Department,
            [e.Name] : e.value
          })

	  }

    const changeselect = (e) => {
        setFormData({
            ...formData,
            [e.Name]: e.value
        })
    }

    const toggles=(t,id)=>{
        let Status = t
        axios.put(`http://localhost:3001/api/students/status/${id}`,{Statuss:Status}).then((res=>{
            update_data()
        })).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }


    const MeritList = [
        { value: "1st Merit List", label: "1st Merit List", Name : "MeritList" },
        { value: "2nd Merit List", label: "2nd Merit List", Name : "MeritList" },
        { value: "3rd Merit List", label: "3rd Merit List", Name : "MeritList" },
    ]

    const Display = [
        { value: "True", label: "True", Name : "Display" },
        { value: "False", label: "False", Name : "Display" },
    ]

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
                <div class="container">
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Merit List Controller</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} name="MeritList" placeholder="Merit List" options={MeritList} required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={st}  name="Start" placeholder="Start From" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={en}  name="End" placeholder="Ends at" required />
                                        </div>
                                        <div className="col-md-3">
                                        <Select className="Admission_Form_Select" onChange={changeselect} name="Display" placeholder="Diplay Merit List" options={Display} required />
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12">
                                            <button style={{margin:'auto',display:'block',border:'none',background:"transparent",marginTop:10}} onClick={Apply_MeritList} ><Modals validate={validate} /></button>
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
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Currently Displaying Merit List</h4>
                            </MDBView>
                                <MDBCardBody>
                                <Table>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Merit List</Table.HeaderCell>
                                            <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Department</Table.HeaderCell>
                                            <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Shift</Table.HeaderCell>
                                            <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Students</Table.HeaderCell>
                                            <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Display</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell style={{fontWeight:'bold'}}><b>{CurrentData.MeritList}</b></Table.Cell>
                                            <Table.Cell style={{fontWeight:'bold'}}><b>{CurrentData.Department}</b></Table.Cell>
                                            <Table.Cell style={{fontWeight:'bold'}}><b>Evening</b></Table.Cell>
                                            <Table.Cell style={{fontWeight:'bold'}}><b>{CurrentData.NOS_Start} to {CurrentData.NOS_End}</b></Table.Cell>
                                            <Table.Cell style={{fontWeight:'bold'}}><b>{CurrentData.Display==1?"True":"False"}</b></Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
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
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Filter Merit List</h4>
                            </MDBView>
                                <MDBCardBody>
                                <div style={{marginLeft:300}} className="row">
                                    <div className="col-md-3">
                                        <Select className="Admission_Form_Select" onChange={changeselectYear} name="Years" placeholder="Year Of Admission" options={Years} required />
                                    </div>
                                    <div style={{marginLeft:50}} className="col-md-3">
                                        <Select className="Admission_Form_Select" onChange={changeselectYear} name="Status" placeholder="BlackList / WhiteList" options={Status} required />
                                    </div>
                                </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    {CurrentData.NOS_End-1>0?
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                    <MDBRow>
                        <MDBCol md='12'>
                        <MDBView
                            cascade
                            className='gradient-card-header light-blue lighten-1'
                        >
                            <h4 className='h4-responsive mb-0 font-weight-bold'>{login.Department} &nbsp;&nbsp;&nbsp;{data[0].Shift} &nbsp;&nbsp;&nbsp; Merit List &nbsp;&nbsp;&nbsp; {data[0].Year}</h4>
                        </MDBView>
                            <MDBCardBody>
                                <div class="row">
                                    <div className="col-md-12">
                                        <Table>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                                    <Table.HeaderCell>Father's Name'</Table.HeaderCell>
                                                    <Table.HeaderCell>CNIC</Table.HeaderCell>
                                                    <Table.HeaderCell>Merit</Table.HeaderCell>
                                                    <Table.HeaderCell>Move to</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                {data.slice(CurrentData.NOS_Start-1,CurrentData.NOS_End-1).map((student,index)=>{
                                                    return (
                                                        <Table.Row key={index}>
                                                            <Table.Cell style={{fontWeight:'bold'}}><b>{index+1}</b></Table.Cell>
                                                            <Table.Cell style={{fontWeight:'bold'}}><b>{student.id}</b></Table.Cell>
                                                            <Table.Cell style={{fontWeight:'bold'}}><b>{student.Full_Name}</b></Table.Cell>
                                                            <Table.Cell style={{fontWeight:'bold'}}>{student.Father_Name}</Table.Cell>
                                                            <Table.Cell style={{fontWeight:'bold'}}>{student.CNIC}</Table.Cell>
                                                            <Table.Cell style={{fontWeight:'bold'}}>{parseFloat(student.merit).toFixed(2)} %</Table.Cell>
                                                            {
                                                                <Table.Cell>
                                                                    {student.Status==="WhiteList"?
                                                                    <MDBBtn onClick={()=>toggles("BlackList",student.id)} gradient="peach"><b>{student.Status==="WhiteList"?"BlackList":"WhiteList"}</b></MDBBtn>:
                                                                    <MDBBtn onClick={()=>toggles("WhiteList",student.id)} gradient="peach"><b>{student.Status==="WhiteList"?"BlackList":"WhiteList"}</b></MDBBtn>}
                                                                </Table.Cell>
                                                            }
                                                        </Table.Row>
                                                )})}
                                            </Table.Body>
                                        </Table>
                                    </div>
                                </div>
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

export default MeritListData;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<MDBBtn gradient="blue" ><b>Generate Merit List</b></MDBBtn>}
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