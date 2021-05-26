import axios from 'axios'
import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Merit_List_Data } from '../../redux/actions/Login_Status_Actions';
const MeritListData = () => {
    const [data,setdata] = useState({
        MeritList:"",
        Department : "",
        Display : ""
    })

    const S =  useSelector((state)=>state.Login.Session_Data)
    console.log("session",S)
    const Merit_List_Datas =  useSelector((state)=>state.Login.Merit_List_Data)

    const dispatch = useDispatch()

    const [dept,setdept] = useState("")

    useEffect(()=>{

        // axios.get("http://localhost:3001/loginstatus").then((res)=>{

        //     console.log(res.data.data.Department)
        //     setdept(res.data.data.Department)
                axios.post("http://localhost:3001/hod/meritlistdata",{Department:S.Department}).then((res)=>{
                    setdata(res.data.data[0])
                    console.log(res.data.data[0])
                }).catch((err)=>{console.log(err)})
        // }).catch((err)=>{console.log(err)})
    },[])

    const change = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const changeselect = (e) => {
		setdata({
		  ...data,
		  [e.Name] : e.value
		})
	  }


    var MeritList = [
        { value: data.MeritList, label: data.MeritList, Name : "MeritList" },
    ]

    return (
        <React.Fragment>
            <section>
                <h1>Dept : {dept}</h1>
                <div className="col" id="div1">
								<h2 className="Admission_Form_Category">Personal Info</h2>
								<hr/>
								<p className="Admission_p">Merit List</p>
								<Select className="Admission_Form_Select" defaultValue={MeritList[0]} onChange={changeselect} name="MeritList" placeholder="Merit List" options={MeritList} required />
								<p className="Admission_p">Department</p>
								<input className="Admission_Form_Input" value={data.Department} onChange={change} type="text" name="Department" placeholder="Father's Name" required=""/>
								<p className="Admission_p">Display</p>
								<input className="Admission_Form_Input" value={data.Display} onChange={change} type="text" name="Display" placeholder="Display" required=""/>
							</div>
            </section>
        </React.Fragment>
    )
}

export default MeritListData;
