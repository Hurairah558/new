import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Select from "react-select";
import { Button, Modal } from 'semantic-ui-react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
const Awardlist = () => {

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [courses,setcourses] = useState([])

    const [validate,setvalidate] = useState("")

    const [awarddata, setawarddata] = useState({})


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
                d[`Mids${index}`] = ""
                d[`Sessional${index}`] = ""
            })
            setawarddata(d)

        })
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
            ...awarddata,
            [e.Name] : e.value
          })
    }

    
    
    const change = (e) => {
        setawarddata({...awarddata,
                [e.target.name] : e.target.value
            })
	}

    const Upload = (e) => {

		e.preventDefault()
		axios.post("http://localhost:3001/api/instructor/awardlist",awarddata).then((res)=>{
            if (res.data.message){
                setvalidate(res.data.message)
            }
            else{
              setvalidate(res.data)
            }
		})
			.catch((err)=>{console.log(err)})
	}

    return (
        <React.Fragment>
            <Header/>
            <div className="Admission_Form">
			    <div className="signup">
				    <div className="container">
                    <label className="Admission_Label">Upload Award List</label>
                    <hr style={{background:"white"}} />
                    <p className="Admission_p">Select Course Code</p>
                    <Select className="Admission_Form_Select" onChange={Course_Change} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                    <hr style={{background:"white"}} />
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <p className="Admission_p">Course Title</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                        </div>
                        <div className="col-md-3">
                            <p className="Admission_p">Shift</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Select Shift" required />
                        </div>
                        <div className="col-md-3">
                            <p className="Admission_p">Fall / Spring</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                        </div>
                        <div className="col-md-3">
                            <p className="Admission_p">Semester</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Semester}  name="Semester" placeholder="Semester" required />
                        </div>
                    </div>
                    <hr style={{background:"white"}} />
                    {data.map((student, index) => ( 
                    <div className="row" key={index}>
                        <div className="col-md-1">
                            <h2 className="text-white mt-4">{index+1}</h2>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" value={student.Roll} onChange={change} type="text" name={`Roll`+index} placeholder="Roll Number" required=""/>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" value={student.Full_Name} onChange={change} type="text" name={`Name`+index} placeholder="Name" required=""/>
                        </div>
                        <div className="col-md-2">
                            <input className="Login_input" onChange={change} type="text" name={`Mids`+index} placeholder="Mids" required=""/>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name={`Sessional`+index} placeholder="Sessional" required=""/>
                        </div>
                    </div>
                    )
                    )}
                    <button className="Login_Button" onClick={Upload} ><Modals validate={validate}/></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Awardlist;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Upload</Button>}
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