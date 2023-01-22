import React, { useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const QueryCard=({ Query})=>{
    const [open, setOpen] = React.useState(false);
    const [colorClass, setColorClass] = useState("badge badge-danger");
    useEffect(()=>{
        if(Query.replyStatus=="Replied"){
            setColorClass("badge badge-success");
        }
    },[]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(<tr>
        <th scope="row">{Query.queryId}</th>
        <td>{Query.queryDiscription}</td>
        <td><span className={colorClass}>{Query.replyStatus}</span></td>
        <td>
            <Button className='btn btn-primary' variant="contained"
                color="primary" onClick={handleClickOpen}>
                View
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Vendor's Query</DialogTitle>
                <DialogContent>
                    <div className="mb-12">
                        <hr />
                        <div>
                            <div className="row">
                                <div className="col">Query Id</div>
                                <div className="col">{Query.queryId}</div>
                            </div>
                            <div className="row">
                                <div className="col">Discription</div>
                                <div className="col">{Query.queryDiscription}</div>
                            </div>
                            <div className="row">
                                <div className="col">Reply Status</div>
                                <div className="col">{Query.replyStatus}</div>
                            </div>
                            <div className="row">
                                <div className="col">Reply</div>
                                <div className="col">{Query.reply}</div>
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
)
}
export default QueryCard;