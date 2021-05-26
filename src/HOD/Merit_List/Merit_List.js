import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
const Merit_List = () => {

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
        axios.post("http://localhost:3001/hod/meritlist",{Department:e.value}).then((res)=>{
            setdata(res.data.data)
        })
	  }

    return (
        <React.Fragment>
            <div className="Student">
                <Select className="ml-4 w-25" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
            </div>
            { data.slice(0,55).map((student,index)=>{
                return (     
                    <div className="card m-4" key={student.id}>
                        <div className="card-body">
                            <h5 className="card-title">Name : {student.Full_Name}</h5>
                            <p className="card-text">Index : {index}</p>
                            <p className="card-text">ID : {student.id}</p>
                            <p className="card-text">Dept : {student.Department}</p>
                            <p className="card-text">CNIC : {student.CNIC}</p>
                            <p className="card-text">Inter Marks : {student.Inter_Obtained_Marks}</p>
                        </div>
                    </div>
            )})}
        </React.Fragment>
    )
}

export default Merit_List;
