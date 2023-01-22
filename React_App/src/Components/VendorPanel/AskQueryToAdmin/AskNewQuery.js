import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const AskNewQuery=({id})=>{
    const [queryObj, setQueryObj] = useState({"queryByUserOrVed":"Vendor","queryUserOrVedId":id,"queryTo":"Admin","queryDiscription":"","replyStatus":"Pending","reply":"Nil"});
    const [queryErr,setQueryErr] = useState("*");
    const [navFlag,setNavFlag] = useState(false);
    const AddQueryToDB=()=>{
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(queryErr == ""){
            fetch('http://localhost:5276/api/Vendor/AskQuery',{
            method: 'POST',  
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(queryObj),
        }).then(response=>response.json()).then(setNavFlag(true)); 
        }
        else{
            alert("Empty Query would not be reply\nAsk Something!");
        }
    }
    const handleChange=(event)=> {
        const { name, value } = event.target;
        setQueryObj({ ...queryObj, [name]: value });
        let validation = queryErr;
        if(!value || value.length ===0){
            validation = "Required field";
        }
        else{
            validation = "";
        }
        setQueryErr(validation);
    }
    if(navFlag){
        return(<Navigate to="/ask-query" />);
    }
    return (<div>
        <div className="row">

            <div className="col-sm-7">
                <h2 style={{ textAlign: "start", marginTop: "50px" }}>Query to Admin</h2><br />
                <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                    <div className=" form-group row">
                        <div className="col-sm-2" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="cname" className="form-label">Query:</label>
                        </div>
                        <div className="col-sm-7">
                            <input value={queryObj.queryDiscription} className="form-control" required onChange={(e) => handleChange(e)} type="text" id="queryDiscription" name="queryDiscription" placeholder="Ask Query" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{queryErr}</p></div></div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8" style={{ textAlign: "start" }}>
                            <button type="submit" className="btn btn-success" style={{ width: "100px" }}>Ask</button>
                        </div>
                    </div><br />

                </form>
            </div>
            <div className="col-sm-5" style={{ textAlign: "center", minHeight: "500px" }}>
                <img src="/images/grocery_logo.png" width={"380px"} height={"270px"} alt="Logo" style={{ marginTop: "100px" }} />
            </div>
        </div>
    </div>);
}
export default AskNewQuery;