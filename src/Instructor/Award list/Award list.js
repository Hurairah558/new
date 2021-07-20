import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Select from "react-select";
import Header from '../Header/Header';
const Awardlist = () => {

    const n = 100;

    const login = JSON.parse(localStorage.getItem("HOD"))

    const [fixdata, setfixdata] = useState({
		Course_Title: '',
		Course_Code: '',
		Semester: '',
		Fall_Spring: '',
		Shift: ''
	  })
    
    const [data, setdata] = useState({
        
    })


    let d = {}

    

    useEffect(()=>{
        var i;
        d["Course_Title"] = ""
        d["Course_Code"] = ""
        d["Fall_Spring"] = ""
        d["Instructor"] = login.Name
        d["Department"] = login.Department
        d["Semester"] = ""
        for (i=0;i<100;i++){
            d[`Roll${i}`] = ""
            d[`Name${i}`] = ""
            d[`Mids${i}`] = ""
            d[`Sessional${i}`] = ""
        }
        setdata(d)
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

    const changeselect = (e) => {
        setdata({
            ...data,
            [e.Name] : e.value
          })
    }

    
    
    const change = (e) => {
            setdata({...data,
                [e.target.name] : e.target.value
            })
	}

    const Upload = (e) => {
		e.preventDefault()
		axios.post("http://localhost:3001/api/instructor/awardlist",data).then((res)=>{
			
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
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name="Course_Title" placeholder="Course Title" required=""/>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name="Course_Code" placeholder="Course Code" required=""/>
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
                    {[...Array(n)].map((elementInArray, index) => ( 
                    <div className="row" key={index}>
                        <div className="col-md-1">
                            <h2 className="text-white mt-4">{index+1}</h2>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name={`Roll`+index} placeholder="Roll Number" required=""/>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name={`Name`+index} placeholder="Name" required=""/>
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
                    <button className="Login_Button" onClick={Upload} >Upload</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Awardlist;