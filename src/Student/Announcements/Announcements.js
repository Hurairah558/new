import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

function Announcements() {

    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/api/student/announcements").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{console.log(err)})
    },[])


    return (
        <React.Fragment>
            <Header/>
            <div className="Student" >
            { data.map((announcement,index)=>{
                return (  
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Subject : {announcement.Subject}</h5>
                            <p className="card-text"><b>Announcement</b> : {announcement.Announcement}</p>
                        </div>
                    </div>
            )})}
            </div>
        </React.Fragment>
    )
}

export default Announcements;
