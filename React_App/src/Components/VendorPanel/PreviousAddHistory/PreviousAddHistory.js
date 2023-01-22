import React, { useEffect, useState } from 'react'
import ProductDisplay from './ProductDisplay';

export const PreviousAddHistory = ({id}) => {
  const [Existing, setExisting] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5276/api/Vendor/ProductHistory/' + id,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => response.json()).then(data => setExisting(Existing => [...Existing, ...data])).then(
      fetch('http://localhost:5276/api/Vendor/DiscardedProdList/' + id,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => response.json()).then(data => setExisting(Existing => [...Existing, ...data])).then(
        fetch('http://localhost:5276/api/Vendor/ProdYetToApprove/' + id,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(response => response.json()).then(data => setExisting(Existing => [...Existing, ...data]))
      )
    ) 
  }, []);
  return (<div style={{marginTop:"50px"}}>
    <h2>Product Add History Records:</h2>
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
            {Existing.map((p) => <ProductDisplay key={p.productId} product={p} />)}
          </tbody>
        </table>
      </div>
    </div>);
}
