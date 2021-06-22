import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
const Awardlist = () => {

    const n = 100;

    const [fixdata, setfixdata] = useState({
		Course_Title: '',
		Course_Code: '',
		Fall_Spring: ''
	  })
    
    const [data, setdata] = useState({
        
    })


    let d = {}

    

    useEffect(()=>{
        var i;
        d["Course_Title"] = ""
        d["Course_Code"] = ""
        d["Fall_Spring"] = ""
        for (i=0;i<100;i++){
            d[`Roll${i}`] = ""
            d[`Name${i}`] = ""
            d[`Mids${i}`] = ""
            d[`Sessional${i}`] = ""
        }
        setdata(d)
    },[])


    

    
    
    const change = (e) => {
            setdata({...data,
                [e.target.name] : e.target.value
            })
	}

    const Upload = (e) => {
		e.preventDefault()
		axios.post("http://localhost:3001/api/instructor/awardlist",data).then((res)=>{
			
		})
			.catch((err)=>{console.log(err)})
	}

    return (
        <React.Fragment>
            <Header/>
            <div className="Admission_Form">
			    <div className="signup">
				    <div className="container">
                    <label className="Admission_Label">Upload Award List</label>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <input className="Login_input" onChange={change} type="text" name="Course_Title" placeholder="Course Title" required=""/>
                        </div>
                        <div className="col-md-4">
                            <input className="Login_input" onChange={change} type="text" name="Course_Code" placeholder="Course Code" required=""/>
                        </div>
                        <div className="col-md-4">
                            <input className="Login_input" onChange={change} type="text" name="Fall_Spring" placeholder="Fall / Spring" required=""/>
                        </div>
                    </div>
                    {[...Array(n)].map((elementInArray, index) => ( 
                    <div className="row" key={index}>
                        <div className="col-md-1">
                            <h2 className="text-white mt-4">{index+1}</h2>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name={`Roll`+index} placeholder="Roll Number" required=""/>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name={`Name`+index} placeholder="Name" required=""/>
                        </div>
                        <div className="col-md-2">
                            <input className="Login_input" onChange={change} type="text" name={`Mids`+index} placeholder="Mids" required=""/>
                        </div>
                        <div className="col-md-3">
                            <input className="Login_input" onChange={change} type="text" name={`Sessional`+index} placeholder="Sessional" required=""/>
                        </div>
                    </div>
                    )
                    )}
                    <button className="Login_Button" onClick={Upload} >Upload</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Awardlist;
