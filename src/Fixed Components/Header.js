import React, { useState , useEffect} from 'react';
import './SideMenu_Design.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

const Header = () => {

    axios.defaults.withCredentials = true;

    const [login,setlogin] = useState(localStorage.getItem("HOD"))

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
    },[]);


    const Logout = () => {
        localStorage.removeItem("HOD")
        setlogin(localStorage.getItem("HOD"))
        axios.post("http://localhost:3001/logout").then((res)=>{
            })
        .catch((err)=>{
          console.log(err)
        })
      }


    return (
        <React.Fragment>
            {login==null?
          <Redirect to="/login" />:
          <div></div>
      }
            <nav id="header" className="position-fixed sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <h2>
                <Link to="/"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></Link>
                </h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white navbar-toggler-icon"></span>
                </button>

                <div className="ml-4 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/hod/students" className="nav-link text-white" href="#">Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/timetablegenerate" className="nav-link text-white" href="#">Time Table Generate</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/addstudent" className="nav-link text-white" href="#">Add Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/admissions" className="nav-link text-white" href="#">Admissions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/addinstructor" className="nav-link text-white" href="#">Add Instructor</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Merit List Controller
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/hod/meritlistcontroller" className="nav-link text-dark"> Morning </Link>
                            <Link to="/hod/meritlistcontroller2" className="nav-link text-dark"> Evening </Link>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white disabled" href="#">Disabled</a>
                        </li>
                        { login!=null?
                        <button className="btn btn-primary" onClick={Logout}>Logout</button>
                        :
                        <div></div>
                    }
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Header;
