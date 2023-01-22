import React, { useEffect, useState } from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const QueryModal=({ Query, QueryReplied})=>{
    const [ReplyOpt, setReplyOpt] = useState({display:"none"});
    const [replyErr, setReplyErr] = useState("*");
    const [reply, setReply] = useState("");
    const [open, setOpen] = React.useState(false);
    const [buttonTwo, setButtonTwo] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleReplyOpen = () => {
        setReplyOpt({display:""});
        setButtonTwo(true);
    };
    const replySubmit=(e)=>{
        e.preventDefault();
        let err = replyErr;
        if(err == ""){
            QueryReplied(Query,reply);
        }
        else{
            alert("Please reply something!");
        }
    }
    const replyChange=(event)=>{
        const { name, value } = event.target;
        setReply( value );
        let Err = replyErr;
        if(!value || value.length === 0){
            Err = "Required field";
        }
        else{
            Err = "";
        }
        setReplyErr(Err);
    }
    return(<tr>
        <th scope="row">{Query.queryId}</th>
        <td>{Query.queryUserOrVedId}</td>
        <td>{Query.queryDiscription}</td>
        <td><span className="badge badge-danger">Pending</span></td>
        <td>
            <Button className='btn btn-primary' variant="contained"
                color="primary" onClick={handleClickOpen}>
                View
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>User's Query</DialogTitle>
                <DialogContent>
                    <div className="mb-12">
                        <hr />
                        <div>
                            <div className="row">
                                <div className="col">Query Id</div>
                                <div className="col">{Query.queryId}</div>
                            </div>
                            <div className="row">
                                <div className="col">Query by</div>
                                <div className="col">{Query.queryByUserOrVed}</div>
                            </div>
                            <div className="row">
                                <div className="col">User Id</div>
                                <div className="col">{Query.queryUserOrVedId}</div>
                            </div>
                            <div className="row">
                                <div className="col">Discription</div>
                                <div className="col">{Query.queryDiscription}</div>
                            </div>
                        </div>
                        <div className="row" style={ReplyOpt}>
                            <form className="form" onSubmit={replySubmit}>
                            <div className="row">
                                <div className="col-md-5">
                                <label for="reply" className="form-label">Reply the Query:</label>
                                </div>
                                <div className="col-md-5">
                                <input type="text" value={reply} name="reply" id="reply" onChange={(e)=>replyChange(e)} className="form-control" />
                                </div>
                                <div style={{color:'red'}} className="col-md-2"> <p>{replyErr}</p></div>
                            </div>
                                <button type="submit" style={{backgroundColor:"green", color:"white"}} className="btn btn-sucess" >Submit</button>
                            </form>
                        </div>
                    </div>
                    
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" disabled={buttonTwo} color="secondary" onClick={()=>handleReplyOpen()}>
                        Reply Query
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </td>
    </tr>
)
}
export default QueryModal;