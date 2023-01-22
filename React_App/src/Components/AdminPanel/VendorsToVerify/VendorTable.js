import React  from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const VendorTable=({vendor, ApproveFunction, DiscardFunction, handleClickOpen, handleClose, open})=>{
    
    return(<tr>
        <th scope="row">{vendor.vendorId}</th>
        <td>{vendor.firstName}</td>
        <td>{vendor.lastName}</td>
        <td>{vendor.email}</td>
        <td><span className="badge badge-danger">Pending</span></td>
        <td>
            <Button className='btn btn-primary' variant="contained"
                color="primary" onClick={handleClickOpen}>
                View
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Vendor's Detail</DialogTitle>
                <DialogContent>
                    <div className="mb-12">
                        <hr />
                        <div>
                            <div className="row">
                                <div className="col">Name</div>
                                <div className="col">{vendor.firstName} {vendor.lastName}</div>
                            </div>
                            <div className="row">
                                <div className="col">Email address</div>
                                <div className="col">{vendor.email}</div>
                            </div>
                            <div className="row">
                                <div className="col">Phone number</div>
                                <div className="col">{vendor.mobile}</div>
                            </div>
                            <div className="row">
                                <div className="col">Address</div>
                                <div className="col">{vendor.address}</div>
                            </div>
                            <div className="row">
                                <div className="col">GST Number</div>
                                <div className="col">{vendor.gstNo}</div>
                            </div>
                            <div className="row">
                                <div className="col">Addhar Number</div>
                                <div className="col">{vendor.addaharNo}</div>
                            </div>
                            <div className="row">
                                <div className="col">PAN</div>
                                <div className="col">{vendor.pan}</div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" style={{backgroundColor:"green"}} color='success' onClick={()=>ApproveFunction(vendor)} >
                        Approve
                    </Button>
                    <Button variant="contained" style={{backgroundColor:"red"}} onClick={()=>DiscardFunction(vendor)}>
                        Discard
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </td>
    </tr>);
}
export default VendorTable;