import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Select from 'react-select';
const Time_Table = () => {

    const [data,setdata] = useState([])

    const login = JSON.parse(localStorage.getItem("HOD"))

    axios.defaults.withCredentials= true;

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

    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/timetable",{Department:login.Department}).then((res)=>{
                setdata(res.data.data)
        })
    },[data])

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/timetable/${id}`).then((res)=>{
        })
    }

    return (
        <React.Fragment>
             {data.map((timetable,index)=>{
                return (     
                    <div className="card m-4" key={timetable.id}>
                        <div className="card-body">
                            <p className="card-text">Index : {index+1}</p>
                            <h5 className="card-title">	Instructor : {timetable.Instructor}</h5>
                            <p className="card-text">Instructor's Department : {timetable.Instructor_Department}</p>
                            <p className="card-text">Course Title : {timetable.Course_Title}</p>
                            <p className="card-text">Course Code : {timetable.Course_Code}</p>
                            <p className="card-text">Semester : {timetable.Semester}</p>
                            <p className="card-text">Time_Slot : {timetable.Time_Slot}</p>
                            <p className="card-text">Shift : {timetable.Shift}</p>
                            <p className="card-text">Room_no : {timetable.Room_no}</p>
                            <button className="btn btn-danger" onClick={()=>Delete(timetable.id)} >Delete</button>
                        </div>
                    </div>
            )})
            }
        </React.Fragment>
    )
}

export default Time_Table;