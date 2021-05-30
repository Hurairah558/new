import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SideMenu from "../../Fixed Components/SideMenu";
import Header from "../Header/Header";
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
            <Header/>
            <div className="Student" >
            <h1>Total Admissions : {data.length}</h1>
            { data.map((student,index)=>{
                return (  
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{student.Full_Name}</h5>
                            <p className="card-text">{student.Department}</p>
                            <a href="#" className="btn btn-primary">View</a>
                        </div>
                    </div>
            )})}
            </div>
        </React.Fragment>
    )
}

export default Admissions;