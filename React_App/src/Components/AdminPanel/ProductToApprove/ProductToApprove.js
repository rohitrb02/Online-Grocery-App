import React, { useEffect, useState } from 'react';

import { UserDetails } from '../ManagerUser/UserDetails';
import ProductCards from './ProductCards';
import { Navigate } from 'react-router-dom';

export const ProductToApprove = () => {
  const [prodToApprove,setPrdApproval] = useState([]);
  const [categoryList,setCategoryList]  =useState([]);
  const [navFlag,setNavFlag] = useState(false);
  const ApproveFunction=(prd)=>{
    let productData = prd;
    productData.approvalStatus = "Approved";
    productData.approval_remark = "Product Approved";
    console.log(productData);
    if(window.confirm("Do you want to Approve the Product?")){
        fetch('http://localhost:5276/api/Admin/APproveProd',{
        method: 'PUT',  
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(productData),
        }).then(setNavFlag(true));
    }
}

const DiscardFunction=(prd,remark)=>{
    let productData = prd;
    productData.approvalStatus = "Discarded";
    productData.approval_remark = remark;
    if(window.confirm("Do you want to discard the Product?")){
        fetch('http://localhost:5276/api/Admin/APproveProd',{
        method: 'PUT',  
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(productData),
        }).then(setNavFlag(true));
    }
}
  useEffect(()=>{
    fetch('http://localhost:5276/api/Admin/ToApprove?approvalStatus=Pending',{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }).then(response=>response.json()).then(data=>setPrdApproval(data))
    .then(fetch('http://localhost:5276/api/Admin/GetAllCategories',{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }).then(response=>response.json()).then(data=>setCategoryList(data)));
  },[])
  if(navFlag){
    return(<Navigate to="/" />);
  }
  return (
    <div>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-sm-12" style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontWeight: "bolder", fontSize: "26px" }}>Product approval requests:</span>
        </div>
      </div><br />
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Vendor Name</th>
              <th scolpe="col">Verification</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {prodToApprove.map((p) => <ProductCards key = {p.productId} product={p} category={categoryList} ApproveFunction={ApproveFunction} DiscardFunction={DiscardFunction}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductToApprove;



