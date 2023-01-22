import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import { UserDetails } from './UserDetails';

export const ManagerUser = () => {
    const [open, setOpen] = React.useState(false);
    const [userList, setUserList] = useState([]);
    const [dialUser, setDialUser] = useState({});
    
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetAllusers',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setUserList(data));
    },[]);
    const handleClickOpen = (user) => {
        setDialUser({...user});
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const DeleteUser=(user)=>{
        if(window.confirm("Sure to delete this user?")){
        fetch('http://localhost:5276/api/Admin/DeleteUser',{
            method: 'DELETE',  
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(user),
        }).then(handleClose).then(<Navigate to="/" />);
    }
    }
    return (
        <div className='col main pt-5 mt-3'>
            <h2><b>Manager Users</b></h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile.no </th>
                        <th scope="col">Address</th>
                        <th scope="col">Wallet points</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {userList.map(u=><UserDetails user={u} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} DeleteUser={DeleteUser}/>)}
                    <tr>
                    <td>
        
        <Dialog open={open} onClose={handleClose}>

            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
            <div className="mb-12">
                        <hr />
                        <div>
                            <div className="row">
                                <div className="col">Name</div>
                                <div className="col">{dialUser.firstName} {dialUser.lastName}</div>
                            </div>
                            <div className="row">
                                <div className="col">Email address</div>
                                <div className="col">{dialUser.email}</div>
                            </div>
                            <div className="row">
                                <div className="col">Phone number</div>
                                <div className="col">{dialUser.phoneNo}</div>
                            </div>
                            <div className="row">
                                <div className="col">Address</div>
                                <div className="col">{dialUser.address}</div>
                            </div>
                            <div className="row">
                                <div className="col">Wallet Points</div>
                                <div className="col">{dialUser.walletPoints}</div>
                            </div>
                        </div>
                    </div>
            </DialogContent>


            <DialogActions>
                <Button onClick={()=>DeleteUser(dialUser)} style={{backgroundColor:"red"}} variant="contained">
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
