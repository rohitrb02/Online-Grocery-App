import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QueryCard from "./QueryCard";

const AskQueryToAdmin=({id})=>{
    const[Existing, setExisting] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5276/api/Vendor/AllAskedQueries/'+id,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(response=>response.json()).then(data=>setExisting(data))
    },[]);
    return(<div>
        <div className="row" style={{marginTop:"50px"}}>
            <div className="col-sm-12" style={{display:"flex",justifyContent:"space-between"}}>
                  <h2>All Queries Asked by you:</h2>
                <span><Link to="/AddQuery"><button className="btn btn-info">Ask New Query</button></Link></span>
            </div>
        </div><br/>
        <div >
        <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Query Id</th>
              <th scope="col">Discription</th>
              <th scope="col">Reply Status</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {Existing.map((p) => <QueryCard key = {p.queryId} Query={p}/>)}
          </tbody>
        </table>
      </div>
        </div>
    </div>);
}
export default AskQueryToAdmin;