import React,{useState,useEffect} from 'react';
import {Link ,Redirect,Route} from 'react-router-dom';
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
    
        if (JSON.stringify(login).includes("SSIO")){
            return(
                <Redirect to="/ssio/dashboard" />
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
            {logout!=""?
                <Redirect to="/login" />:
                <div></div>
            }
            <MDBNavbar style={{marginBottom:-60}} className="sticky-top" color="blue" dark expand="md">
            <MDBNavbarBrand>
                <MDBNavLink to="/"><strong className="white-text"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></strong></MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
                { login!=null?
                <MDBNavItem>
                    <MDBNavLink to="/student/profile"><b>Profile</b></MDBNavLink>
                </MDBNavItem>:<div></div>}
                <MDBNavItem>
                    <MDBNavLink to="/admissionform"><b>Admission Form</b></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/student/timetable"><b>Time Table</b></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/student/announcements"><b>Announcements</b></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span className="mr-2"><b>Datesheet</b></span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/student/datesheet"><b>Morning</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/student/datesheet2"><b>Evening</b></MDBNavLink></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span className="mr-2"><b>Merit List</b></span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/student/meritlist"><b>Morning</b></MDBNavLink></MDBDropdownItem>
                            <MDBDropdownItem><MDBNavLink id="HeadLink" to="/student/meritlist2"><b>Evening</b></MDBNavLink></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                { login!=null?
                <MDBNavItem>
                    <MDBNavLink to="/student/reset/password"><b>Change Password</b></MDBNavLink>
                </MDBNavItem>:
                <MDBNavItem>
                    <MDBNavLink to="/login"><b>Login</b></MDBNavLink>
                </MDBNavItem>}
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
        </React.Fragment>
    )
}
export default Header;
