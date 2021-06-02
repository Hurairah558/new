import axios from 'axios';
import React, { useState } from 'react';
import Select from "react-select";
import Header from "../Header/Header";

const Free_Instructors = () => {

    const [data,setdata] = useState([]);


    const Time_Slot = [
		{ value: '8:30 AM to 9:20 AM', label: '8:30 AM to 9:20 AM', Name : "Time_Slot" },
		{ value: '9:20 AM to 10:10 AM', label: '9:20 AM to 10:10 AM', Name : "Time_Slot" },
		{ value: '10:10 AM to 11:00 AM', label: '10:10 AM to 11:00 AM', Name : "Time_Slot" },
		{ value: '11:00 AM to 11:50 AM', label: '11:00 AM to 11:50 AM', Name : "Time_Slot" },
		{ value: '11:50 AM to 12:40 PM', label: '11:50 AM to 12:40 PM', Name : "Time_Slot" },
		{ value: '12:40 PM to 1:30 PM', label: '12:40 PM to 1:30 PM', Name : "Time_Slot" },
		{ value: '2:00 PM to 3:00 PM', label: '2:00 PM to 3:00 PM', Name : "Time_Slot" },
		{ value: '3:00 PM to 4:00 PM', label: '3:00 PM to 4:00 PM', Name : "Time_Slot" },
		{ value: '4:00 PM to 5:00 PM', label: '4:00 PM to 5:00 PM', Name : "Time_Slot" },
	]

    const changeselect = (e) => {

        axios.post("http://localhost:3001/api/ssio/freeinstructors",{Time_Slot:e.value}).then((res)=>{
            setdata(res.data.data)
    })
}

    return (
        <React.Fragment>
            <Header/>
            <section>
            <p className="Admission_p">Select Time Slot</p>
            <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
            { data.length>0? <h1>Total Free Teachers in GMC : {data.length}</h1>:<div></div>}

            { data.map((record,index)=>{
                return (     
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                        <h5 className="card-title"><b>Instructor</b> : {record.Instructor}</h5>
                        </div>
                    </div>
            )})}
            </section>
        </React.Fragment>
    )
}

export default Free_Instructors;
