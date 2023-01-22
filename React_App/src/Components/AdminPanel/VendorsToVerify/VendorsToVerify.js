import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import VendorTable from "./VendorTable";
const VendorsToVerify=()=>{
    const [ToVerify,setToVerify]= useState([]);
    const [open, setOpen] = React.useState(false);
    const [navFlag,setNavFlag] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const ApproveFunction=(vdr)=>{
        let vendorData = vdr;
        vendorData.verification = "Approved";
        console.log(vendorData);
        if(window.confirm("Do you want to Approve the Verification?")){
            fetch('http://localhost:5276/api/Admin/VerifyVendor',{
            method: 'PUT',  
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(vendorData),
            }).then(handleClose()).then(setNavFlag(true));
        }
    }
    
    const DiscardFunction=(vdr)=>{
        let vendorData = vdr;
        vendorData.verification = "Discarded";
        if(window.confirm("Do you want to discard the Vendor?")){
            fetch('http://localhost:5276/api/Admin/VerifyVendor',{
            method: 'PUT',  
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(vendorData),
            }).then(handleClose()).then(setNavFlag(true));
        }
    }
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/VendorsToVerify?verification=Pending',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setToVerify(data));
    },[])
    if(navFlag){
        return (<Navigate to="/" />);
    }
    return(<div className='col main pt-5 mt-3'>
    <h2><b>Vendors To Verify</b></h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Vendor Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scolpe="col">Verification</th>
          <th scope="col">Action</th>

        </tr>
      </thead>
      <tbody>
        {ToVerify.map((v)=><VendorTable vendor={v} ApproveFunction={ApproveFunction} DiscardFunction={DiscardFunction} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}/>)}
      </tbody>
    </table>



  </div>
);
}
export default VendorsToVerify;