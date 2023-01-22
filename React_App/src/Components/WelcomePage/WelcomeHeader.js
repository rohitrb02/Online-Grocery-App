import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";
const WelcomeHeader=()=>{
    return(<div style={{borderBottom:"2px solid black"}}>

        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link to="/" ><span className="navbar-brand multicolortext" style={{marginLeft:"100px",fontSize:"xx-large",fontWeight:"650", fontFamily:"serif", backgroundImage:"linear-gradient(to left,#57ed49,#0f8005)",color:"transparent",backgroundClip:"text"}}>Grocery Mania</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"200px",padding: "5px"}}>
                <ul id="a1WelcomeHeader" className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/" style={{textDecoration:"none"}}><li className="nav-item nav-link" >Home</li></Link>
                    <Link to="/Category" style={{textDecoration:"none"}}><li className="nav-item nav-link">Categories</li></Link>
                    <Link to="/CustomerSupport" style={{textDecoration:"none"}}><li className="nav-item nav-link">Customer Support</li></Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                        <ul className="dropdown-menu">
                        <Link to="/VendorLogin" style={{textDecoration:"none",color:"black"}}><li className="dropdown-item" >For Vendor</li></Link>
                            <li><hr className="dropdown-divider"/></li>
                            <Link to="/AdminLogin" style={{textDecoration:"none",color:"black"}}><li className="dropdown-item">For Admin</li></Link>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

    </div>);
}
export default WelcomeHeader;