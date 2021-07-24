import axios from 'axios';
import React, { useState} from 'react';
import Select from "react-select";
import { Table } from 'semantic-ui-react';
import Header from '../Header/Header';
import { 
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBView

} from 'mdbreact';

function Datesheet() {

    const [data,setdata] = useState([])
    const [message, setmessage] = useState("")
    const [Loading,setLoading] = useState(false)

    const changeselect = (e) => {
      setLoading(true)
            axios.post("http://localhost:3001/api/hod/datesheet",{Department:e.value}).then((res)=>{
                setdata(res.data.data)
                setLoading(false)
            }).catch((err)=>{
              setmessage("Something Went Wrong! Please Try Again After Sometime")
              setLoading(false)
      })

}

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
                        <h4 className='h4-responsive mb-0 font-weight-bold'>Morning Shift</h4>
                      </MDBView>
                      <MDBCardBody>
                                <hr/>
                                    <Select className="w-10" onChange={changeselect} name="Department" placeholder="Select Department" options={Department} required />
                                <hr/>
                                </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                {data.length>0?
                !Loading?
                      <MDBCard style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                          <MDBCol md='12'>
                            <MDBView
                              cascade
                              className='gradient-card-header light-blue lighten-1'
                            >
                              <h4 className='h4-responsive mb-0 font-weight-bold'>{data[0].Department} &nbsp;&nbsp;&nbsp;{data[0].Shift} &nbsp;&nbsp;&nbsp; Datesheet &nbsp;&nbsp;&nbsp; {new Date().getFullYear()}</h4>
                            </MDBView>
                            <MDBCardBody>
                            <div class="row">
                                <div className="col-md-12">
                                    <Table celled selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Sr#</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Course Title</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Course Code</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Instructor</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Semester</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Time</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Shift</Table.HeaderCell>
                                                <Table.HeaderCell className="text-primary" style={{fontSize:15}}>Semester</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {data.map((datesheet,index)=>{
                                            return (
                                                <Table.Row key={index}>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{index+1}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Course_Title}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Course_Code}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Instructor}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Semester}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Time_Slot}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Shift}</Table.Cell>
                                                    <Table.Cell style={{fontWeight:'bold'}}>{datesheet.Fall_Spring}</Table.Cell>
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
                      :<h1 className="d-flex justify-content-center" style={{marginTop:350}} >Loading...</h1>
                    :<h1 className="d-flex justify-content-center" style={{marginTop:250}} >Nothing to Show...</h1>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Datesheet;
