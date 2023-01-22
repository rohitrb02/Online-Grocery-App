import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import QueryCard from "./QueryCard";

const UsersQuery=()=>{
    const [queryList, setQueryList] = useState([]);
    
    const [navFlag, setNavFlag] = useState(false);
    
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetUsersQuery',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setQueryList(data))
    },[]);
    const QueryReplied=(qry,reply)=>{
        let QueryData = qry;
        QueryData.reply = reply;
        QueryData.replyStatus = "Replied";
        fetch('http://localhost:5276/api/Admin/ReplyQuery',{
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(QueryData),
        }).then(alert("Replied successfully")).then(setNavFlag(true));
    }
    if(navFlag){
        return(<Navigate to="/" />);
    }
    return(<div className='col main pt-5 mt-3'>
    <h2><b>Users Query</b></h2>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Query Id</th>
                <th scope="col">Users Name</th>
                <th scope="col">Discription</th>
                <th scope="col">Reply Status</th>
                <th scope="col">Action</th>

            </tr>
        </thead>
        <tbody>
            {queryList.map(q=><QueryCard key={q.queryId} Query={q}  QueryReplied={QueryReplied}/>)}
        </tbody>
    </table>

</div>);
}
export default UsersQuery;