import React from "react";

const About=()=>{
    return(<div>
        <div>
<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6" >
        <h1 className="display-4" style={{fontWeight:"500",color:"rgb(26, 143, 26)"}}>About Us</h1>
        <p className="lead text-muted mb-0">We want our customers to focus on the more important things for themselves and not need to plan for the little things that life needs on an everyday basis. We are here to get your chores out of your way.</p><br/><br/>
        <h4 className="display-4" style={{fontWeight:"400",color:"rgb(26, 143, 26)"}}>Our Mission</h4>
        <p className="lead text-muted mb-0">To deliver an exceptional shopping experience by offering the best service, value , quality, and freshest products while being good stewards of our environment </p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt=""
          className="img-fluid"/></div>
    </div>
  </div>
</div>

<div className="bg-white py-5" >
  <div className="container py-5" >
    <div className="row align-items-center mb-5" >
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light" style={{color:"rgb(26, 143, 26)"}}>Mindsets & leverage points</h2>
        <p className="font-italic text-muted mb-4">We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at GroceryMania follow at all times</p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img
          src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt=""
          className="img-fluid mb-4 mb-lg-0"/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light" style={{color:"rgb(26, 143, 26)"}}>Learning organisation</h2>
        <p className="font-italic text-muted mb-4">We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire</p>   
      </div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4" style={{fontWeight:"500",color:"rgb(26, 143, 26)"}}>Our Team</h2>
      </div>
    </div>

    <div className="row text-center">

      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Rahul</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>

      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img src="/images/rishi.png" alt="" width="100"
            className="img-fluid rounded-circle mb-2 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Rishi Sharma</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>

      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img src="/images/rohit.jpg" alt="" width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Rohit Bharti</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
  
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img src="/images/amber.jpg" alt="" width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Amber Sawarn</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
    </div>);
}
export default About;