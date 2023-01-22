import React from "react";
const CategoryCards=({category})=>{

    return(<div className="col-md-4">
        <div className="card" style={{width:"250px"}}>

             <img src={category.categoryImage} className="card-img-top" style={{width:"150px",margin:"auto"}} height={"200px"} alt="category image"/> 
            <span style={{textAlign:"center"}} >{category.categoryName}</span>
         </div>
    </div>);
}
export default CategoryCards;