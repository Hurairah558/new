import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
import Header from "../Header/Header";
const Time_Table = () => {

    const [data,setdata] = useState([])


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

    const changeselect = (e) => {
        
            axios.post("http://localhost:3001/api/hod/timetable",{Department:e.value}).then((res)=>{
                setdata(res.data.data)
        })
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <Select className="ml-4 w-25" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
            </div>
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
                        </div>
                    </div>
            )})
            }
        </React.Fragment>
    )
}

export default Time_Table;