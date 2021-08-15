import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Select from "react-select";
import { Button, Modal } from 'semantic-ui-react';
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
const Awardlist = () => {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [courses,setcourses] = useState([])

    const [validate,setvalidate] = useState("")

    const [attendanceddata, setawarddata] = useState({})

    const [op, setop] = useState(1)

	const [modal, setmodal] = useState(false);

    const [message, setmessage] = useState("")


	  const toggle = (state) =>{
		setmodal(!modal)
	  }


    useEffect(()=>{
        axios.post("http://localhost:3001/api/all/courses",{Department:login!=null?login.Department:""}).then((res)=>{
            setcourses(res.data.data)
        })
    },[])

    const [fixdata, setfixdata] = useState({
		Course_Title: '',
		Course_Code: '',
		Semester: '',
		Fall_Spring: '',
		Shift: ''
	  })
    
    const [data, setdata] = useState([])


    let d = {}

    
    const Course_Change=(e)=> {
        setop(0.3)
        axios.post("http://localhost:3001/api/instructor/get/awardlist",{Course:e.value}).then((res)=>{
            setdata(res.data.data)

            var i;
            var len = res.data.data.length;
            d["len"] = len
            d["Course_Title"] = ""
            d["Course_Code"] = e.value
            d["Fall_Spring"] = ""
            d["Shift"] = ""
            d["Instructor"] = login!=null?login.Name:""
            d["Department"] = login!=null?login.Department:""
            d["Semester"] = ""
            res.data.data.map((student,index)=>{
                d[`Roll${index}`] = student.Roll
                d[`Name${index}`] = student.Full_Name
                d[`Attendance${index}`] = ""
            })
            setawarddata(d)

        })
		setop(1)
    }


    useEffect(()=>{
        // var i;
        // d["Course_Title"] = ""
        // d["Course_Code"] = ""
        // d["Fall_Spring"] = ""
        // d["Instructor"] = login.Name
        // d["Department"] = login.Department
        // d["Semester"] = ""
        // for (i=0;i<100;i++){
        //     d[`Roll${i}`] = ""
        //     d[`Name${i}`] = ""
        //     d[`Mids${i}`] = ""
        //     d[`Sessional${i}`] = ""
        // }
        // setdata(d)
    },[])


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

    const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" },
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

    var Course_Code = [
		
	]

    courses.map((coursess)=>{
        Course_Code.push( { value: coursess.Course_Code, label: coursess.Course_Code, Name : "Course_Code" })
    })


    var Course_Title = [
		
	]

    courses.map((coursess)=>{
        Course_Title.push( { value: coursess.Course_Title, label: coursess.Course_Title, Name : "Course_Title" })
    })

    const changeselect = (e) => {
        setawarddata({
            ...attendanceddata,
            [e.Name] : e.value
          })
    }

    
    
    const change = (e) => {
        setawarddata({...attendanceddata,
                [e.target.name] : e.target.value
            })
	}

    const Upload = (e) => {
		setop(0.8)
		e.preventDefault()
		axios.post("http://localhost:3001/api/instructor/awardlist",attendanceddata).then((res)=>{
            if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
            setmodal(true)
				setop(1)
		})
        .catch((err)=>{
          setmessage("Something Went Wrong! Please Try Again After Sometime")
            setop(1)
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
            <div className="Student" styl={{opacity:op}}>
			    <div class="container">
                    <MDBCard style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h2 className='h4-responsive mb-0 font-weight-bold'>Upload Attendance List</h2>
                            </MDBView>
                                <MDBCardBody style={{paddingTop:30,paddingBottom:30}}>
                                    <hr />
                                    <p className="Admission_p">Select Course Code <span className="text-danger">*</span></p>
                                    <Select className="Admission_Form_Select" onChange={Course_Change} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                                    <hr />
                                    <div className="row mb-4">
                                        <div className="col-md-3">
                                            <p className="Admission_p">Course Title <span className="text-danger">*</span></p>
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                                        </div>
                                        <div className="col-md-3">
                                            <p className="Admission_p">Shift <span className="text-danger">*</span></p>
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Select Shift" required />
                                        </div>
                                        <div className="col-md-3">
                                            <p className="Admission_p">Fall / Spring <span className="text-danger">*</span></p>
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>
                                        <div className="col-md-3">
                                            <p className="Admission_p">Semester <span className="text-danger">*</span></p>
                                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                                        </div>
                                    </div>
                                    <hr />
                                    {data.map((student, index) => ( 
                                    <div style={{marginLeft:100}} className="row" key={index}>
                                        <div className="col-md-1">
                                            <h2 className="mt-4">{index+1}</h2>
                                        </div>
                                        <div className="col-md-3">
                                            <input className="Admission_Form_Input" value={student.Roll} onChange={change} type="text" name={`Roll`+index} placeholder="Roll Number" required=""/>
                                        </div>
                                        <div className="col-md-3">
                                            <input className="Admission_Form_Input" value={student.Full_Name} onChange={change} type="text" name={`Name`+index} placeholder="Name" required=""/>
                                        </div>
                                        <div className="col-md-3">
                                            <input className="Admission_Form_Input" onChange={change} type="text" name={`Attendance`+index} placeholder="Attendance %" required=""/>
                                        </div>
                                    </div>
                                    )
                                    )}
                                    {data.length>0?
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-center">
                                            <MDBBtn gradient="blue" className="Login_Button" onClick={Upload} >Upload</MDBBtn>
                                        </div>
                                    </div>:
                                    <div></div>}
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

export default Awardlist;