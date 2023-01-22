import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export const AddProduct = ({id}) => {
    const[Existing, setExisting] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5276/api/Vendor/ProductHistory/'+id,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(response=>response.json()).then(data=>setExisting(Existing=>[...Existing,...data])).then(
            fetch('http://localhost:5276/api/Vendor/DiscardedProdList/'+id,{
              headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
              }
            }).then(response=>response.json()).then(data=>setExisting(Existing=>[...Existing,...data])).then(
                fetch('http://localhost:5276/api/Vendor/ProdYetToApprove/'+id,{
                  headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                  }
                }).then(response=>response.json()).then(data=>setExisting(Existing=>[...Existing,...data]))
            )
        )
    },[]);
    return(<div>
        <div className="row" style={{marginTop:"50px"}}>
            <div className="col-sm-12" style={{display:"flex",justifyContent:"space-between"}}>
                <span style={{fontWeight:"bolder",fontSize:"26px"}}>All Products by you:</span>
                <span><Link to="/AddNewProduct"><button className="btn btn-info">Add new Product</button></Link></span>
            </div>
        </div><br/>
        <div >
        <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Price</th>
              <th scope="col">Unit Quantity</th>
              <th scolpe="col">Approval Status</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {Existing.map((p) => <ProductCard key = {p.productId} product={p}/>)}
          </tbody>
        </table>
      </div>
        </div>
    </div>);
}
