import Header from '../../Fixed Components/Header';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Select from "react-select";
import { Table, Button, Modal  } from 'semantic-ui-react';

function Datesheet() {

    const login = localStorage.getItem("HOD")
    const [data,setdata] = useState([])


    useEffect(()=>{
        axios.post("http://localhost:3001/api/hod/datesheet",{Department:login}).then((res)=>{
                setdata(res.data.data)
        })
    },[])

    const update=()=>{
        axios.post("http://localhost:3001/api/hod/datesheet",{Department:login}).then((res)=>{
                setdata(res.data.data)
        })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/hod/datesheet/${id}`).then((res)=>{
            update()
        })
    }


    const [FormData, setFormData] = useState({
		Department: login,
		Course_Code: '',
		Course_Title: '',
		Time_Slot: '',
		Shift: '',
        Fall_Spring:''
	  })


    const Course_Code = [
		{ value: 'IT-209', label: 'IT-209', Name : "Course_Code" },
		{ value: 'IT-210', label: 'IT-210', Name : "Course_Code" },
		{ value: 'IT-211', label: 'IT-211', Name : "Course_Code" },
	]

    const Course_Title = [
		{ value: 'Data Structures', label: 'Data Structures', Name : "Course_Title" },
		{ value: 'Psychology', label: 'Psychology', Name : "Course_Title" },
		{ value: 'Accounting', label: 'Accounting', Name : "Course_Title" },
	]

    const Time_Slot = [
		{ value: '8:30 AM to 9:20 AM', label: '8:30 AM to 9:20 AM', Name : "Time_Slot" },
		{ value: '9:20 AM to 10:10 AM', label: '9:20 AM to 10:10 AM', Name : "Time_Slot" },
		{ value: '10:10 AM to 11:00 AM', label: '10:10 AM to 11:00 AM', Name : "Time_Slot" },
		{ value: '11:00 AM to 11:50 AM', label: '11:00 AM to 11:50 AM', Name : "Time_Slot" },
		{ value: '11:50 AM to 12:40 PM', label: '11:50 AM to 12:40 PM', Name : "Time_Slot" },
		{ value: '12:40 PM to 1:30 PM', label: '12:40 PM to 1:30 PM', Name : "Time_Slot" },
		{ value: '2:00 PM to 3:00 PM', label: '2:00 PM to 3:00 PM', Name : "Time_Slot" },
		{ value: '3:00 PM to 4:00 PM', label: '3:00 PM to 4:00 PM', Name : "Time_Slot" },
		{ value: '4:00 PM to 5:00 PM', label: '4:00 PM to 5:00 PM', Name : "Time_Slot" },
	]

    const Fall_Spring = [
		{ value: 'Fall-2021', label: 'Fall-2021', Name : "Fall_Spring" },
		{ value: 'Spring-2021', label: 'Spring-2021', Name : "Fall_Spring" },
		{ value: 'Fall-2022', label: 'Fall-2022', Name : "Fall_Spring" },
		{ value: 'Spring-2022', label: 'Spring-2022', Name : "Fall_Spring" },
		{ value: 'Fall-2023', label: 'Fall-2023', Name : "Fall_Spring" },
		{ value: 'Spring-2023', label: 'Spring-2023', Name : "Fall_Spring" },
		{ value: 'Fall-2024', label: 'Fall-2024', Name : "Fall_Spring" },
		{ value: 'Spring-2024', label: 'Spring-2024', Name : "Fall_Spring" },
		{ value: 'Fall-2025', label: 'Fall-2025', Name : "Fall_Spring" },
		{ value: 'Spring-2025', label: 'Spring-2025', Name : "Fall_Spring" },
		{ value: 'Fall-2026', label: 'Fall-2026', Name : "Fall_Spring" },
		{ value: 'Spring-2026', label: 'Spring-2026', Name : "Fall_Spring" },
		{ value: 'Fall-2027', label: 'Fall-2027', Name : "Fall_Spring" },
		{ value: 'Spring-2027', label: 'Spring-2021', Name : "Fall_Spring" },
	]


    const Shift = [
		{ value: 'Morning', label: 'Morning', Name : "Shift" },
		{ value: 'Evening', label: 'Evening', Name : "Shift" },
	]

    const changeselect = (e) => {
        setFormData({
            ...FormData,
            [e.Name] : e.value
          })
}

        const changeselects = (e) => {
            axios.post("http://localhost:3001/api/hod/datesheet",{Department:login,Fall_Spring:e.value}).then((res)=>{
                        setdata(res.data.data)
                })
        }

        const [validate,setvalidate] = useState("")

        const send = (e) => {
            e.preventDefault()
              axios.post(`http://localhost:3001/api/hod/generatedatesheet`,FormData)
              .then((res)=>{
                if (res.data.message){
                    setvalidate(res.data.message)
                }
                else{
                  setvalidate(res.data)
                }
                update()
                })
              .catch((err)=>{console.log("No",err)})
          }

    return (
        <React.Fragment>
            <Header/>
            <div className="Student">
                <div class="container">
                    <div className="row" id="Merit_List_Data">
                        <div className="col-md-6">
                            <h2 className="Admission_Form_Category">Datesheet Generate</h2>
                            <hr/>
                            <p className="Admission_p">Course Title</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Title}  name="Course_Title" placeholder="Course Title" required />
                            <p className="Admission_p">Course Code</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Course_Code}  name="Course_Code" placeholder="Course Code" required />
                            <p className="Admission_p">Time</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Time_Slot}  name="Time_Slot" placeholder="Time Slot" required />
                            <p className="Admission_p">Shift</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Shift}  name="Shift" placeholder="Shift" required />
                            <p className="Admission_p">Fall / Spring</p>
                            <Select className="Admission_Form_Select" onChange={changeselect} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                        </div>
                        <div style={{marginTop:400}} className="col-md-6">
                            <button className="Login_Button float-left" style={{width:200}} onClick={send} ><Modals validate={validate} /></button>
                        </div>
                    </div>
                    <hr/>
                    <Select className="w-25" onChange={changeselects} name="Department" placeholder="Select Semester" options={Fall_Spring} required />
                    <hr/>
                    {data.length>0?
                        <>
                            <h1>Currently Displaying Datesheet</h1>
                            <div class="row mt-4">
                                <div className="col-md-12">
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell>Time</Table.HeaderCell>
                                                <Table.HeaderCell>Shift</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                                <Table.HeaderCell>Delete</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((datesheet,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{index+1}</Table.Cell>
                                                    <Table.Cell>{datesheet.Course_Title}</Table.Cell>
                                                    <Table.Cell>{datesheet.Course_Code}</Table.Cell>
                                                    <Table.Cell>{datesheet.Time_Slot}</Table.Cell>
                                                    <Table.Cell>{datesheet.Shift}</Table.Cell>
                                                    <Table.Cell>{datesheet.Fall_Spring}</Table.Cell>
                                                    <Table.Cell><button className="btn btn-danger" onClick={()=>Delete(datesheet.id)} >Delete</button></Table.Cell>
                                                </Table.Row>
                                            )})
                                            }
                                        </Table.Body>
                                    </Table>
                                </div>
                            </div>
                        </>
                    :<div></div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Datesheet;


function Modals(props) {
	const [open, setOpen] = React.useState(false)
	return (
	<Modal
	  onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
		style={{height:"23%",margin:"auto"}}
		trigger={<Button style={{background:"transparent",color:"white",width:"100%"}} >Generate Datesheet</Button>}
	  >
		<Modal.Header><h1>Response</h1></Modal.Header>
		<Modal.Content image>
			<Modal.Description>
				<h2 className="d-flex justify-content-center">{String(props.validate).replaceAll('"',"").replaceAll('_'," ")}</h2>
				<hr/>
			</Modal.Description>
		</Modal.Content>
	</Modal>
	)
  }