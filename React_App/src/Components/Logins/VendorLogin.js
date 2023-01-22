import React, { useState } from "react";

const VendorLogin=({toggleForm, VenderLoginClick})=>{
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [invalid, setInvalid] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5276/api/Vendor/LogIn',{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username:email,password:password})
        }).then(response=>response.json()).then(data=>VenderLoginClick(data,email));
    }
    return (
        <div >
            
            <div className="row">
            
            <div className="col-sm-6">
            <h2 style={{textAlign:"center", marginTop:"50px"}}>Vendor Login</h2><br/>
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-4" style={{textAlign:"start",paddingLeft:"30px",fontSize:"23px"}}>
                        <label htmlFor="email" className="form-label">Email Address :</label>
                    </div>
                    <div className="col-sm-8">
                        <input value={email} className="form-control" required onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter the Email id" />
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-4" style={{textAlign:"start",paddingLeft:"30px",fontSize:"23px"}}>
                        <label htmlFor="password" className="form-label">Password :</label>
                    </div>
                    <div className="col-sm-8">
                        <input value={password} className="form-control" required onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" placeholder="********" />
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8" style={{textAlign:"start"}}>
                        <button type="submit" className="btn btn-success" style={{width:"100px"}}>Sign In</button>
                    </div>
                </div><br/>
                    
            </form>
            <div className="row"  >
                <div className="col-sm-2"></div>
                <div className="col-sm-4" style={{ textAlign:"right"}} >
                <p style={{paddingTop:"7px"}}>Don't have an account?</p>
                </div>
                <div className="col-sm-6" style={{ textAlign:"left" }}>
                <button className=" btn btn-link" onClick={() => toggleForm("VendorRegistor")}> Register here.</button>
                </div>
            </div>
            </div>
            <div className="col-sm-6" style={{textAlign:"center",minHeight:"500px"}}>
                <img src="/images/grocery_logo.png" width={"380px"} height={"270px"} alt="Logo" style={{marginTop:"100px"}}/>
            </div>
            </div>
        </div>);
}
export default VendorLogin;