import React, { useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const ProductCard=({product})=>{
    const [categoryName,setCategoryName] = useState("--");
    const [open, setOpen] = React.useState(false);
    const [colorClass, setColorClass] = useState("badge badge-success");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const CallOfCondition=()=>{
        if(product.approvalStatus=="Pending"){
            setColorClass("badge badge-warning");
        }
        else if(product.approvalStatus=="Approved"){
            setColorClass("badge badge-success");
        }
        else{
            setColorClass("badge badge-danger")
        }
    }
    useEffect(()=>{
        fetch('http://localhost:5276/api/Vendor/GetAllCategories',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(
            data=>data.forEach(element => {
                if(element.categoryId==product.categoryId){
                    setCategoryName(element.categoryName);
                }
            })
        ).then(CallOfCondition());
    },[]);
    
    return(
        <tr>
        <th scope="row">{product.productId}</th>
        <td>{product.name}</td>
        <td>{categoryName}</td>
        <td>{product.price}</td>
        <td>{product.unitQuantity}</td>
        <td><span className={colorClass}>{product.approvalStatus}</span></td>
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
                                <div className="col"><b>Name</b></div>
                                <div className="col"><b>{product.name}</b></div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Category</b></div>
                                <div className="col">{categoryName}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Discription</b></div>
                                <div className="col">{product.discription}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Ingredients</b></div>
                                <div className="col">{product.ingredients}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Price</b></div>
                                <div className="col">{product.price}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Unit Quantity</b></div>
                                <div className="col">{product.unitQuantity}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Quantity</b></div>
                                <div className="col">{product.quantity}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Discount(%)</b></div>
                                <div className="col">{product.discount}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Approval status</b></div>
                                <div className="col">{product.approvalStatus}</div>
                            </div>
                            <div className="row">
                                <div className="col"><b>Approval Remark</b></div>
                                <div className="col">{product.approval_remark}</div>
                            </div>
                        </div>
                    </div>
                    
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </td>
    </tr>
    );
}
export default ProductCard;

