import React,{useState,useEffect} from 'react'
import axios from 'axios';
import SideMenu from '../../Fixed Components/SideMenu';

const Admissions = () => {

    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/hod/admissions").then((res)=>{
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
            <SideMenu/>
            <section>
            <h1>Total Admissions : {data.length}</h1>
            { data.map((student,index)=>{
                return (     
                    <div className="card m-4" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Name : {student.Full_Name}</h5>
                            <p className="card-text">Dept : {student.Department}</p>
                            <p className="card-text">CNIC : {student.CNIC}</p>
                            <p className="card-text">Inter Marks : {student.Inter_Obtained_Marks}</p>
                            <a href="#" className="btn btn-primary">View</a>
                        </div>
                    </div>
            )})}
            </section>
        </React.Fragment>
    )
}

export default Admissions;
