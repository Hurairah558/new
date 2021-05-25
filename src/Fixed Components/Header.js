import React from 'react';
import './SideMenu_Design.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h2>
                    <span className="lab la-accusoft"></span> <span>GMS Sialkot</span>
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
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;
