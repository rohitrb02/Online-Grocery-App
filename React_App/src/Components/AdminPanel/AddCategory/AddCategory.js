import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCards from "./CategoryCards";
const AddCategory=()=>{
    const [Existing,setExisting] = useState([]);
    useEffect(()=>{
        
        fetch('http://localhost:5276/api/Admin/GetAllCategories',{
            method:'GET',
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`,
            }
        }).then(response=>response.json()).then(data=>setExisting(data))
    },[]);
    return(<div>
        <div className="row" style={{marginTop:"50px"}}>
            <div className="col-sm-12" style={{display:"flex",justifyContent:"space-between"}}>
                <span style={{fontWeight:"bolder",fontSize:"26px"}}>Existing Categories:</span>
                <span><Link to="/AddNewCategory"><button className="btn btn-info">Add new Category</button></Link></span>
            </div>
        </div><br/>
        <div >
            <div className="row">
                {Existing.map((c)=><CategoryCards key={c.categoryId} category={c}/>)}
            </div>
        </div>
    </div>);
}
export default AddCategory;