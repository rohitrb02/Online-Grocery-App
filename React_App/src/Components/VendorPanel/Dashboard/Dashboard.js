import {useEffect,useState} from 'react';
const Dashboard = ({id}) => {
    const[ApprovedProd,setApprovedProd]  = useState("");
    const[DiscardedProd,setDiscardedProd]  = useState("");
    const[ReqProd,setReqProd]  = useState("");
    useEffect(()=>{
        fetch('http://localhost:5276/api/Vendor/ProductHistory/'+id,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response=>response.json()).then(data=>setApprovedProd(data.length)).then(
            fetch('http://localhost:5276/api/Vendor/DiscardedProdList/'+id,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }).then(response=>response.json()).then(data=>setDiscardedProd(data.length)).then(
                fetch('http://localhost:5276/api/Vendor/ProdYetToApprove/'+id,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                }).then(response=>response.json()).then(data=>setReqProd(data.length))
            )
        );
    },[]);
    return (
    <div className="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>

            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>
        <p className="lead d-none d-sm-block"> Details and Records</p>
 
        
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                    <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div className="rotate">
                            <i className="fa fa-bar-chart fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Products Approved</h6>
                        <h1 className="display-4">{ApprovedProd}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body bg-danger">
                        <div className="rotate">
                            <i className="fa fa-pie-chart fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Discarded Products</h6>
                        <h1 className="display-4">{DiscardedProd}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100">
                    <div className="card-body bg-info">
                        <div className="rotate">
                          <i className="fa fa-list fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Product Approval Requests</h6>
                        <h1 className="display-4">{ReqProd}</h1>
                    </div>
                </div>
            </div>

        </div>
 
        <hr/>
         
 
    </div>
    )
}
 
export default Dashboard