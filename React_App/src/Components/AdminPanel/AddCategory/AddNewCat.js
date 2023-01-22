import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const AddNewCat=()=>{
    const [catObj, setCatObj] = useState({"categoryName":"","categoryImage":""});
    const [navFlag,setNavFlag] = useState(false);
    const AddCategoryToDB=()=>{
        fetch('http://localhost:5276/api/Admin/AddCategory',{
            method: 'POST',  
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(catObj),
        }).then(response=>response.json()).then(setNavFlag(true));
    }
    if(navFlag){
        return(<Navigate to="/add-category" />);
    }
    return (<div>
        <div className="row">

            <div className="col-sm-6">
                <h2 style={{ textAlign: "center", marginTop: "50px" }}>Add New Category</h2><br />
                <form className="form" onSubmit={AddCategoryToDB}>
                    <div className=" form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="cname" className="form-label">Category Name</label>
                        </div>
                        <div className="col-sm-8">
                            <input value={catObj.categoryName} className="form-control" required onChange={(e) => setCatObj({...catObj,"categoryName":e.target.value})} type="text" id="cname" name="cname" placeholder="Enter the category name" />
                        </div>
                    </div><br />
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="cimage" className="form-label">Category Image:</label>
                        </div>
                        <div className="col-sm-8">
                            <input value={catObj.categoryImage} className="form-control" required onChange={(e) => setCatObj({...catObj,"categoryImage":e.target.value})} type="url" id="cimage" name="cimage" placeholder="Give Url of image" />
                        </div>
                    </div><br />
                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8" style={{ textAlign: "start" }}>
                            <button type="submit" className="btn btn-success" style={{ width: "100px" }}>Add</button>
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
export default AddNewCat;