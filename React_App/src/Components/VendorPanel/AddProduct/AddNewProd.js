import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const AddNewProd=({id})=>{
    const [prodObj, setProdObj] = useState({"categoryId":"","name":"","price":"","unitQuantity":"","quantity":"","image":"","countryOfOrigin":"","discription":"","ingredients":"","approvalStatus":"Pending","discount":"0","approval_remark":"Nil","vendorId":id});
    const [navFlag,setNavFlag] = useState(false);
    const [CatList,setCatList] = useState([]);
    const [errObj, setErrObj] = useState({"categoryIdErr":"*","nameErr":"*","priceErr":"*","unitQuantityErr":"*","quantityErr":"*","imageErr":"*","countryOfOriginErr":"*","discriptionErr":"*","ingredientsErr":"*"});
    
    useEffect(()=>{
        fetch('http://localhost:5276/api/Vendor/GetAllCategories',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setCatList(data));
    },[]);
    const formCheck=(formErrors)=>{
        let valid = true;
        //check the error msgs
        Object.values(formErrors).forEach(err=>valid = valid&& err.length===0);
        return valid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formCheck({...errObj})){
            console.log(prodObj);
            fetch('http://localhost:5276/api/Vendor/AddProduct',{
                method: 'POST',  
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(prodObj),
            }).then(response=>response.json()).then(setNavFlag(true)); 
        }
        else{
            alert("Please fill all required fields")
            console.log("invalid");
        }

    }
    const handleChange=(event)=> {
        const { name, value } = event.target;
        setProdObj({ ...prodObj, [name]: value });
        let validation = errObj;

        switch (name) {
        case"categoryId" :
        if (!value || value.length === 0) {
            validation.categoryIdErr = "Select category";

        }
        else {
            validation.categoryIdErr = "";
        }
        break;

        case"name" :
        if (!value || value.length === 0) {
            validation.nameErr = "Name is required";

        }
        else {
            validation.nameErr = "";
        }break;

        case"price" :
        if (value.length === 0 || !value) {
            validation.priceErr = "Price is required" ;

        }
        else {
            validation.priceErr = "";
        }break;
        case "unitQuantity":
        if (!value || value.length === 0) {
            validation.unitQuantityErr = "Unit Quantity is required";

        }
        else {
            validation.unitQuantityErr = "";
        }break;
        case "quantity":
        if (!value || value.length === 0) {
            validation.quantityErr = "Quantity is required";

        }
        else {
            validation.quantityErr = "";
        }break;
        case "image":
        if (!value || value.length === 0) {
            validation.imageErr = "Image is required";

        }
        else {
            validation.imageErr = "";
        }break;
        case "countryOfOrigin":
        if (!value || value.length === 0) {
            validation.countryOfOriginErr = "Country name is required";
        }
        else {
            validation.countryOfOriginErr = "";
        }break;
        case "discription" :
        if (!value || value.length === 0) {
            validation.discriptionErr = "Discription is required";
        }
        else {
            validation.discriptionErr = "";
        }break;

        case "ingredients":
        if (!value || value.length === 0) {
            validation.ingredientsErr = "Ingredients are required";
        }
        else {
            validation.ingredientsErr = "";
        }break;
        default :
        break;
    }
        setErrObj({...validation});

    }
    if(navFlag){
        return(<Navigate to="/addProduct" />);
    }
    return (<div>
        <div className="row">

            <div className="col-sm-8">
                <h2 style={{ textAlign: "center", marginTop: "50px" }}>Add New Product</h2><br />
                <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                    <div className=" form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="categoryId" className="form-label">Category Name</label>
                        </div>
                        <div className="col-sm-5">
                            
                            <select className="form-select" name="categoryId" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                                <option defaultValue>Select Category</option>
                                {CatList.map((element)=>
                                    <option value={element.categoryId} > {element.categoryName}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.categoryIdErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="name" className="form-label">Product Name:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.name} className="form-control" onChange={(e) => handleChange(e)} type="text" id="name" name="name" placeholder="Name of the product" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.nameErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="price" className="form-label">Product Price:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.price} className="form-control" required onChange={(e) => handleChange(e)} type="number" id="price" name="price" placeholder="Price of the product" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.priceErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="unitQuantity" className="form-label">Product Unit Quantity:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.unitQuantity} className="form-control" required onChange={(e) => handleChange(e)} type="text" id="unitQuantity" name="unitQuantity" placeholder="quantity of single unit" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.unitQuantityErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="quantity" className="form-label">Product Quantity:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.quantity} className="form-control" required onChange={(e) => handleChange(e)} type="number" id="quantity" name="quantity" placeholder="in kg or number of units" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.quantityErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="image" className="form-label">Product Image:</label>
                        </div>
                        <div className="col-sm-5" >
                        <input value={prodObj.image} className="form-control" required onChange={(e) => handleChange(e)} type="url" name="image" placeholder="Url of image" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.imageErr}</p></div></div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="countryOfOrigin" className="form-label">Country of origin:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.countryOfOrigin} className="form-control" required onChange={(e) => handleChange(e)} type="text" id="countryOfOrigin" name="countryOfOrigin" placeholder="Product made in country" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.countryOfOriginErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="discription" className="form-label">Product Discription:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.discription} className="form-control" required onChange={(e) => handleChange(e)} type="text" id="discription" name="discription" placeholder="Discription of the product" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.discriptionErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4" style={{ textAlign: "start", paddingLeft: "30px" }}>
                            <label htmlFor="ingredients" className="form-label">Product Ingredients:</label>
                        </div>
                        <div className="col-sm-5">
                            <input value={prodObj.ingredients} className="form-control" required onChange={(e) => handleChange(e)} type="text" id="ingredients" name="ingredients" placeholder="Ingredients of the product" />
                        </div>
                        <div className="col-sm-3"><div style={{color:'red'}}> <p>{errObj.ingredientsErr}</p></div></div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8" style={{ textAlign: "start" }}>
                            <button type="submit" className="btn btn-success" style={{ width: "100px" }}>Add</button>
                        </div>
                    </div>

                </form>
            </div>
            <div className="col-sm-4" style={{ textAlign:"start", minHeight: "500px" }}>
                <img src="/images/grocery_logo.png" width={"350px"} height={"270px"} alt="Logo" style={{ marginTop: "100px" }} />
            </div>
        </div>
    </div>);
}
export default AddNewProd;