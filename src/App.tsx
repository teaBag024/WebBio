// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import AboutMe from "./AboutMe.tsx";
import MyEducation from "./Education.tsx";
import WorkExp from "./WorkExp.tsx";
import Projects from "./Project.tsx";


function App() {
    return (
        <>
            <AboutMe/>

            <div className="container" id="navID">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navItem navbar-brand" href="#about-me">About Me</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="navItem nav-link" href="#projectID">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="navItem nav-link" href="#wExpID">Work Experience</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="navItem nav-link" aria-current="page"
                                               href="#educID">Education</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                    <div className="col-1"></div>

                </div>
            </div>


            <br/>
            <Projects/>
            <WorkExp/>
            <MyEducation/>


        </>
    )
}





export default App
