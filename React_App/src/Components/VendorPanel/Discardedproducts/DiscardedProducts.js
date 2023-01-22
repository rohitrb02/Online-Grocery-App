import React, { useEffect, useState } from 'react';
import DisplyCard from './DisplayCard';

export const DiscardedProducts = ({id}) => {
  const [Existing, setExisting] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5276/api/Vendor/DiscardedProdList/' + id,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => response.json()).then(data => setExisting(data));
  }, []);
  return (<div style={{marginTop:"50px"}}>
    <h2>Discarded Products:</h2>
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
            {Existing.map((p) => <DisplyCard key={p.productId} product={p} />)}
          </tbody>
        </table>
      </div>
    </div>);

  }
