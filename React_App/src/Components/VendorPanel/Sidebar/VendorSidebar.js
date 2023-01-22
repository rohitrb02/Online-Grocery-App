import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddNewProd from '../AddProduct/AddNewProd';
import { AddProduct } from '../AddProduct/AddProduct';
import AskNewQuery from '../AskQueryToAdmin/AskNewQuery';
import AskQueryToAdmin from '../AskQueryToAdmin/AskQueryToVAdmin';
import Dashboard from '../Dashboard/Dashboard';
import { DiscardedProducts } from '../Discardedproducts/DiscardedProducts';
import { Home } from '../Home/Home';
import { PreviousAddHistory } from '../PreviousAddHistory/PreviousAddHistory';
import { UsersQuery } from '../UserQuery/UserQuery';





const VendorSidebar = ({VendorId}) => {
    const VendorLogout=()=>{
        if(window.confirm("Do you want to Logout?")){
            localStorage.clear();
            localStorage.setItem('Main','');
            window.location.href = "/";
        }
    }
    console.log(VendorId);
    return (
        <Router>

            <div className="col-md-3 col-lg-3 sidebar-offcanvas pl-0 success" id="sidebar" role="navigation" style={{ backgroundColor: "#696969" ,height: "100vh", minHeight:"610px", position:"sticky", top:"30"}}>
                <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                    <li className="nav-link text-secondary"><i className="fa fa-home font-weight-bold" style={{color:'white'}}></i> <Link to="/ov" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Overview</span></Link>  </li>
                    <li className="nav-link text-secondary"><i className="far fa-plus font-weight-bold"style={{color:'white'}}></i><Link to="/addProduct" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Add Product</span></Link></li>
                    <li className="nav-link text-secondary"><i className="fas fa-history font-weight-bold"style={{color:'white'}}></i><Link to="/productAddHistory" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Previous Add History</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa fa-minus-square font-weight-bold"style={{color:'white'}}></i><Link to="/discardedProducts" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Discarded Products</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa-comment-dots font-weight-bold"style={{color:'white'}}></i><Link to="/replyQuery" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Reply User's Query</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa-comment-dots font-weight-bold"style={{color:'white'}}></i><Link to="/ask-query" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Query To Admin</span></Link> </li>
                    <li className="nav-link text-secondary" onClick={VendorLogout}><i className="fas fa-sign-out-alt"style={{color:'white'}}></i><Link style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Logout</span></Link> </li>
                    
                </ul>
            </div>
            <div className="col main pt-2 mt-3">

                <Routes>
                    <Route path='/' exact element={<Home id={VendorId}/>} />
                    <Route path='/ov' exact element={<Dashboard id={VendorId}/>}></Route>
                    <Route path='/addProduct' exact element={< AddProduct id={VendorId}/>}></Route>
                    <Route path='/productAddHistory' exact element={< PreviousAddHistory id={VendorId}/>}></Route>
                    <Route path='/discardedProducts' exact element={< DiscardedProducts id={VendorId}/>}></Route>
                    <Route path='/replyQuery' exact element={< UsersQuery id={VendorId}/>}></Route>
                    <Route path='/ask-query' exact element={< AskQueryToAdmin id={VendorId}/>}></Route>
                    <Route path='/AddNewProduct' exact element={<AddNewProd id={VendorId} />} />
                    <Route path='/AddQuery' exact element={<AskNewQuery id={VendorId} />} />
                </Routes>
            </div>


        </Router>

    )
}

export default VendorSidebar;