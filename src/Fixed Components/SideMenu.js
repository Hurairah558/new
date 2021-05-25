import React from 'react'
import './SideMenu_Design.css';
const SideMenu = () => {
    return (
        <React.Fragment>
            <div className="sidebar">
                
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="" className="active"><span className="las la-igloo"></span>
                                <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-users"></span><span>Students</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-clipboard-list"></span><span>Departments</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-shopping-bag"></span><span>Shift</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-receipt"></span><span>Student Info</span></a>
                        </li><li>
                            <a href=""><span className="las la-user-circle"></span><span>Accounts</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-clipboard-list"></span><span>Task</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideMenu;