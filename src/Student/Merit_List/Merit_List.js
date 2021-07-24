import axios from 'axios';
import React,{useState} from 'react'
import Select from 'react-select';
import Header from "../Header/Header";
import { Table } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView
  
  } from 'mdbreact';
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
    const [message, setmessage] = useState("")
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
                setLoading(false)
                axios.post("http://localhost:3001/hod/meritlist",{Department:e.value, Year: new Date().getFullYear() }).then((res)=>{
                    setdata(res.data.data)
                    setLoading(false)
                }).catch((err)=>{
                    setmessage("Something Went Wrong! Please Try Again After Sometime")
                    setLoading(false)
            })
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
            setLoading(false)
    })

    }

    if(message!=""){
        return (
            <React.Fragment>
                <Header/>
                <h1 className="d-flex justify-content-center" style={{marginTop:350}} >{message}</h1>
            </React.Fragment>
        )
      }

        return (
            <React.Fragment>
                <Header/>
                <div className="Student">
                    <div class="container">
                        
                    <MDBCard cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Merit List</h4>
                            </MDBView>
                            <MDBCardBody>
                                        <hr/>
                                            <Select className="w-10" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
                                        <hr/>
                                        </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>    
                    
                        <hr/>
                        {data.length>0?
                        !Loading?
                        merit.Display==1?
                            <MDBCard style={{marginTop:30}} cascade narrow>
                            <MDBRow>
                              <MDBCol md='12'>
                                <MDBView
                                  cascade
                                  className='gradient-card-header light-blue lighten-1'
                                >
                                  <h4 className='h4-responsive mb-0 font-weight-bold'>{merit.Department} &nbsp;&nbsp;&nbsp;{data[0].Shift} &nbsp;&nbsp;&nbsp; {merit.MeritList} &nbsp;&nbsp;&nbsp; {new Date().getFullYear()}</h4>
                                </MDBView>
                                <MDBCardBody>
                                <div class="row mt-4">
                                    <div className="col-md-12">
                                            <Table>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Sr#</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>ID</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Name</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Father's Name'</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>CNIC</Table.HeaderCell>
                                                        <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Merit</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {
                                                    data.slice(merit.NOS_Start-1,merit.NOS_End).map((student,index)=>{
                                                        return (     
                                                            <Table.Row key={index}>
                                                                <Table.Cell style={{fontWeight:'bold'}}><b>{index+1}</b></Table.Cell>
                                                                <Table.Cell style={{fontWeight:'bold'}}><b>{student.id}</b></Table.Cell>
                                                                <Table.Cell style={{fontWeight:'bold'}}><b>{student.Full_Name}</b></Table.Cell>
                                                                <Table.Cell style={{fontWeight:'bold'}}>{student.Father_Name}</Table.Cell>
                                                                <Table.Cell style={{fontWeight:'bold'}}>{student.CNIC}</Table.Cell>
                                                                <Table.Cell style={{fontWeight:'bold'}}>{parseFloat(student.merit).toFixed(2)} %</Table.Cell>
                                                            </Table.Row>
                                                    )})
                                                    }
                                            
                                                </Table.Body>
                                            </Table>
                                    </div>
                                </div>
                                </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                        :<h1 className="d-flex justify-content-center" style={{marginTop:250}} >Nothing to Show...</h1>
                        :<h1 className="d-flex justify-content-center" style={{marginTop:350}} >Loading...</h1>
                        :<h1 className="d-flex justify-content-center" style={{marginTop:250}} >Nothing to Show...</h1>}
                    </div>
                </div>
            </React.Fragment>
        )
    }

export default Merit_List;
