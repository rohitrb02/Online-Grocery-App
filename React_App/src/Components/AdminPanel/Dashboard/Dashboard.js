import {useEffect,useState} from 'react';
const Dashboard = () => {
    const [userRecord,setUserRecord] = useState("");
    const [vendorRecord,setVendorRecord] = useState("");
    const [categoryRecord,setCategoryRecord] = useState("");
    useEffect(()=>{
        fetch('http://localhost:5276/api/Admin/GetAllCategories',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setCategoryRecord(data.length)).then(fetch('http://localhost:5276/api/Admin/GetAllVendors',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setVendorRecord(data.length))).then(
        fetch('http://localhost:5276/api/Admin/GetAllusers',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setUserRecord(data.length)));
    },[]);
    return (
    <div className="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>
        <p className="lead d-none d-sm-block"> Details and Records</p>
 
        {/* <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div> */}
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                    <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div className="rotate">
                            <i className="fa fa-users fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Users</h6>
                        <h1 className="display-4">{userRecord}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body bg-danger">
                        <div className="rotate">
                            <i className="fa fa-user fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Vendors</h6>
                        <h1 className="display-4">{vendorRecord}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100">
                    <div className="card-body bg-info">
                        <div className="rotate">
                          <i className="fa fa-list fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Catogories</h6>
                        <h1 className="display-4">{categoryRecord}</h1>
                    </div>
                </div>
            </div>
            {/* <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-warning h-100">
                    <div className="card-body">
                        <div className="rotate">
                            <i className="fa fa-share fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Shares</h6>
                        <h1 className="display-4">36</h1>
                    </div>
                </div>
            </div> */}
        </div>
 
        <hr/>
         
 
    </div>
    )
}
 
export default Dashboard