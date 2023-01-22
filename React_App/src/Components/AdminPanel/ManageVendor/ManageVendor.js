import React, { useEffect, useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { VendorDetails } from './VendorDetails';

export const ManagerVendor = () => {
    const [open, setOpen] = React.useState(false);
    const [vendorList, setVendorList] = useState([]);
    const [dialVendor, setDialVendor] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetAllVendors',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setVendorList(data));
    },[]);
    const handleClickOpen = (vendor) => {
        setDialVendor({...vendor});
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const DeleteVendor=(vendor)=>{
        if(window.confirm("Sure to delete this vendor?")){
        fetch('http://localhost:5276/api/Admin/Deletevendor',{
            method: 'DELETE',  
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(vendor),
        }).then(handleClose);
    }
    }
    return (
        <div className='col main pt-5 mt-3'>
            <h2><b>Manager Vendors</b></h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Vendor Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile.no </th>
                        <th scope="col">Address</th>
                        <th scope="col">GST No</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {vendorList.map(v=><VendorDetails vendor={v} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} DeleteVendor={DeleteVendor}/>)}
                    <tr>
                    <td>
        <Dialog open={open} onClose={handleClose}>

            <DialogTitle>Vendor Details</DialogTitle>
            <DialogContent>
            <div className="mb-12">
                        <hr />
                        <div>
                            <div className="row">
                                <div className="col">Name</div>
                                <div className="col">{dialVendor.firstName} {dialVendor.lastName}</div>
                            </div>
                            <div className="row">
                                <div className="col">Email address</div>
                                <div className="col">{dialVendor.email}</div>
                            </div>
                            <div className="row">
                                <div className="col">Phone number</div>
                                <div className="col">{dialVendor.mobile}</div>
                            </div>
                            <div className="row">
                                <div className="col">Address</div>
                                <div className="col">{dialVendor.address}</div>
                            </div>
                            <div className="row">
                                <div className="col">GST Number</div>
                                <div className="col">{dialVendor.gstNo}</div>
                            </div>
                            <div className="row">
                                <div className="col">Addhar Number</div>
                                <div className="col">{dialVendor.addaharNo}</div>
                            </div>
                            <div className="row">
                                <div className="col">PAN</div>
                                <div className="col">{dialVendor.pan}</div>
                            </div>
                        </div>
                    </div>
            </DialogContent>


            <DialogActions>
                <Button onClick={()=>DeleteVendor(dialVendor)} style={{backgroundColor:"red"}} variant="contained">
                    Delete
                </Button>
                <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>                       
         </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
