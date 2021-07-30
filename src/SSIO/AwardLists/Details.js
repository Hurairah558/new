import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { Table } from 'semantic-ui-react';
import Footer from '../../Footer/Footer';
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBBtn,
    MDBSpinner 
  
  } from 'mdbreact';

function Details() {
    
    var login = JSON.parse(localStorage.getItem("HOD"))


    const location = useLocation()

    const [data, setdata] = useState([{
        Department:"",
        Course_Title:"",
        Course_Code:"",
        Instructor:"",
        Fall_Spring:"",
        Semester:"",
        Shift:""
    }])

    const [message, setmessage] = useState("")

    const [op, setop] = useState(1)

    console.log(location.state)

    useEffect(()=>{

        axios.post("http://localhost:3001/api/ssio/details",JSON.stringify(login).includes("SSIO")?location.state.Course:"").then((res)=>{
			setdata(res.data.data)
            console.log("Data",res.data.data)
		})
        .catch((err)=>{
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
            <div className="Student">
                <div class="container">
                    <MDBCard style={{opacity:op}} cascade narrow>
                        <MDBRow>
                            <MDBCol md='12'>
                            <MDBView
                                cascade
                                className='gradient-card-header light-blue lighten-1'
                            >
                                <h4 className='h4-responsive mb-0 font-weight-bold'>Award List</h4>
                            </MDBView>
                                <MDBCardBody>
                                    <table className="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Department</span> : {data[0].Department}</td>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Course Title</span> : {data[0].Course_Title}</td>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Course Code</span> : {data[0].Course_Code}</td>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Instructor</span> : {data[0].Instructor}</td>
                                            </tr>
                                            <tr>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Fall / Spring</span> : {data[0].Fall_Spring}</td>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Semester</span> : {data[0].Semester}</td>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><span className="text-primary">Shift</span> : {data[0].Shift}</td>
                                                <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sr#</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Roll</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Name</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Mids</th>
                                                <th  className="text-primary" style={{fontSize:15,fontWeight:'bolder',textAlign:'center'}}>Sessional</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((Student,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{index+1}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Roll}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Name}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Mids}</td>
                                                        <td style={{fontWeight:'bold',textAlign:'center'}}>{Student.Sessional}</td>
                                                    </tr>
                                            )
                                            })}
                                        </tbody>
                                    </table>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Details;
