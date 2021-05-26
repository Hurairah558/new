import React from 'react'
import './SideMenu_Design.css';
import {Link} from 'react-router-dom';
const SideMenu = () => {
    return (
        <React.Fragment>
            <input type="checkbox" id="check"/>
            <label id="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
                <header>My App</header>
                <ul>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><Link to="/hod/admissions"><i className="fas fa-link"></i>Admissions</Link></li>
                    <li><Link to="/hod/meritlist"><i className="fas fa-stream"></i>Merit List</Link></li>
                    <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
                    <li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
                    <li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SideMenu;