import React, { useEffect, useState } from "react";
import {Link, BrowserRouter as Router } from "react-router-dom";
import VendorLogin from "./VendorLogin";
import VendorRegister from "./VendorRegister";

const LoginMain=({VenderLoginClick})=>{
    const [currentForm, setCurrentForm] = useState("VendorLogin");
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return(
        <div style={{ marginTop:"20px"}}>
            {currentForm==="VendorLogin" ?<VendorLogin toggleForm={toggleForm} VenderLoginClick={VenderLoginClick} /> :<VendorRegister toggleForm={toggleForm}/>}
                
        </div>
    );
    

}
export default LoginMain;