import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export const UserDetails = ({user , handleClickOpen, handleClose, open, DeleteUser}) => {
  return (
    <tr>
    
    <td>{user.userId}</td>
    <td>{user.firstName} {user.lastName}</td>
    <td>{user.email}</td>
    <td>{user.phoneNo}</td>
    <td>{user.address}</td>
    <td>{user.walletPoints}</td>
    <td>
    <Button className='btn btn-primary' variant="contained"
            color="primary" onClick={()=>handleClickOpen(user)}>
            View
        </Button>
    </td>
</tr>
  );
}