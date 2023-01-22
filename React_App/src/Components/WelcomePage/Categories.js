import React, { useEffect, useState } from "react";
const Categories=()=>{
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5276/api/Home/GetAllCategories').then(response=>response.json()).then(data=>setCategoryList(data))
    },[]);
    return (
        <div>
        <div className="row" id="heading">
            <div className="col-12">Categories to Purchase From</div>
            </div>
            <div id="body">
                <div className="row" id="inner">

                    {categoryList.map(p =>
                        <div className="col-6" style={{marginBottom:"50px"}}>
                            <img src={p.categoryImage} alt="img" style={{height:"130px" , width:"100px",border: "3px solid green", borderRadius:"65px"}} />
                                        <span style={{paddingTop:"27px",paddingLeft:"10px", fontSize:"34px"}}>{p.categoryName}</span>
                        </div>
                    )}
                </div>

</div>
        </div>
    );
}
export default Categories;