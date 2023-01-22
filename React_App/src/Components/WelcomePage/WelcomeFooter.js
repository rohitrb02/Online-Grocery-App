import React from "react";
import { Link } from "react-router-dom";
const WelcomeFooter = () => {
    return (<div>

        <div className="text-center text-white" style={{backgroundColor: "rgb(4, 99, 31)"}}>
            <div className="container">
                <section >
                    <div className="row text-center d-flex justify-content-center pt-5">
                        <div className="col-md-2">
                        <Link to="/AboutUs" style={{textDecoration:"none", color:"white"}}><h6 className="text-uppercase font-weight-bold text-white">
                                About us
                            </h6></Link>
                        </div>
                        <div className="col-md-2">
                        <Link to="/" style={{textDecoration:"none", color:"white"}}><h6 className="text-uppercase font-weight-bold text-white">
                                Home
                            </h6></Link>
                        </div>
                        <div className="col-md-2">
                        <Link to="/Category" style={{textDecoration:"none", color:"white"}}><h6 className="text-uppercase font-weight-bold ">
                                Categories
                            </h6></Link>
                        </div>
                        <div className="col-md-2">
                        <Link to="/CustomerSupport" style={{textDecoration:"none", color:"white"}}><h6 className="text-uppercase font-weight-bold text-white">Customer Support</h6></Link>
                        </div>
                    </div>
                </section>
                <hr className="my-5" />
            </div>
            <div
                className="text-center p-3"
                style={{backgroundColor: "rgb(5, 49, 5)"}}>
                © 2023 Copyright:
                <a className="text-white" href="http://localhost:3000/"
                >GroceryMania.com</a
                >
            </div>
        </div>
    </div>);
}
export default WelcomeFooter;