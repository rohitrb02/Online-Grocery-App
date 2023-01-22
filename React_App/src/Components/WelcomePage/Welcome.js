import React, { useEffect, useState } from "react";
import WelcomeFooter from "./WelcomeFooter";
import WelcomeHeader from "./WelcomeHeader";
const Welcome = ()=>{
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5276/api/Home/GetAllCategories').then(response=>response.json()).then(data=>setCategoryList(data))
    },[]);
    return (
        <div>
            <div style={{backgroundColor:"rgb(5, 49, 5)",overflow:"hidden"}}>
                <div className="multi-bg">
                    <h1 id="logo">Give Your Grocery List To Us....</h1>
                </div>
                <div>
                    <h2 style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bolder",color:"#c3f3be"}} >
                        Categories To Purchase From:</h2>
                </div>
                <section id="marquee">
                    <div className="container">
                        <div className="pic-container" style={{color:"whitesmoke",border: "none"}}>
                            {categoryList.map(p=>
                                    <div className="pic" style={{display: "flex"}}>
                                        <img src={p.categoryImage} alt="img" style={{height:"130px" , width:"100px",border: "3px solid green", borderRadius:"65px"}} /><br />
                                        <h3 style={{paddingTop:"27px",paddingLeft:"10px"}}>{p.categoryName}</h3>
                                    </div>
                                )}
                            
                        </div>
                    </div>
                </section>


                <div style={{backgroundColor: "rgb(4, 99, 31)",padding: "72px 90px"}}>
                    <div style={{border:"3px solid yellowgreen",borderRadius:"10px"}}>
                        <h4 style={{textAlign:"center", padding:"35px",fontWeight:"bolder",color: "#c3f3be"}}>HOW IT WORKS</h4>
                        <div className="container" style={{padding: "60px"}}>
                            <div className="row">
                                <div className="col-sm" style={{textAlign:"center",color:"aliceblue"}}>
                                    <img src="/images/11.png" alt="logo" />
                                    <h1 style={{fontWeight:"bolder"}}>Place an order</h1><br />
                                    <h3>Choose from a wide range of daily essentials</h3><br />
                                </div>
                                <div className="col-sm" style={{textAlign:"center",color: "aliceblue"}}>
                                    <img src="/images/12.png" alt="logo" style={{height:"98px",width:"96px"}} />
                                    <h1 style={{fontWeight:"bolder"}}>Don’t Blink</h1><br />
                                    <h3>Our delivery partner will be at your door</h3><br />
                                </div>
                                <div className="col-sm" style={{textAlign:"center",color: "aliceblue"}}>
                                    <img src="/images/13.png" alt="logo" />
                                    <h1 style={{fontWeight: "bolder"}}>Enjoy</h1><br />
                                    <h3>Boom! You'll never have to wait for groceries again</h3><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{backgroundColor: "rgb(4, 99, 31)",padding:"72px 90px"}}>
                    <h4 style={{textAlign:"center", padding:"35px",fontWeight:"bolder",color: "#c3f3be"}}>HAPPY CUSTOMERS</h4>
                    <div className="row" style={{marginBottom:"56px",padding: "0px"}}>
                        <div className="col-sm-6" style={{marginBottom:"56px",padding: "0px"}}>
                            <div className="card"
                                style={{backgroundImage:"linear-gradient(to top right ,hsl(115, 69%, 57%) 0%, #20742b 100%)" ,borderRadius: "20px"}}>
                                <div className="card-body">
                                    <h2 className="card-text" style={{color:"rgb(234, 240, 196)",fontWeight:"bold"}}>Impressed with the
                                        overall experience. Placed an order on Grocery Mania right after booking a cab. The order
                                        arrived faster than the cab!!</h2><br />
                                    <h2 style={{color:"rgb(234, 240, 196)",fontWeight: "lighter"}}>-Amber</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card"
                                style={{backgroundImage:"linear-gradient(to top right,hsl(76, 87%, 66%) 0%, #20742b 100%)",borderRadius: "20px"}}>
                                <div className="card-body">
                                    <h2 className="card-text" style={{color:"rgb(234, 240, 196)",fontWeight:"bold"}}>I no longer have to
                                        plan in advance for my groceries. This service helps me order on-the-fly. 10 minute delivery
                                        is just insane</h2><br />
                                    <h2 style={{color:"rgb(234, 240, 196)",fontWeight:"lighter"}}>-Rohit</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom:"56px",padding: "0px"}}>
                        <div className="col-sm-6" style={{marginBottom:"56px",padding:"0px"}}>
                            <div className="card"
                                style={{backgroundImage:"linear-gradient(to bottom left,hsl(76, 87%, 66%) 0%, #20742b 100%)",borderRadius: "20px"}}>
                                <div className="card-body">
                                    <h2 className="card-text" style={{color:"rgb(234, 240, 196)",fontWeight: "bold"}}>This service is
                                        unbelievably fast. And their product assortment is great!</h2><br />
                                    <h2 style={{color:"rgb(234, 240, 196)",fontWeight:"lighter"}}>-Rahul</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card"
                                style={{backgroundImage:"linear-gradient(to bottom left,hsl(115, 69%, 57%) 0%, #20742b 100%)",borderRadius:"20px"}}>
                                <div className="card-body">
                                    <h2 className="card-text" style={{color:"rgb(234, 240, 196)",fontWeight: "bold"}}>Thank you for being an
                                        absolute saviour. Best app for when you need something INSTANTLY1</h2><br />
                                    <h2 style={{color:"rgb(234, 240, 196)",fontWeight: "lighter"}}>-Rishi</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;