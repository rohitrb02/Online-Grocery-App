
import React, {useState} from "react";
import { Navigate } from "react-router-dom";
const VendorRegister=({toggleForm})=>{
    const[form,setForm]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        mobile:'',
        address:'',
        gstNo:'',
        pan:'',
        addaharNo:'',
        verification:'Pending'
    });
    
    //const [verification,setVerfication]=useState('Pending');
    const [navFlag, setNavFlag] = useState(false);
    const [error, setError] = useState({
        fname: '*',
        lname: '*',
        email: '*',
        pass: '*',
        phone: '*',
        address:'*',
        gst:'*',
        pan:'*',
        aadhar:'*'
      });

      //for Submit Update
    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        let validation = error;

        switch (name) {

        case'firstName' :
        if (!value || value.length === 0) {
            validation.fname = 'First Name is required';

        }
        else if (value.length < 3 || value.length > 20) {

            validation.fname = 'Name must be between 3 and 20 letters';

        }
        else {
            validation.fname = '';
        }
        break;

        case'lastName' :
        if (!value || value.length === 0) {
            validation.lname = 'Last Name is required';

        }
        else if (value.length < 3 || value.length > 20) {

            validation.lname = 'Last Name must be between 3 and 20 letters';

        }
        else {
            validation.lname = '';
        }break;

        case'email' :
        if (!value || value.length === 0) {
            validation.email = 'Email is reqired';

        }
        else if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
            validation.email = 'Not a valid email';
        }
        else {
            validation.email = '';
        }break;

        case 'password':
        if (!value || value.length === 0) {
            validation.pass = 'Password is required';

        }
        else if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
            validation.pass = 'Passward should have min 8 characters(a-z, A-Z, 0-9,special)';
        }
        else {
            validation.pass = '';
        }break;
        case 'mobile':
        if (!value || value.length === 0) {
            validation.phone = 'Phone is required';

        }
        else if (!value.match(/^\d{10,12}$/)) {
            validation.phone = 'Not a valid phone';
        }
        else {
            validation.phone = '';
        }break;
        case 'addaharNo':
        if (!value || value.length === 0) {
            validation.aadhar = 'Aadhar is required';
        }
        else if (value.length>0 && value.length!=12) {

            validation.aadhar = 'Aadhar number must be 12 letters';

        }
        else {
            validation.aadhar = '';
        }break;
        case 'address' :
        if (!value || value.length === 0) {
            validation.address = 'Full address is required';
        }
        else if (value.length < 3 || value.length > 60) {
            validation.address = "Full Addres is Required";
        }
        else {
            validation.address = '';
        }break;

        case 'gstNo':
            var rex=(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);
        if (!value || value.length === 0) {
            validation.gst = 'GST no is required';
        }
        else if(!rex.test(value)){
            validation.gst = 'Not a valid gst no';
        }

        // else if (!form.gst.matchAll(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)) {
        //     error.gst = 'Not a valid gst no';
        // }
        else {
            validation.gst = '';
        }break;
        case 'pan':
            var regex=(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
        if (!value || value.length === 0) {
            validation.pan = 'PAN No is required';
        }
        else if(!regex.test(value)){
            validation.pan='Not a valid pan no';
        }

        else {
            validation.pan = '';
        }break;
        default :
        break;
    }
        setError({...validation});

    }
    const formCheck=(formErrors)=>{
        let valid = true;
        //check the error msgs
        Object.values(formErrors).forEach(err=>valid = valid&& err.length===0);
        return valid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formCheck({...error})){
            fetch('http://localhost:5276/api/Vendor/SignIn',{
                method:'POST',
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(form)
            }).then(response=>response.json()).then(data=>AfterPost(data));
        }
        else{
            alert("Please fill all required fields")
        }
    }
    const AfterPost=(msg)=>{
        console.log(msg);
        if(msg=="Done"){
            alert("Registered successfully!\nLogin will be enable after verification by Admin");
            toggleForm("VendorLogin");
        }
        else{
            alert("Vender already exist!\nTry with different email id");
            setForm({...form,email:'',password:''});
            setError({...error,email:'*',pass:'*'});
        }
    }   
    // if(navFlag){
    //     return(<Navigate to="/Vendor")
    // }
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Register</h2>
        <div className="row" style={{marginTop:"30px"}}>
            <div className="col-sm-4">
            <img src="/images/grocery_logo.png" width={"380px"} height={"270px"} alt="Logo" style={{margin:"auto"}}/>
            </div>
        <div className="col-sm-8">
            <form className="form" onSubmit={handleSubmit}>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px", fontSize:"19px"}}>
                        <label for="firstname" className="form-label">First Name</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.firstName} className="form-control" onChange={(e) => handleChange(e)} name="firstName" id="firstName" placeholder="First Name " />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.fname}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="lastName" className="form-label">Last Name</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.lastName} className="form-control" onChange={(e) => handleChange(e)} name="lastName" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.lname}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="email" className="form-label">Email Address</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.email} className="form-control" onChange={(e) => handleChange(e)} type="email" placeholder="Enter the Email" id="email" name="email" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.email}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="password" className="form-label">Password</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.password} className="form-control" onChange={(e) => handleChange(e)} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.pass}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="mobile" className="form-label">Mobile Number</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.mobile} className="form-control" onChange={(e) => handleChange(e)} name="mobile" id="mobile" placeholder="Enter a Mobile Number" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.phone}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="address" className="form-label">Address</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.address} className="form-control" onChange={(e) => handleChange(e)} name="address" id="address" placeholder="Full Address" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.address}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="gstNo" className="form-label">GST No.</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.gstNo} className="form-control" onChange={(e) => handleChange(e)} name="gstNo" id="gstNo" placeholder="Enter Gst no" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.gst}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="pan" className="form-label">PAN</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.pan} className="form-control" onChange={(e) => handleChange(e)} name="pan" id="pan" placeholder="Enter the PAN Details" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.pan}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                    <div className="col-sm-3" style={{textAlign:"start",paddingLeft:"30px",fontSize:"19px"}}>
                        <label for="addaharNo" className="form-label">Aadhar Number</label>
                    </div>
                    <div className="col-sm-4">
                    <input value={form.addaharNo} className="form-control" onChange={(e) => handleChange(e)} name="addaharNo" id="addaharNo" placeholder="Enter the aadhar number" />
                    </div>
                    <div className="col-sm-5">
                        <div style={{color:'red'}}> <p>{error.aadhar}</p></div>
                    </div>
            </div><br/>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9" style={{textAlign:"left"}}>
                <button type="submit" className="btn btn-success" >Sign Un</button>
                </div>
            </div>
        </form>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
                <p style={{color:'red',margin:'10px'}}>Already have an account?</p>
            </div>
            <div className="col-sm-5" style={{textAlign:"left"}}>
                <button className=" btn btn-link" onClick={() => toggleForm("VendorLogin")}> Login here.</button>
            </div>
        </div>
        
        
        </div>
        </div>
    </div>
    );

}
export default VendorRegister;