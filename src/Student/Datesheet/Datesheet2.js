import axios from 'axios';
import React, { useState} from 'react';
import Select from "react-select";
import { Table } from 'semantic-ui-react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
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
            axios.post("http://localhost:3001/api/hod/datesheet2",{Department:e.value}).then((res)=>{
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
                        <h4 className='h4-responsive mb-0 font-weight-bold'>Evening Shift</h4>
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
                              <h4 className='h4-responsive mb-0 font-weight-bold'>{data[0].Department} &nbsp;&nbsp;&nbsp;{data[0].Shift} &nbsp;&nbsp;&nbsp; Datesheet &nbsp;&nbsp;&nbsp; {data[0].Fall_Spring}</h4>
                            </MDBView>
                            <MDBCardBody>
                            <div class="row">
                                <div className="col-md-12">
                                  <table className="table table-hover table-bordered">
                                      <thead>
                                        <tr>
                                          <th  clasthsName="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                          <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Title</th>
                                          <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Course Code</th>
                                          <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor</th>
                                          <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Instructor's_Department</th>
                                          <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Semester</th>
                                          <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Time</th>
                                        </tr>
                                      </thead>
                                        <tbody>
                                            {data.map((datesheet,index)=>{
                                            return (
                                              <tr key={index}>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{datesheet.Course_Title}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{datesheet.Course_Code}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{datesheet.Instructor}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{datesheet.Instructor_Department}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{datesheet.Semester}</td>
                                                <td style={{fontWeight:'bold',textAlign:'center'}}>{datesheet.Time_Slot}</td>
                                              </tr>
                                            )})
                                            }
                                        </tbody>
                                      </table>
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
            <Footer/>
        </React.Fragment>
    )
}

export default Datesheet;
