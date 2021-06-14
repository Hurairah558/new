import axios from 'axios'
import Select from 'react-select';
import './MeritList_Controller_Design.css';
import React, { useEffect, useState } from 'react'
import Header from '../../Fixed Components/Header';
const MeritListData = () => {
    
    axios.defaults.withCredentials = true;
    const login = localStorage.getItem("HOD")
    const [data,setdata] = useState([])
    const [Year, setYear] = useState([])

    const [formData, setFormData] = useState({
		MeritList: '',
		Start: '',
		End: '',
		Display: '',
		Department: login,
	  })


    const [CurrentData, setCurrentData] = useState({
        MeritList: "",
        NOS_Start : "",
        NOS_End : "",
        Display : "",
        Department : login
    })

    useEffect(()=>{
        axios.post("http://localhost:3001/hod/meritlistcurrent",{Department:login}).then((res)=>{
            setCurrentData(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist",{Department:login,Year: new Date().getFullYear()}).then((res)=>{
                    setdata(res.data.data)
                })
        })
        axios.get("http://localhost:3001/api/hod/admissions/years").then((res)=>{
            setYear(res.data.data)
        }).catch((err)=>{console.log(err)})
    },[])

    var Years = [
		
	]

    Year.map((Year)=>{
        Years.push( { value: Year.Year, label: Year.Year, Name : "Years" })
    })

    const [message,setmessage] = useState("")


    // useEffect( () => {
    //         axios.get("http://localhost:3001/loginstatus").then((res)=>{

    //       if(res.data.session.Department!=undefined){

    //         setFormData({
    //             ...formData,
    //             Department: res.data.session.Department
    //         })

    //         axios.post("http://localhost:3001/hod/meritlistcurrent",{Department:res.data.session.Department}).then((res)=>{
    //             if(res.data.data[0]){
    //             setCurrentData(res.data.data[0])
    //         }
    //         }).catch((err)=>{console.log(err)})

    //       }


    //         })
    //     .catch((err)=>{
    //       console.log(err)
    //     })
    //   },[]);


      const update_data = () => {
        axios.post("http://localhost:3001/hod/meritlistcurrent",{Department:login}).then((res)=>{
            setCurrentData(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist",{Department:login,Year: new Date().getFullYear()}).then((res)=>{
                    setdata(res.data.data)
                })
    
        })
      }

    const Apply_MeritList =()=>{
        axios.post("http://localhost:3001/hod/meritlistcontroller",{formData}).then((res)=>{
            if(res.data.message){
                setmessage(res.data.message)
                update_data()
            }
        }).catch((err)=>{console.log(err)})
    }

    const change = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const changeselectYear = (e) => {
        axios.post("http://localhost:3001/hod/meritlist",{Department:login,Year: e.value}).then((res)=>{
            setdata(res.data.data)
        })
	  }

    const changeselect = (e) => {
        setFormData({
            ...formData,
            [e.Name]: e.value
        })
    }


    const MeritList = [
        { value: "1st Merit List", label: "1st Merit List", Name : "MeritList" },
        { value: "2nd Merit List", label: "2nd Merit List", Name : "MeritList" },
        { value: "3rd Merit List", label: "3rd Merit List", Name : "MeritList" },
    ]

    const Display = [
        { value: "True", label: "True", Name : "Display" },
        { value: "False", label: "False", Name : "Display" },
    ]


    return (
        <React.Fragment>
            <Header/>
            <section>
                <h1>{message}</h1>
                <div className="row d-flex justify-content-end">
                    <div className="col" id="Merit_List_Data">
                        <h2 className="Admission_Form_Category">Manage Merit List</h2>
                        <hr/>
                        <p className="Admission_p">Merit List</p>
                        <Select className="Admission_Form_Select" onChange={changeselect} name="MeritList" placeholder="Merit List" options={MeritList} required />
                        <p className="Admission_p">Starts From</p>
                        <input className="Admission_Form_Input" value={formData.Start} onChange={change} type="text" name="Start" placeholder="0" required=""/>
                        <p className="Admission_p">Ends at</p>
                        <input className="Admission_Form_Input" value={formData.End} onChange={change} type="text" name="End" placeholder="55" required=""/>
                        <p className="Admission_p">Diplay Merit List</p>
                        <Select className="Admission_Form_Select" onChange={changeselect} name="Display" placeholder="Diplay Merit List" options={Display} required />
                        <button className="Login_Button" onClick={Apply_MeritList} >Apply Changes</button>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <div id="Merit_List_Data">
                        <h2 className="Admission_Form_Category">Currently</h2>
                            <div className="col">
                                <p className="Merit_List">Merit List &nbsp;&nbsp;: &nbsp;&nbsp;{CurrentData.MeritList}</p>
                            </div>
                            <div className="col">
                                <p className="Merit_List">Students &nbsp;&nbsp;: &nbsp;&nbsp;From {CurrentData.NOS_Start} to {CurrentData.NOS_End}</p>
                            </div>
                            <div className="col">
                                <p className="Merit_List">Display &nbsp;&nbsp;: &nbsp;&nbsp;{CurrentData.Display==1?"True":"False"}</p>
                            </div>
                            <div className="col">
                                <p className="Merit_List">Department &nbsp;&nbsp;: &nbsp;&nbsp;{CurrentData.Department}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className="Admission_p">Select Year</p>
			<Select className="Admission_Form_Select" onChange={changeselectYear} name="Years" placeholder="Year Of Admission" options={Years} required />
                {data.slice(CurrentData.NOS_Start-1,CurrentData.NOS_End-1).map((student,index)=>{
                return (     
                    <div className="card m-4" key={student.id}>
                        <div className="card-body">
                            <h5 className="card-title">Name : {student.Full_Name}</h5>
                            <p className="card-text">Index : {index+1}</p>
                            <p className="card-text">ID : {student.id}</p>
                            <p className="card-text">Dept : {student.Department}</p>
                            <p className="card-text">CNIC : {student.CNIC}</p>
                            <p className="card-text">Inter Marks : {student.Inter_Obtained_Marks}</p>
                            <p className="card-text">Inter Marks : {student.Year}</p>
                        </div>
                    </div>
            )})}
            </section>
        </React.Fragment>
    )
}

export default MeritListData;
