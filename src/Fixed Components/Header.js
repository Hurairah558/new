import React, { useState } from 'react';
import './SideMenu_Design.css';
import {Link,Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Set_Login_Status , Set_Login_Type } from '../redux/actions/Login_Status_Actions';

const Header = () => {

    const dispatch = useDispatch();
    const IsLogin = useSelector((state)=>state.Login.IsLogin)

    axios.defaults.withCredentials = true;

    const [logout ,setlogout] = useState(false)

    const Logout = () => {
        setlogout(true)
        localStorage.removeItem("HOD")
        axios.post("http://localhost:3001/logout").then((res)=>{
          if(res.data.LoggedIn == false){
                    dispatch(Set_Login_Status(res.data.LoggedIn))
                }
                    
            })
        .catch((err)=>{
          console.log(err)
        })
      }
      if(logout){
          return <Redirect to="/login" />
      }


    return (
        <React.Fragment>
            <nav id="header" className="position-fixed sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <h2>
                <Link to="/"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></Link>
                </h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white navbar-toggler-icon"></span>
                </button>

                <div className="ml-4 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link text-white" href="#">Login <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admissionform" className="nav-link text-white" href="#">Admission Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/student/admissions" className="nav-link text-white" href="#">Total Admissions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/admissions" className="nav-link text-white" href="#">Admissions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/admissions" className="nav-link text-white" href="#">Merit List</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white disabled" href="#">Disabled</a>
                        </li>
                        { IsLogin?
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
