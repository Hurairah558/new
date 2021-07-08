import axios from 'axios'
import Select from 'react-select';
import './MeritList_Controller_Design.css';
import React, { useEffect, useState } from 'react'
import Header from '../../Fixed Components/Header';
import { Table } from 'semantic-ui-react';
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
            <div className="Student">
                <div class="container">
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
                                <div className="col">
                                    <p className="Merit_List">Shift &nbsp;&nbsp;: &nbsp;&nbsp;Morning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <Select className="Admission_Form_Select" onChange={changeselectYear} name="Years" placeholder="Year Of Admission" options={Years} required />
                    {CurrentData.NOS_End-1>0?
                        <div class="row">
                            <div className="col-md-12">
                                <Table celled selectable color="grey">
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Sr#</Table.HeaderCell>
                                            <Table.HeaderCell>ID</Table.HeaderCell>
                                            <Table.HeaderCell>Name</Table.HeaderCell>
                                            <Table.HeaderCell>Father's Name'</Table.HeaderCell>
                                            <Table.HeaderCell>Department</Table.HeaderCell>
                                            <Table.HeaderCell>CNIC</Table.HeaderCell>
                                            <Table.HeaderCell>Merit</Table.HeaderCell>
                                            <Table.HeaderCell>Year</Table.HeaderCell>
                                            <Table.HeaderCell>Shift</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {data.slice(CurrentData.NOS_Start-1,CurrentData.NOS_End-1).map((student,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell><b>{index+1}</b></Table.Cell>
                                                    <Table.Cell><b>{student.id}</b></Table.Cell>
                                                    <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                                    <Table.Cell>{student.Father_Name}</Table.Cell>
                                                    <Table.Cell>{student.Department}</Table.Cell>
                                                    <Table.Cell>{student.CNIC}</Table.Cell>
                                                    <Table.Cell>{parseFloat(student.merit).toFixed(2)} %</Table.Cell>
                                                    <Table.Cell>{student.Year}</Table.Cell>
                                                    <Table.Cell>{student.Shift}</Table.Cell>
                                                </Table.Row>
                                        )})}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    :<div></div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MeritListData;
