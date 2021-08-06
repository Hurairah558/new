import React, { useState , useEffect} from 'react';
import './SideMenu_Design.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {
    MDBNavbar,MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

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
    },[]);


    const Logout = () => {
        localStorage.removeItem("HOD")
        setlogin(JSON.parse(localStorage.getItem("HOD")))
        axios.post("http://localhost:3001/logout").then((res)=>{
            })
        .catch((err)=>{
          console.log(err)
        })
      }

      const [isOpen, setisOpen] = useState(false)
      
      const toggleCollapse = () => {
        setisOpen(!isOpen);
      }

      if(login==null){
        return <Redirect to="/login"/>;
    }
    else{
            if (JSON.stringify(login).includes("AO")){
                return(
                    <Redirect to="/ao/dashboard" />
                   )
            }
        
            if (JSON.stringify(login).includes("Teacher")){
                return(
                    <Redirect to="/instructor/home" />
                   )
            }
        
            if (JSON.stringify(login).includes("RO")){
                return(
                    <Redirect to="/ro/dashboard" />
                   )
            }
        
            if (JSON.stringify(login).includes("SSIO")){
                return(
                    <Redirect to="/ssio/dashboard" />
                   )
            }
        
            if (JSON.stringify(login).includes("Student")){
                return(
                    <Redirect to="/student/profile" />
                   )
            }
    }

    

    return (
        <React.Fragment>
            {login==null?
            <Redirect to="/login" />:
            <div></div>
            }
            <MDBNavbar style={{marginBottom:-60}} className="sticky-top" color="blue" dark expand="md">
                <MDBNavbarBrand>
                    <MDBNavLink to="/hod/dashboard"><strong className="white-text"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></strong></MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/hod/students"><b>Students</b></MDBNavLink>
                    </MDBNavItem>
                        <MDBNavItem>
                    <MDBNavLink to="/hod/timetablegenerate"><b>Time Table Generate</b></MDBNavLink>
                        </MDBNavItem>
                    <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                        <span className="mr-2"><b>Datesheet</b></span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                        <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/datesheet"><b>Morning</b></MDBNavLink></MDBDropdownItem>
                        <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/datesheet2"><b>Evening</b></MDBNavLink></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <span className="mr-2"><b>Merit List</b></span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/meritlistcontroller"><b>Morning</b></MDBNavLink></MDBDropdownItem>
                                <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/meritlistcontroller2"><b>Evening</b></MDBNavLink></MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                        <span className="mr-2"><b>More</b></span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/awardlists"><b>Award Lists</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/attendancelist"><b>Attendance Lists</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/addstudent"><b>Add Students</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/admissions"><b>Fresh Admissions</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/adp"><b>ADP Admissions</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/addinstructor"><b>Add Instructors</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/addcourses"><b>Add Courses</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/assigncourses"><b>Assign Courses</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/awardlist"><b>Upload Award List</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/attendance"><b>Upload Attendance List</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/hod/password/reset"><b>Change Password</b></MDBNavLink></MDBDropdownItem>
                            {/* <Link   to="/hod/timetablegenerate" class="dropdown-item" href="#">Time Table Generate</Link>
                                        <Link   to="/hod/awardlists" class="dropdown-item" href="#">AwardLists</Link>
                                        <Link   to="/hod/attendancelist" class="dropdown-item" href="#">Attendance Lists</Link>
                                        <Link   to="/hod/addstudent" class="dropdown-item" href="#">Add Student</Link>
                                        <Link   to="/hod/admissions" class="dropdown-item" href="#">Admissions</Link>
                                        <Link   to="/hod/addinstructor" class="dropdown-item" href="#">Add Instructor</Link>
                                        <Link   to="/hod/addcourses" class="dropdown-item" href="#">Add Courses</Link>
                                        <Link   to="/hod/password/reset" class="dropdown-item" href="#">Change Password</Link>
                                        <Link   to="/hod/assigncourses" class="dropdown-item" href="#">Assign Courses</Link>
                                        <Link   to="/hod/awardlist" class="dropdown-item" href="#">Upload Award List</Link>
                                        <Link   to="/hod/attendance" class="dropdown-item" href="#">Upload Attendance</Link> */}
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                    { login!=null?
                        <MDBBtn gradient="peach"  onClick={Logout}><b>Logout</b></MDBBtn>
                                :
                                <div></div>
                            }
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            {/* <nav id="header" className="position-fixed sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <h2>
                <Link to="/hod/dashboard"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></Link>
                </h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white navbar-toggler-icon"></span>
                </button>

                <div className="ml-4 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/hod/students" className="nav-link text-white" href="#">Students</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/hod/timetablegenerate" className="nav-link text-white" href="#">Time Table Generate</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/awardlists" className="nav-link text-white" href="#">AwardLists</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/attendancelist" className="nav-link text-white" href="#">Attendance Lists</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/addstudent" className="nav-link text-white" href="#">Add Student</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/admissions" className="nav-link text-white" href="#">Admissions</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/addinstructor" className="nav-link text-white" href="#">Add Instructor</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/addcourses" className="nav-link text-white" href="#">Add Courses</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/password/reset" className="nav-link text-white" href="#">Change</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/assigncourses" className="nav-link text-white" href="#">Assign Courses</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link to="/hod/awardlist" className="nav-link text-white" href="#">Award List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hod/attendance" className="nav-link text-white" href="#">Attendance Upload</Link>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Datesheet
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/hod/datesheet" className="nav-link text-dark"> Morning </Link>
                            <Link to="/hod/datesheet2" className="nav-link text-dark"> Evening </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Merit List Controller
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/hod/meritlistcontroller" className="nav-link text-dark"> Morning </Link>
                            <Link to="/hod/meritlistcontroller2" className="nav-link text-dark"> Evening </Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link   to="/hod/timetablegenerate" class="dropdown-item" href="#">Time Table Generate</Link>
                                <Link   to="/hod/awardlists" class="dropdown-item" href="#">AwardLists</Link>
                                <Link   to="/hod/attendancelist" class="dropdown-item" href="#">Attendance Lists</Link>
                                <Link   to="/hod/addstudent" class="dropdown-item" href="#">Add Student</Link>
                                <Link   to="/hod/admissions" class="dropdown-item" href="#">Admissions</Link>
                                <Link   to="/hod/addinstructor" class="dropdown-item" href="#">Add Instructor</Link>
                                <Link   to="/hod/addcourses" class="dropdown-item" href="#">Add Courses</Link>
                                <Link   to="/hod/password/reset" class="dropdown-item" href="#">Change Password</Link>
                                <Link   to="/hod/assigncourses" class="dropdown-item" href="#">Assign Courses</Link>
                                <Link   to="/hod/awardlist" class="dropdown-item" href="#">Upload Award List</Link>
                                <Link   to="/hod/attendance" class="dropdown-item" href="#">Upload Attendance</Link>
                            </div>
                        </li>
                        { login!=null?
                        <button className="btn btn-primary" onClick={Logout}>Logout</button>
                        :
                        <div></div>
                    }
                    </ul>
                </div>
            </nav> */}
        </React.Fragment>
    )
}
export default Header;