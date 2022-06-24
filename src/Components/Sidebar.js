import React, { Component } from 'react';
import image from '../Assets/profile.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.sidebarData = props.sidebarData;
    }
    //dasd

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#skills">Technical Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#awards">Certifications</a>
                        </li>
                    </ul>
                </div>

                <div className="social-icons">
                        <a href={this.sidebarData.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={this.sidebarData.github} >
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                </div>
                <br></br><br></br><br>
                </br>
            </nav>
        );
    }
}

export default Sidebar;
