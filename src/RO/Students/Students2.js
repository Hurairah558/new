import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Redirect ,Link } from "react-router-dom";
import Headers from '../Header/Header';
import Select from "react-select";
import Footer from '../../Footer/Footer';
import { Button, Header, Modal , Table } from 'semantic-ui-react';
import {Export} from '../../Export';
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
const Students = () => {

    axios.defaults.withCredentials = true

    const [data,setdata] = useState([])
    const [seach,setseach] = useState([])
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState("")
    const [op, setop] = useState(1)

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [filter, setfilter] = useState({
        Status:"",
        Fee_Status:"",
        Semester:"",
        Department:"",
        Names : "",
        Roll:""
    })

    useEffect(()=>{
        axios.post("http://localhost:3001/api/ro/students2",filter).then((res)=>{
            setdata(res.data.data)
            update()
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    },[filter])


    const update=()=>{
        axios.get("http://localhost:3001/api/all/students2").then((res)=>{
            setseach(res.data.data)
            setloading(false)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setloading(false)
        })
    }

    const Fall_Spring = [
		{ value: 'Fall-2021', label: 'Fall-2021', Name : "Fall_Spring" },
		{ value: 'Spring-2021', label: 'Spring-2021', Name : "Fall_Spring" },
		{ value: 'Fall-2022', label: 'Fall-2022', Name : "Fall_Spring" },
		{ value: 'Spring-2022', label: 'Spring-2022', Name : "Fall_Spring" },
		{ value: 'Fall-2023', label: 'Fall-2023', Name : "Fall_Spring" },
		{ value: 'Spring-2023', label: 'Spring-2023', Name : "Fall_Spring" },
		{ value: 'Fall-2024', label: 'Fall-2024', Name : "Fall_Spring" },
		{ value: 'Spring-2024', label: 'Spring-2024', Name : "Fall_Spring" },
		{ value: 'Fall-2025', label: 'Fall-2025', Name : "Fall_Spring" },
		{ value: 'Spring-2025', label: 'Spring-2025', Name : "Fall_Spring" },
		{ value: 'Fall-2026', label: 'Fall-2026', Name : "Fall_Spring" },
		{ value: 'Spring-2026', label: 'Spring-2026', Name : "Fall_Spring" },
		{ value: 'Fall-2027', label: 'Fall-2027', Name : "Fall_Spring" },
		{ value: 'Spring-2027', label: 'Spring-2021', Name : "Fall_Spring" },
	]

    const Department = [
		{ value: 'BBA', label: 'BBA', Name : "Department" },
		{ value: 'Botany', label: 'Botany', Name : "Department" },
		{ value: 'Chemistry', label: 'Chemistry', Name : "Department" },
		{ value: 'Economics', label: 'Economics', Name : "Department" },
		{ value: 'English', label: 'English', Name : "Department" },
		{ value: 'Physics', label: 'Physics', Name : "Department" },
		{ value: 'Political Science', label: 'Political Science', Name : "Department" },
		{ value: 'Psychology', label: 'Psychology', Name : "Department" },
		{ value: 'Mathematics', label: 'Mathematics', Name : "Department" },
		{ value: 'Statistics', label: 'Statistics', Name : "Department" },
		{ value: 'Information Technology', label: 'Information Technology', Name : "Department" },
		{ value: 'Islamiyat', label: 'Islamiyat', Name : "Department" },
		{ value: 'Urdu', label: 'Urdu', Name : "Department" },
		{ value: 'Zoology', label: 'Zoology', Name : "Department" },
	]

    const Semester = [
		{ value: '1', label: '1', Name : "Semester" },
		{ value: '2', label: '2', Name : "Semester" },
		{ value: '3', label: '3', Name : "Semester" },
		{ value: '4', label: '4', Name : "Semester" },
		{ value: '5', label: '5', Name : "Semester" },
		{ value: '6', label: '6', Name : "Semester" },
		{ value: '7', label: '7', Name : "Semester" },
		{ value: '8', label: '8', Name : "Semester" },
		{ value: '9', label: '9', Name : "Semester" },
		{ value: '10', label: '10', Name : "Semester" },
		{ value: '11', label: '11', Name : "Semester" },
		{ value: '12', label: '12', Name : "Semester" },
	]

    const [open, setOpen] = React.useState(false)

    const Status = [
		{ value: 'Active', label: 'Active', Name : "Status" },
		{ value: 'Inactive', label: 'Inactive', Name : "Status" },
	]

    const Fee_Status = [
		{ value: 'Paid', label: 'Paid', Name : "Fee_Status" },
		{ value: 'Unpaid', label: 'Unpaid', Name : "Fee_Status" },
	]

    var Names = [
		
	]

    seach.map((Stu)=>{
        Names.push( { value: Stu.Full_Name, label: Stu.Full_Name, Name : "Names" })
    })

    var Roll = [
		
	]

    seach.map((Stu)=>{
        Roll.push( { value: Stu.Roll, label: Stu.Roll, Name : "Roll" })
    })

    

    const changeselect = (e) => {

        setfilter({
            ...filter,
            Names : "",
            Roll:"",
            [e.Name] : e.value
          })
    }

    const seachbyroll = (e) => {
        setfilter({
            ...filter,
            Status:"",
            Fee_Status:"",
            Semester:"",
            Department:"",
            Names : "",
            Roll:e.value
        })
    }

    const seachbyname = (e) => {
        setfilter({
            ...filter,
            Status:"",
            Fee_Status:"",
            Semester:"",
            Department:"",
            Names : e.value,
            Roll : ""
        })
    }

    const [extras, setextras] = useState({
        Fall_Spring:"",
        Total:"",
        Col:"",
        Uni:"",
        Words:""
    })

    const voucherchangeselect= (e) => {
        setextras({
            ...extras,
            [e.Name] : e.value
          })
    }

    const voucherchange= (e) => {
        setextras({
            ...extras,
            [e.target.name] : e.target.value
          })
    }

    const [modal, setmodal] = useState(false);


	  const toggle = (state) =>{
		setmodal(!modal)
	  }

    if (login==null){
        return <Redirect to="/login"/>;
    }

    if(loading){
        return (
            <React.Fragment>
                <Headers/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}}><MDBSpinner big crazy /></h1>
            </React.Fragment>
        )
    }

    if(message!=""){
        return (
            <React.Fragment>
                <Headers/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Headers/>
            <MDBContainer>
				<MDBModal isOpen={modal} centered>
					<MDBModalHeader><h2><b>Generate Vouchers</b></h2></MDBModalHeader>
					<MDBModalBody>
                        <div className="row">
                            <div className="col-md-6">
                                <Select defaultInputValue="" className="Admission_Form_Select" onChange={voucherchangeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                            </div>
                            <div className="col-md-6">
                                <input className="Admission_Form_Input" onChange={voucherchange} type="text" name="Total" placeholder="Total Fee" required=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input className="Admission_Form_Input" onChange={voucherchange} type="text" name="Col" placeholder="College Dues" required=""/>
                            </div>
                            <div className="col-md-6">
                                <input className="Admission_Form_Input" onChange={voucherchange} type="text" name="Uni" placeholder="University Dues" required=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <textarea style={{fontWeight:'bold',border:"1px solid"}} class="form-control" onChange={voucherchange} id="exampleFormControlTextarea1" name="Words" placeholder="Amout in Words" rows="2"></textarea>
                            </div>
                        </div>
					</MDBModalBody>
					<MDBModalFooter>
                        <div className="row">
                            <div style={{marginRight:40}} className="col-md-3">
                                <Link to={{pathname:"/ro/voucher",state:{data:data,extra:extras}}}><MDBBtn gradient="blue"><b>Generate</b></MDBBtn></Link>
                            </div>
                            <div className="col-md-3">
                                <MDBBtn onClick={toggle} gradient="peach"><b>Cancel</b></MDBBtn>
                            </div>
                        </div>
					{/* <MDBBtn color="primary" onClick={toggle}>Close</MDBBtn> */}
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>	
            <div className="Student">
                <div className="container">
                    <MDBCard cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Filter Students</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Status}  name="Status" placeholder="Active / Inactive" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fee_Status}  name="Fee_Status" placeholder="Paid / Unpaid" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Department}  name="Department" placeholder="Department" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Select defaultInputValue="" className="Admission_Form_Select" onChange={seachbyname} options={Names}  name="Names" placeholder="Search By Name" required />
                                        </div>
                                        <div className="col-md-3">
                                            <Select className="Admission_Form_Select" onChange={seachbyroll} options={Roll}  name="Roll" placeholder="Search By Roll" required />
                                        </div>
                                        <div className="col-md-6">
                                            <Export csvData={data} fileName={"Students"} />
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <MDBBtn gradient="blue" onClick={toggle} ><b>Generate Vouchers</b></MDBBtn>
                                            {/* <Modal
                                            onClose={() => setOpen(false)}
                                            onOpen={() => setOpen(true)}
                                            open={open}
                                            trigger={<MDBBtn gradient="blue" ><b>Generate Vouchers</b></MDBBtn>}
                                            style={{margin:'auto',display:'block',paddingTop:-50,height:"37%"}}
                                            >
                                                <div className="Student">
                                                    <div className="container">
                                                        <Modal.Description>
                                                            <hr/>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <Select defaultInputValue="" className="Admission_Form_Select" onChange={voucherchangeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input className="Admission_Form_Input" onChange={voucherchange} type="text" name="Total" placeholder="Total Fee" required=""/>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input className="Admission_Form_Input" onChange={voucherchange} type="text" name="Col" placeholder="College Dues" required=""/>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input className="Admission_Form_Input" onChange={voucherchange} type="text" name="Uni" placeholder="University Dues" required=""/>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <textarea style={{fontWeight:'bold',border:"1px solid"}} class="form-control" onChange={voucherchange} id="exampleFormControlTextarea1" name="Words" placeholder="Amout in Words" rows="1"></textarea>
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                        </Modal.Description>
                                                        <div className="row float-right">
                                                            <div style={{marginRight:40}} className="col-md-3">
                                                                <Link to={{pathname:"/ro/voucher",state:{data:data,extra:extras}}}><MDBBtn gradient="blue"><b>Go</b></MDBBtn></Link>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <MDBBtn onClick={() => setOpen(false)} gradient="peach"><b>Cancel</b></MDBBtn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal> */}
                                        </div>
                                    </div>
                                    <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard style={{opacity:op,marginTop:30}}cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Students : {data.length}</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Father's Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Department</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>AO Dues</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>HOD Dues</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Dues</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>View</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { data.map((student,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{index+1}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Roll}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Full_Name}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{student.Father_Name}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Department}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.Semester}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.AO_Dues===null?"No Dues":student.AO_Dues===""?"No Dues":student.AO_Dues}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{student.HOD_Dues===null?"No Dues":student.HOD_Dues===""?"No Dues":student.HOD_Dues}</td>
                                                        {/* {
                                                            student.Status==="Inactive"?<td style={{color:"red",fontWeight:'bold',textAlign:'center'}} >{student.Status}</td>:
                                                            <td style={{color:"green",fontWeight:'bold',textAlign:'center'}} >{student.Status}</td>
                                                        }
                                                        {
                                                            student.Fee_Status==="Unpaid"?<td style={{color:"red",fontWeight:'bold',textAlign:'center'}} >{student.Fee_Status}</td>:
                                                            <td style={{color:"green",fontWeight:'bold',textAlign:'center'}} >{student.Fee_Status}</td>
                                                        } */}
                                                        <td><Link to={{pathname:"/ro/dues",state:student}}><MDBBtn gradient="blue"><i class="fa fa-exclamation" aria-hidden="true"></i></MDBBtn></Link></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><Link to={{pathname:"/ro/student/profile",state:{student}}}><MDBBtn gradient="blue" >View</MDBBtn></Link></td>
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

export default Students;