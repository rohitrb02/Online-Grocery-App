
import React from 'react'
import { Link } from 'react-router-dom';

export const VendorNavbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-success mb-3">

            <div className="flex-row d-flex">
                <button type="button" className="navbar-toggler mr-2 " data-bs-toggle="offcanvas" title="Toggle responsive left sidebar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href='/' className="navbar-brand"> Grocery Mania</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapsingNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home <span className="sr-only">Home</span></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        <a className="nav-link waves-effect waves-light text-white">
                            <img src='images\adminpic.png' width={30} height={30}></img>
                        </a>
                    </li>

                    <li className="nav-item">

                        <a className="nav-link waves-effect waves-light text-white">
                            <b> <p>Vendor Portal</p> </b>
                        </a>
                    </li>

                    {/* <li className="nav-item">
                  <a className="nav-link waves-effect waves-light text-white">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link waves-effect waves-light text-white">
                        <i className="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link waves-effect waves-light text-white">
                          <i className="fas fa-align-justify"></i>
                      </a>
                    </li> */}
                </ul>
            </div>

        </nav>
    )
}
export default VendorNavbar;