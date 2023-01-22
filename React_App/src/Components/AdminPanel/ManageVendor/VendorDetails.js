import React from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export const VendorDetails = ({vendor, handleClickOpen, handleClose, open, DeleteVendor}) => {
  return(<tr>
    
    <td>{vendor.vendorId}</td>
    <td>{vendor.firstName} {vendor.lastName}</td>
    <td>{vendor.email}</td>
    <td>{vendor.mobile}</td>
    <td>{vendor.address}</td>
    <td>{vendor.gstNo}</td>

    <td>
        <Button className='btn btn-primary' variant="contained"
            color="primary" onClick={()=>handleClickOpen(vendor)}>
            View
        </Button>
    </td>
    
</tr>);
}
