import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';

function Details() {


    const location = useLocation()

    const [data, setdata] = useState([])

    useEffect(()=>{

        axios.post("http://localhost:3001/api/ssio/details",location.state.Course).then((res)=>{
			setdata(res.data.data)
		})
			.catch((err)=>{console.log(err)})

    },[])

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
            {data.map((student,index)=>{
                return(
                    <div className="card m-4" key={index}>
                    <div className="card-body">
                    <h5 className="card-title"><b>Roll</b> : {student.Roll}</h5>
                    <h5 className="card-title"><b>index</b> : {index}</h5>
                        <h5 className="card-title"><b>Name</b> : {student.Name}</h5>
                        <p className="card-text"><b>Mids</b> : {student.Mids}</p>
                        <p className="card-text"><b>Sessional</b> : {student.Sessional}</p>
                    </div>
                </div>
                        )
                        })}
            </div>
        </React.Fragment>
    )
}

export default Details;
