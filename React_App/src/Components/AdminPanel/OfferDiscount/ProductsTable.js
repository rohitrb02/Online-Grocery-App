import React, { useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const ProductsTable=({product, UpdateDiscountFunction})=>{
    const [vendorName,setVendorName] = useState("");
    const [discountOpt, setDiscountOpt] = useState({display:"none"});
    const [discount,setDiscount] = useState(0);
    const [discountErr, setDiscountErr] = useState("*");
    const [buttonTwo, setButtonTwo] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDiscountOpen = () => {
        setDiscountOpt({display:""});
        setButtonTwo(true);
    };
    const discountChange=(event)=>{
        const { name, value } = event.target;
        setDiscount( value );
        let Err = discountErr;
        if(!value || value.length === 0){
            Err = "Required field";
        }
        else{
            Err = "";
        }
        setDiscountErr(Err);
    }
    const updateDiscount=(e)=>{
        e.preventDefault();
        let err = discountErr;
        if(err == ""){
            UpdateDiscountFunction(product,discount);
        }
        else{
            alert("Please provide a discount value!");
        }
    }
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetVendorById/'+product.vendorId,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response=>response.json()).then(data=>setVendorName(data.firstName+" " + data.lastName))
     },[]);
    return(<tr>
        <th scope="row">{product.productId}</th>
        <td>{product.name}</td>
        <td>{vendorName}</td>
        <td>{product.price}</td>
        <td>{product.unitQuantity}</td>
        <td>{product.discount}</td>
        <td>
            <Button className='btn btn-primary' variant="contained"
                color="primary" onClick={handleClickOpen}>
                Update Discount
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Products Detail</DialogTitle>
                <DialogContent>
                    <div className="mb-12">
                        <hr />
                        <div>
                        <div className="row">
                                <div className="col"><img src={product.image} className="card-img-top" style={{width:"200px",margin:"auto", border:"2px solid black", borderRadius:"3px"}} height={"200px"} alt="category image"/></div>
                                
                            </div><hr/>
                            <div className="row">
                                <div className="col">Product Id</div>
                                <div className="col">{product.productId}</div>
                            </div>
                            <div className="row">
                                <div className="col">Product Name</div>
                                <div className="col">{product.name}</div>
                            </div>
                            <div className="row">
                                <div className="col">Vendor Name</div>
                                <div className="col">{vendorName}</div>
                            </div>
                            <div className="row">
                                <div className="col">Country Of Origin</div>
                                <div className="col">{product.countryOfOrigin}</div>
                            </div>
                            <div className="row">
                                <div className="col">Discription</div>
                                <div className="col">{product.discription}</div>
                            </div>
                            <div className="row">
                                <div className="col">Ingredients</div>
                                <div className="col">{product.ingredients}</div>
                            </div>
                            <div className="row">
                                <div className="col">Price</div>
                                <div className="col">{product.price}</div>
                            </div>
                            <div className="row">
                                <div className="col">Unit Quantity</div>
                                <div className="col">{product.unitQuantity}</div>
                            </div>
                            <div className="row">
                                <div className="col">Quantity</div>
                                <div className="col">{product.quantity}</div>
                            </div>
                            <div className="row">
                                <div className="col">Discount(%)</div>
                                <div className="col">{product.discount}</div>
                            </div>
                        </div>
                        <div className="row" style={discountOpt}>
                            <form className="form" onSubmit={updateDiscount}>
                            <div className="row">
                                <div className="col-md-5">
                                <label for="discount" className="form-label">Update Discount(%):</label>
                                </div>
                                <div className="col-md-5">
                                <input type="number" value={discount} name="discount" id="discount" onChange={(e)=>discountChange(e)} className="form-control" />
                                </div>
                                <div style={{color:'red'}} className="col-md-2"> <p>{discountErr}</p></div>
                            </div>
                                <button type="submit" style={{backgroundColor:"blue", color:"white"}} className="btn btn-sucess" >Update</button>
                            </form>
                        </div>
                    </div>
                    
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" disabled={buttonTwo} color="secondary" onClick={()=>handleDiscountOpen()}>
                        Update Discount
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </td>
    </tr>);
}
export default ProductsTable;