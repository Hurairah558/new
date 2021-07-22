import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

const Header = () => {

    axios.defaults.withCredentials = true;

    const [login,setlogin] = useState(JSON.parse(localStorage.getItem("HOD")))

    useEffect(() => {
        axios.get("http://localhost:3001/loginstatus").then((res)=>{
        if(res.data.LoggedIn==false){
            localStorage.removeItem("HOD")
            setlogin(localStorage.getItem("HOD"))
        }
            })
        .catch((err)=>{
        console.log(err)
        })
    },[login]);


    const Logout = () => {
        localStorage.removeItem("HOD")
        setlogin(localStorage.getItem("HOD"))
        axios.post("http://localhost:3001/logout").then((res)=>{
            })
        .catch((err)=>{
          console.log(err)
        })
      }

      if(login!=null){

        if (JSON.stringify(login).includes("AO")){
            return(
                <Redirect to="/ao/feemanagement" />
               )
        }
    
        else if (JSON.stringify(login).includes("Teacher")){
            return(
                <Redirect to="/instructor/home" />
               )
        }
    
        else if (JSON.stringify(login).includes("RO")){
            return(
                <Redirect to="/ro/students" />
               )
        }
    
        else if (JSON.stringify(login).includes("SSIO")){
            return(
                <Redirect to="/ssio/freeinstructors" />
               )
        }

        else if (JSON.stringify(login).includes("Student")){
            return(
                <Redirect to="/student/profile" />
               )
        }
    
    
        else if (JSON.stringify(login).includes("HOD")){
            return(
             <Redirect to="/hod/students" />
            )
          }

    }

    else{

    return (
        <React.Fragment>
            {login==null?
          <Redirect to="/login" />:
          <div></div>
      }
            <nav id="header" className="position-fixed sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <h2>
                <Link to="/"><span className="lab la-accusoft text-white mt-2"></span> <span className="text-white">GMC Sialkot</span></Link>
                </h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white navbar-toggler-icon"></span>
                </button>

                <div className="ml-4 collapse navbar-collapse mb-2" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Students
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/ssio/students" className="nav-link text-dark">Morning</Link>
                            <Link to="/ssio/students2" className="nav-link text-dark">Evening</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/ssio/freeinstructors" className="nav-link text-white" href="#">Free Instructors</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ssio/announcement" className="nav-link text-white" href="#">Announcement</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ssio/awardlists" className="nav-link text-white" href="#">Award Lists</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ssio/attendancelist" className="nav-link text-white" href="#">Attendance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ssio/password/reset" className="nav-link text-white" href="#">Change</Link>
                        </li>
                        { login!=null?
                        <button className="btn btn-primary ml-2" onClick={Logout}>Logout</button>
                        :
                        <div></div>
                    }
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
}

export default Header;