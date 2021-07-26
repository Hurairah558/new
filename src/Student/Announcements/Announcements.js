import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';
function Announcements() {

    const [data,setdata] = useState([])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    useEffect(()=>{
        axios.get("http://localhost:3001/api/student/announcements").then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            setmessage("Something Went Wrong! Please Try Again After Sometime")
        })
    },[])

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
            <div className="Student" >
                <div class="container">
                <MDBCard style={{opacity:op}} style={{marginTop:30}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBView
                                    cascade
                                    className='gradient-card-header light-blue lighten-1'
                                >
                                    <h4 className='h4-responsive mb-0 font-weight-bold'>Latest Announcements</h4>
                                </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Subject</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Announcement</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { data.reverse().map((announcement,index)=>{
                                                return (
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}><b>{announcement.Subject}</b></td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{announcement.Announcement}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{String(announcement.Timing).slice(0,10)}</td>
                                                    </tr>
                                            )})}
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Announcements;
