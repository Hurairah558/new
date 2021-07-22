import React,{useState,useEffect} from 'react';
import {Link ,Redirect} from 'react-router-dom';
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

    const [logout, setlogout] = useState("")

    const Logout = () => {
        localStorage.removeItem("HOD")
        setlogin(localStorage.getItem("HOD"))
        axios.post("http://localhost:3001/logout").then((res)=>{

            setlogout("Something")

            })
        .catch((err)=>{
          console.log(err)
        })
      }

        return (
            <React.Fragment>
                {logout!=""?
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

                    <div className="ml-4 collapse navbar-collapse mb-3" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        { login!=null?
                            <li className="nav-item">
                                <Link to="/student/profile" className="nav-link text-white" href="#">Profile</Link>
                            </li>:<div></div>}
                            <li className="nav-item">
                                <Link to="/admissionform" className="nav-link text-white" href="#">Admission Form</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/student/admissions" className="nav-link text-white" href="#">Total Admissions</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/student/timetable" className="nav-link text-white" href="#">Time Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/student/announcements" className="nav-link text-white" href="#">Announcements</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Datesheet
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/student/datesheet" className="nav-link text-dark">Morning</Link>
                                <Link to="/student/datesheet2" className="nav-link text-dark">Evening</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Merit List
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/student/meritlist" className="nav-link text-dark">Morning</Link>
                                <Link to="/student/meritlist2" className="nav-link text-dark">Evening</Link>
                                </div>
                            </li>
                            { login!=null?
                                <>
                                    <li className="nav-item">
                                        <Link to="/student/reset/password" className="nav-link text-white" href="#">Change</Link>
                                    </li>
                                    <button className="btn btn-primary" onClick={Logout}>Logout</button>
                                </>
                                :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-white" href="#">Login</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
}

export default Header;
