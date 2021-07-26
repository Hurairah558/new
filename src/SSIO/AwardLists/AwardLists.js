import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Select from 'react-select';
import { Table } from 'semantic-ui-react';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn 
  
  } from 'mdbreact';
function AwardLists() {


    const [data, setdata] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    useEffect(()=>{
        axios.post("http://localhost:3001/api/ssio/awardlists").then((res)=>{
			setdata(res.data.data)
		})
        .catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    },[])


    const update=()=>{
        axios.post("http://localhost:3001/api/ssio/awardlists").then((res)=>{
                setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }

    const Delete =(id)=>{
        axios.delete(`http://localhost:3001/api/ssio/awardlist/${id}`).then((res)=>{
            update()
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    }


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

    const changeselects = (e) => {
        axios.post("http://localhost:3001/api/ssio/awardlists",{Fall_Spring:e.value}).then((res)=>{
            setdata(res.data.data)
    }).catch((err)=>{
        setmessage("Something Went Wrong! Please Try Again After Sometime")
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
                <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Fall / Spring</h4>
                            </MDBView>
                                <MDBCardBody>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Select className="Admission_Form_Select w-100" onChange={changeselects} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                                        </div>
                                    </div>
                                    
                                <hr/>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    {data.length>0?
                    <MDBCard style={{opacity:op,marginTop:30}} cascade narrow>
                    <MDBRow>
                        <MDBCol md='12'>
                        <MDBView
                            cascade
                            className='gradient-card-header light-blue lighten-1'
                        >
                            <h4 className='h4-responsive mb-0 font-weight-bold'>Award Lists</h4>
                        </MDBView>
                            <MDBCardBody>
                            <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Shift</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Fall / Spring</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>View</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Delete</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>         
                                            {data.map((Course,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Instructor}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Course_Title}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Course_Code}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Shift}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Semester}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Course.Fall_Spring}</td>
                                                        <td ><Link to={{pathname:"/ssio/awardlistdetails",state:{Course}}} ><MDBBtn gradient="blue"><b>View</b></MDBBtn></Link></td>
                                                        <td ><MDBBtn onClick={()=>Delete(Course.id)} gradient="peach"><b>Delete</b></MDBBtn></td>
                                                    </tr>
                                            )})
                                            }
                                        </tbody>
                                    </table>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:150}} >Nothing to Show...</h1>}
                </div>
            </div>


            {/* <div className="Student">
                <div class="container">
                    <p className="Admission_p">Fall / Spring</p>
                    <Select className="Admission_Form_Select" onChange={changeselects} options={Fall_Spring}  name="Fall_Spring" placeholder="Fall / Spring" required />
                    <hr/>
                    {data.length>0?
                        <>
                            <h1>Currently Displaying Award Lists</h1>
                            <div class="row">
                                <div className="col-md-12">
                                <Table style={{textAlign:"center"}} celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell>Instructor</Table.HeaderCell>
                                                <Table.HeaderCell>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell>Department</Table.HeaderCell>
                                                <Table.HeaderCell>Shift</Table.HeaderCell>
                                                <Table.HeaderCell>Semester</Table.HeaderCell>
                                                <Table.HeaderCell>Fall / Spring</Table.HeaderCell>
                                                <Table.HeaderCell>View</Table.HeaderCell>
                                                <Table.HeaderCell>Delete</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>         
                                            {data.map((Course,index)=>{
                                                return (
                                                    <Table.Row key={index}>
                                                        <Table.Cell>{index+1}</Table.Cell>
                                                        <Table.Cell>{Course.Instructor}</Table.Cell>
                                                        <Table.Cell>{Course.Course_Title}</Table.Cell>
                                                        <Table.Cell>{Course.Course_Code}</Table.Cell>
                                                        <Table.Cell>{Course.Department}</Table.Cell>
                                                        <Table.Cell>{Course.Shift}</Table.Cell>
                                                        <Table.Cell>{Course.Semester}</Table.Cell>
                                                        <Table.Cell>{Course.Fall_Spring}</Table.Cell>
                                                        <Table.Cell><Link to={{pathname:"/ssio/awardlistdetails",state:{Course}}} ><button className="btn btn-primary">View</button></Link></Table.Cell>
                                                        <Table.Cell><button className="btn btn-danger" onClick={()=>Delete(Course.id)} >Delete</button></Table.Cell>
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
            </div> */}
        </React.Fragment>
    )
}

export default AwardLists;
