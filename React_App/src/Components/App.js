import VendorNavbar from './VendorPanel/Navbar/VendorNavbar';
import './App.css';
import VendorSidebar from './VendorPanel/Sidebar/VendorSidebar';
import Welcome from './WelcomePage/Welcome';
import AdminLogin from './Logins/AdminLogin';
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import WelcomeHeader from './WelcomePage/WelcomeHeader';
import WelcomeFooter from './WelcomePage/WelcomeFooter';
import LoginMain from './Logins/LoginMain';
import { useEffect, useState } from 'react';
import Categories from './WelcomePage/Categories';
import About from './WelcomePage/About';
import CustomerSupport from './WelcomePage/CustomerSupport';
import AdminNavbar from './AdminPanel/Navbar/Navbar';
import AdminSidebar from './AdminPanel/Sidebar/Sidebar';



function App() {
  const[inOut,setInOut] = useState("");
  const [vendorId, setVendorId] = useState(0);
  const VenderLoginClick=(res,email)=>{
    if(res){
      localStorage.setItem('token',res.token);
      fetch('http://localhost:5276/api/Vendor/GetVendorIdByUserName/'+email,{
        headers:{
          Authorization:`Bearer ${res.token}`
        }
      }).then(response=>response.json()).then(data=>localStorage.setItem('id',data)).
      then(()=>{setInOut("VendorLogedin");
      window.location.href="/";
      localStorage.setItem('Main', 'VendorLogedin');
     });
    }
    else{
      alert("Invalid Email or Password");
    }
  }
  const AdminLoginClick=(res)=>{
    if(res.result){
      window.location.href="/" ;
      var token = res.token;
      localStorage.setItem('Main','AdminLogedin');
      localStorage.setItem('token',token);
      
    }
    else{
      alert("Invalid Email or Password");
    }
  }
  useEffect(()=>{
    if(localStorage.getItem('Main')){
      var val = localStorage.getItem('Main');
      setInOut(val);
    }
  });
  if(inOut==="VendorLogedin"){
    let id = localStorage.getItem('id');
    return(<div>
      <VendorNavbar/>
    <div className="container-fluid" id="main">
     <div className="row row-offcanvas row-offcanvas-left">
      <VendorSidebar VendorId = {id}/>
      </div>
      </div>
    </div>);
  }
  else if(inOut==="AdminLogedin"){
    return(<div>
      <AdminNavbar/>
    <div className="container-fluid" id="main">
     <div className="row row-offcanvas row-offcanvas-left">
      <AdminSidebar/>
      </div>
      </div>
    </div>);
  }
  return (
    <div>
      
    <Router>
    <WelcomeHeader/>
      <Routes>
      <Route path="/" exact element={<Welcome/>} />
      <Route path="/VendorLogin" exact element={<LoginMain VenderLoginClick={VenderLoginClick}/>} />
      <Route path="/Category" exact element={<Categories/>} />
      <Route path="/AboutUs" exact element={<About></About>} />
      {/* <Route path="/VendorLogin" exact element={<VendorLogin toggleForm={toggleForm}/>} /> */}
      <Route path="/AdminLogin" exact element={<AdminLogin AdminLoginClick={AdminLoginClick}/>} />
      <Route path="/CustomerSupport" exact element={<CustomerSupport/>} />
      </Routes>
      <WelcomeFooter/>
    </Router>
    
</div>  
  );
}

export default App;
