import React, { useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const ProductCards=({product, category, ApproveFunction, DiscardFunction})=>{
    const [categoryName,setCategoryName] = useState("--");
    const [vendorName,setVendorName] = useState("");
    const [open, setOpen] = React.useState(false);
    const [RemarkOpt, setRemarkOpt] = useState({display:"none"});
    const [remark,setRemark] = useState("");
    const [remarkErr, setRemarkErr] = useState("*");
    const [buttonTwo, setButtonTwo] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleRemarkOpen = () => {
        setRemarkOpt({display:""});
        setButtonTwo(true);
    };
    const handleRemarkClose = () => {
        setRemarkOpt({display:"none"});
    };
    
    const remarkChange=(event)=>{
        const { name, value } = event.target;
        setRemark( value );
        let Err = remarkErr;
        if(!value || value.length === 0){
            Err = "Required field";
        }
        else{
            Err = "";
        }
        setRemarkErr(Err);
    }
    const remarkSubmit=(e)=>{
        e.preventDefault();
        let err = remarkErr;
        if(err == ""){
            DiscardFunction(product,remark);
        }
        else{
            alert("Please specify a reason!");
        }
    }
     useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetVendorById/'+product.vendorId,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response=>response.json()).then(data=>setVendorName(data.firstName+" " + data.lastName)).then(category.forEach(element => {
            if(element.categoryId==product.categoryId){
                setCategoryName(element.categoryName)
            }}))
     },[]);
    
    return(
        <tr>
        <th scope="row">{product.productId}</th>
        <td>{product.name}</td>
        <td>{categoryName}</td>
        <td>{vendorName}</td>
        <td><span className="badge badge-danger">Pending</span></td>
        <td>
            <Button className='btn btn-primary' variant="contained"
                color="primary" onClick={handleClickOpen}>
                View
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Product's Detail</DialogTitle>
                <DialogContent>
                    <div className="mb-12">
                        <hr />
                        <div>
                        <div className="row">
                                <div className="col"><img src={product.image} className="card-img-top" style={{width:"200px",margin:"auto", border:"2px solid black", borderRadius:"3px"}} height={"200px"} alt="category image"/></div>
                                
                            </div>
                            <div className="row">
                                <div className="col">Name</div>
                                <div className="col">{product.name}</div>
                            </div>
                            <div className="row">
                                <div className="col">Category</div>
                                <div className="col">{categoryName}</div>
                            </div>
                            <div className="row">
                                <div className="col">Vendor Name</div>
                                <div className="col">{vendorName}</div>
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
                        </div>
                        <div className="row" style={RemarkOpt}>
                            <form className="form" onSubmit={remarkSubmit}>
                            <div className="row">
                                <div className="col-md-5">
                                <label for="remark" className="form-label">Reason for discarding:</label>
                                </div>
                                <div className="col-md-5">
                                <input type="text" value={remark} name="remark" id="remark" onChange={(e)=>remarkChange(e)} className="form-control" />
                                </div>
                                <div style={{color:'red'}} className="col-md-2"> <p>{remarkErr}</p></div>
                            </div>
                            <button type="submit" className="btn btn-danger" >Done</button>
                            </form>
                        </div>
                    </div>
                    
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" disabled={buttonTwo} style={{backgroundColor:"green"}} color='success' onClick={()=>ApproveFunction(product)} >
                        Approve
                    </Button>
                    <Button variant="contained" disabled={buttonTwo} style={{backgroundColor:"red"}} onClick={()=>handleRemarkOpen()}>
                        Discard
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </td>
    </tr>
    );
}
export default ProductCards;

