import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {
    MDBNavbar,MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
const Header = () => {

    axios.defaults.withCredentials = true;

    const [login,setlogin] = useState(JSON.parse(localStorage.getItem("HOD")))

    const [isOpen, setisOpen] = useState(false)
      
      const toggleCollapse = () => {
        setisOpen(!isOpen);
      }

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


    if (login!=null){
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

        if (JSON.stringify(login).includes("Student")){
            return(
                <Redirect to="/student/profile" />
               )
        }
    
    
        if (JSON.stringify(login).includes("HOD")){
            return(
             <Redirect to="/hod/dashboard" />
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
                    <MDBNavLink to="/ssio/dashboard"><strong className="white-text"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></strong></MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2"><b>Students</b></span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem><MDBNavLink id="HeadLink" to="/ssio/students"><b>Morning</b></MDBNavLink></MDBDropdownItem>
                                <MDBDropdownItem><MDBNavLink id="HeadLink" to="/ssio/students2"><b>Evening</b></MDBNavLink></MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    {/* <MDBNavItem>
                        <MDBNavLink to="/ssio/freeinstructors"><b>Free Instructors</b></MDBNavLink>
                    </MDBNavItem> */}
                    <MDBNavItem>
                        <MDBNavLink to="/ssio/announcement"><b>Announcement</b></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/ssio/awardlists"><b>Award Lists</b></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/ssio/attendancelist"><b>Attendance Lists</b></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/ssio/password/reset"><b>Change Password</b></MDBNavLink>
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
                <Link to="/ssio/dashboard"><span className="lab la-accusoft text-white mt-2"></span> <span className="text-white">GMC Sialkot</span></Link>
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
            </nav> */}
        </React.Fragment>
    )
}

export default Header;