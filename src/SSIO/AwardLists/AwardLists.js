import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';

function AwardLists() {


    const [data, setdata] = useState([])

    useEffect(()=>{
        axios.post("http://localhost:3001/api/ssio/awardlists").then((res)=>{
			setdata(res.data.data)
		})
			.catch((err)=>{console.log(err)})
    },[])

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
            {data.map((Course,index)=>{
                return (     
                    <div className="card m-4" key={index}>
                        <h5 className="card-title">	{Course.Course_Title} {Course.Course_Code}</h5>
                    </div>
            )})
            }
            </div>
        </React.Fragment>
    )
}

export default AwardLists;
