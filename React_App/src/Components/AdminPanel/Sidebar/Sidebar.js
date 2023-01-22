
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCategory from '../AddCategory/AddCategory';
import AddNewCat from '../AddCategory/AddNewCat';
import Dashboard from '../Dashboard/Dashboard';
import { Home } from '../Home/Home';

import { ManagerUser } from '../ManagerUser/ManagerUser';
import { ManagerVendor } from '../ManageVendor/ManageVendor';
import OfferDiscount from '../OfferDiscount/OfferDiscount';
import { ProductToApprove } from '../ProductToApprove/ProductToApprove';
import UsersQuery from '../UsersQuery/UsersQuery';
import VendorsQuery from '../VendorsQuery/VendorsQuery';
import VendorsToVerify from '../VendorsToVerify/VendorsToVerify';





const Sidebar = () => {
    const AdminLogout=()=>{
        if(window.confirm("Want to log out?")){
                localStorage.clear();
                localStorage.setItem('Main','');
                window.location.href="/";
        }
    }
    return (
        <Router>
        <div className='row'>
            <div className="col-md-3 col-lg-3 sidebar-offcanvas pl-0 success" id="sidebar" role="navigation" style={{ backgroundColor: "#696969" ,height: "auto", minHeight:"610px",position:"sticky",top:"25"}}>
                <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                    <li className="nav-link text-secondary"><i className="fa fa-home font-weight-bold" style={{color:'white'}}></i> <Link to="/ov" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Overview</span></Link>  </li>
                    <li className="nav-link text-secondary"><i className="far fa-user font-weight-bold"style={{color:'white'}}></i><Link to="/VendorsToVerify" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Vendors need to Verified</span></Link></li>
                    <li className="nav-link text-secondary"><i className="fas fa-atom font-weight-bold"style={{color:'white'}}></i><Link to="/add-category" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Add Categories</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa-atom font-weight-bold"style={{color:'white'}}></i><Link to="/offer-discount" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Add Offer & Discount</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="far fa-user font-weight-bold"style={{color:'white'}}></i><Link to="/manage-vendor" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Manage Vendors</span></Link></li>
                    <li className="nav-link text-secondary"><i className="fas fa-users font-weight-bold"style={{color:'white'}}></i><Link to="/manager-user" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Mange Users</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa-check-circle font-weight-bold"style={{color:'white'}}></i><Link to="/ProductsToApprove" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Product To Approve</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa-check-circle font-weight-bold"style={{color:'white'}}></i><Link to="/UsersQuery" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Users Queries</span></Link> </li>
                    <li className="nav-link text-secondary"><i className="fas fa-check-circle font-weight-bold"style={{color:'white'}}></i><Link to="/VendorsQuery" style={{color:'white', textDecoration:"none"}}><span className="ml-3">Vendors Queries</span></Link> </li>
                    {/* <li className="nav-link text-secondary"><i className="far fa-gear font-weight-bold"style={{color:'white'}}></i><Link to="/manager-user" style={{color:'white', textDecoration:"none"}}> <span className="ml-3">Settings</span></Link> </li> */}
                    <li className="nav-link text-secondary" onClick={AdminLogout}><i className="fas fa-sign-out-alt"style={{color:'white'}}></i><Link style={{color:'white', textDecoration:"none"}}> <span className="ml-3" >Logout</span></Link></li>
                    
                </ul>
            </div>
            <div className="col-md-9 main pt-2 mt-3">

                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path='/ov' exact element={<Dashboard />}></Route>
                    <Route path='/manage-vendor' exact element={< ManagerVendor/>}></Route>
                    <Route path='/manager-user' exact element={< ManagerUser/>}></Route>
                    <Route path='/offer-discount' exact element={<OfferDiscount />}></Route>
                    <Route path='/manager-user' exact element={< ManagerUser/>}></Route>
                    <Route path = '/add-category' exact element={<AddCategory/>} />
                    <Route path='/AddNewCategory' exact element={<AddNewCat/>} />
                    <Route path='/VendorsToVerify' exact element={<VendorsToVerify/>} />
                    <Route path='/ProductsToApprove' exact element={<ProductToApprove/>} />
                    <Route path='/UsersQuery' exact element={<UsersQuery />} />
                    <Route path='/VendorsQuery' exact element={<VendorsQuery />} />
                   
                </Routes>
            </div>
        </div>
        </Router>

    )
}

export default Sidebar