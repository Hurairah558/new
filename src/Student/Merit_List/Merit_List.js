import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
import Header from "../Header/Header";
const Merit_List = () => {

    const [data,setdata] = useState([])

    const [merit,setmerit] = useState({
        MeritList: "",
        NOS_Start : 0,
        NOS_End : 0,
        Display : "",
        Department : ""
    })


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

            axios.post("http://localhost:3001/hod/meritlistcurrent",{Department:e.value}).then((res)=>{
                setmerit(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist",{Department:e.value, Year: new Date().getFullYear() }).then((res)=>{
                    setdata(res.data.data)
                })
        })

    }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <Select className="ml-4 w-25" value={merit.Department} onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
            </div>
            {merit.Display==1?
             data.slice(merit.NOS_Start-1,merit.NOS_End).map((student,index)=>{
                return (     
                    <div className="card m-4" key={student.id}>
                        <div className="card-body">
                            <h5 className="card-title">Name : {student.Full_Name}</h5>
                            <p className="card-text">Index : {index+1}</p>
                            <p className="card-text">ID : {student.id}</p>
                            <p className="card-text">Dept : {student.Department}</p>
                            <p className="card-text">CNIC : {student.CNIC}</p>
                            <p className="card-text">Inter Marks : {student.Inter_Obtained_Marks}</p>
                        </div>
                    </div>
            )}):
            <h1>Not published yet</h1>
            }
        </React.Fragment>
    )
}

export default Merit_List;
