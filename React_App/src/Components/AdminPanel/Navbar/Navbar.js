import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-success mb-3">
            <div className="flex-row d-flex">
                <a className="navbar-brand" href="/" style={{ fontWeight: "bolder", fontSize: "25px", }} title="Free Bootstrap 4 Admin Template">Grocery Mania</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapsingNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">Home</span></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li> */}
                    <li className="nav-item">

                        <a className="nav-link waves-effect waves-light text-white">
                            <img src='images\adminpic.png' width={30} height={30}></img>
                        </a>
                    </li>

                    <li className="nav-item">

                        <a className="nav-link waves-effect waves-light text-white">
                           <b> <p>Admin Portal</p> </b>
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
export default Navbar