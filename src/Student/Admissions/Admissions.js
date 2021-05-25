import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Admissions = () => {

    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/student/admissions").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{console.log(err)})
    },[])

    if(data.length<1){
        return (
            <h1>Loading...</h1>
        )
    }
    
    return (
        <React.Fragment>
            <h1>Total Admissions : {data.length}</h1>
            { data.map((student)=>{
                return (     
                    <div className="card m-4" key={student.id}>
                        <div className="card-body">
                            <h5 className="card-title">{student.Full_Name}</h5>
                            <p className="card-text">{student.Department}</p>
                            <a href="#" className="btn btn-primary">View</a>
                        </div>
                    </div>
            )})}
        </React.Fragment>
    )
}

export default Admissions;
