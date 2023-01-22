import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ProductsTable from "./ProductsTable";

const OfferDiscount=()=>{
    const [categoryList,setCategoryList] = useState([]);
    const [productList,setproductList] = useState([]);
    const [dispTbl, setDispTbl] = useState({display:"none"});
    const [navFlag, setNavFlag] = useState(false);
    const ProdByCategory=(event)=>{
        let id = event.target.value;
        console.log(id);
        fetch('http://localhost:5276/api/Admin/GetProductByCategory/'+id,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(response=>response.json()).then(data=>setproductList(data)).then(setDispTbl({display:""}));
    }
    const UpdateDiscountFunction=(prd,discount)=>{
      let product = prd;
      product.discount = discount;
      fetch('http://localhost:5276/api/Admin/UpdateDiscount',{
        method:'PUT',
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(product),
      }).then(alert("Discount Updated successfully")).then(setNavFlag(true));
    }
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetAllCategories',{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(response=>response.json()).then(data=>setCategoryList(data));
    },[]);
    if(navFlag){
      return(<Navigate to="/" />);
    }
    return (<div>
        <div className="row" style={{marginTop:"50px"}}>
        <form className="form" >
        <select className="form-select" name="category" aria-label="Default select example" onChange={(e)=>ProdByCategory(e)}>
                <option defaultValue>Select Category</option>
                {categoryList.map((element)=>
                    <option value={element.categoryId} > {element.categoryName}</option>
                )}
                
        </select>
        </form>
        </div>
        <div style={dispTbl}>
        <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Product Id</th>
          <th scope="col">Product Name</th>
          <th scope="col">Vendor Name</th>
          <th scope="col">Price</th>
          <th scope="col">Unit Quantity</th>
          <th scolpe="col">Discount(%)</th>
          <th scope="col">Action</th>

        </tr>
      </thead>
      <tbody>
        {productList.map((p)=><ProductsTable key={p.productId} product={p}  UpdateDiscountFunction={UpdateDiscountFunction}/>)}
      </tbody>
    </table>
        </div>
    </div>)
}
export default OfferDiscount;