import React, { useState } from "react";

const AdminLogin=({AdminLoginClick})=>{
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5276/api/Admin/Login',{
            method:'POST',
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username:userName,password:pass})
        }).then(response=>response.json()).then(
            data=>AdminLoginClick(data)
        );
    }
    return (<div>
        <div className="row">

            <div className="col-sm-6">
                <h2 style={{ textAlign: "center", marginTop: "50px" }}>Admin Login</h2><br />
                <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px", fontSize: "23px" }}>
                            <label htmlFor="userName" className="form-label">Username :</label>
                        </div>
                        <div className="col-sm-8">
                            <input value={userName} className="form-control" required onChange={(e) => setUserName(e.target.value)} type="text" id="userName" name="userName" placeholder="Enter the username" />
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px", fontSize: "23px" }}>
                            <label htmlFor="password" className="form-label">Password :</label>
                        </div>
                        <div className="col-sm-8">
                            <input value={pass} className="form-control" required onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" placeholder="********" />
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8" style={{ textAlign: "start" }}>
                            <button type="submit" className="btn btn-success" style={{ width: "100px" }}>Sign In</button>
                        </div>
                    </div><br />

                </form>
            </div>
            <div className="col-sm-6" style={{ textAlign: "center", minHeight: "500px" }}>
                <img src="/images/grocery_logo.png" width={"380px"} height={"270px"} alt="Logo" style={{ marginTop: "100px" }} />
            </div>
        </div>
    </div>);
}
export default AdminLogin;