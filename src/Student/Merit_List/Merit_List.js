import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
import Header from "../Header/Header";
import { Table } from 'semantic-ui-react';
const Merit_List = () => {

    const [data,setdata] = useState([])

    const [merit,setmerit] = useState({
        MeritList: "",
        NOS_Start : 0,
        NOS_End : 0,
        Display : "",
        Department : ""
    })

    const [Departments,setDepartments] = useState("")

    const [Loading,setLoading] = useState(false)

    const Department = [
		{ value: 'BBA', label: 'BBA', Name : "Department" },
		{ value: 'Botany', label: 'Botany', Name : "Department" },
		{ value: 'Chemistry', label: 'Chemistry', Name : "Department" },
		{ value: 'Economics', label: 'Economics', Name : "Department" },
		{ value: 'English', label: 'English', Name : "Department" },
		{ value: 'Physics', label: 'Physics', Name : "Department" },
		{ value: 'Political Science', label: 'Political Science', Name : "Department" },
		{ value: 'Psychology', label: 'Psychology', Name : "Department" },
		{ value: 'Mathematics', label: 'Mathematics', Name : "Department" },
		{ value: 'Statistics', label: 'Statistics', Name : "Department" },
		{ value: 'Information Technology', label: 'Information Technology', Name : "Department" },
		{ value: 'Islamiyat', label: 'Islamiyat', Name : "Department" },
		{ value: 'Urdu', label: 'Urdu', Name : "Department" },
		{ value: 'Zoology', label: 'Zoology', Name : "Department" },
	]

    const changeselect = (e) => {
            setLoading(true)
            setDepartments(e.value)

            axios.post("http://localhost:3001/hod/meritlistcurrent",{Department:e.value}).then((res)=>{
                setmerit(res.data.data[0])
                axios.post("http://localhost:3001/hod/meritlist",{Department:e.value, Year: new Date().getFullYear() }).then((res)=>{
                    setdata(res.data.data)
                    setLoading(false)
                })
        })

    }

    if(Loading){
        return(
            <React.Fragment>
                <Header/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Loading...</h1>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <Header/>
                <div className="Student">
                    <div class="container">
                        <Select className="w-25" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
                        <hr/>
                        {data.length>0?
                                <div class="row mt-4">
                                    <div className="col-md-12">
                                    {merit.Display==1?
                                        <React.Fragment>
                                            <div className="row ml-4">
                                                <div className="col-md-4"><h1>{Departments} </h1></div>
                                                <div className="col-md-3"><h1>Morning</h1></div>
                                                <div className="col-md-3"><h1>{merit.MeritList}</h1></div>
                                                <div className="col-md-2"><h1>{new Date().getFullYear()}</h1></div>
                                            </div>
                                            <Table celled selectable color="grey">
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                        <Table.HeaderCell>ID</Table.HeaderCell>
                                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                                        <Table.HeaderCell>Father's Name'</Table.HeaderCell>
                                                        <Table.HeaderCell>CNIC</Table.HeaderCell>
                                                        <Table.HeaderCell>Merit</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {
                                                    data.slice(merit.NOS_Start-1,merit.NOS_End).map((student,index)=>{
                                                        return (     
                                                            <Table.Row key={index}>
                                                                <Table.Cell><b>{index+1}</b></Table.Cell>
                                                                <Table.Cell><b>{student.id}</b></Table.Cell>
                                                                <Table.Cell><b>{student.Full_Name}</b></Table.Cell>
                                                                <Table.Cell>{student.Father_Name}</Table.Cell>
                                                                <Table.Cell>{student.CNIC}</Table.Cell>
                                                                <Table.Cell>{parseFloat(student.merit).toFixed(2)} %</Table.Cell>
                                                            </Table.Row>
                                                    )})
                                                    }
                                            
                                                </Table.Body>
                                            </Table>
                                        </React.Fragment>
                                    :<h1 className="d-flex justify-content-center" style={{marginTop:250}} >Nothing to Show...</h1>
                                    }
                                    </div>
                                </div>
                        :<div></div>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Merit_List;
