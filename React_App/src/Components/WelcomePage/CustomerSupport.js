import React from "react";
const CustomerSupport=()=>{
    return(
        <div>
            <div className="row" id="CSheading">
    <div className="col-12">Customer Support</div>
</div>
<div style={{backgroundColor:"#195923"}}>
    <div style={{marginTop: "-20px"}}>
        <p id="CSbd1">We're here to help.</p><br/>
        <p id="CSbd2">Have an issue with an order or feedback for us? Our support team is here to help you from 6 am
            to 2 am.</p>
    </div>
    <div className="container">
        <div className="row" style={{marginTop:"100px",height:"350px"}}>
            <div className="col-sm">
                <div style={{display:"flex"}}>     
                    <img id="CSimg" src="/images/email.png" alt="logo"/>
                    <p id="CSp3" style={{marginTop:"14px"}}>Order Related Queries</p>
                </div>
                <hr style={{color: "white"}}/>
                <p id="CSp4" style={{marginLeft:"20px"}}>Connect with customer support on the Chat Service</p>
            </div>
            <div className="col-sm">
                <div style={{display:"flex"}}>
                    <img id="CSimg" src="/images/email.png" alt="logo"/>
                <p id="CSp3" style={{marginTop:"14px"}}>For Anything Else</p>
            </div>
                <hr style={{color: "white"}}/>
                <p id="CSp4" style={{marginLeft:"20px"}}>Send us an email to : grocery_mania_support@gmail.com</p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}
export default CustomerSupport;