const express =require('express');
const cors=require('cors');
const bodyParser =require('body-parser');
const mongoose=require('mongoose');
const { request } = require('express');
mongoose.connect('mongodb://localhost:27017/allContact').then(res=>
{
    console.log("mongodb connection established");
});
//create the database model for db operations and queries
let Contact =mongoose.model("address",new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    phone:{type:String},
    email:{type:String},
    picture:{type:String}
},{
    collection:'address'
}))
//start the app at http://localhost:4300
const app = express(); //create the express web app object
const port=4300;
app.use(cors({
    origin:"*",
    methods:"*"
}))

app.use(bodyParser.json());

// -----------------------------------------------------------------------------
app.get("/",function(req,res){
    res.send("<h3> Welocome to Address api server </h3>")
});
// -----------------------------------------------------------------------------

app.get("/contacts",function(req,res){
    Contact.find((err,contacts)=>{
        if(err){
            res.send(err);
        }
        res.json(contacts); 

    })
});
// -----------------------------------------------------------------------------
app.get("/contacts/:id",function(req,res){
    let id=Number(req.params.id);
    Contact.findOne({"id":id},function(err,data){
        if(err){
            res.send(err);
        }
        res.json(data);
    })
})
// -----------------------------------------------------------------------------
app.delete("/contacts/:id", function (req, res) {
    let id = req.params.id;
    Contact.deleteOne({ "id": id }, function (err, data) {
        if (err) {
            res.send(err);
        }
        Contact.find(function (err, data) {
            if (err) {
                res.send(err);
            }
        });
        res.json(data);
    })
})
// -----------------------------------------------------------------------------
app.post("/contacts", function (req, res) {

    let contact = new Contact()
    Contact.findOne().sort({id : -1})
    .then((data)=>{
    //specif the values to the fields
    contact.id=data.id+1;
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.picture = req.body.picture;

    //save the model to DB
    contact.save(function (err) {
        if (err) {
           res.send(err);
        }
        Contact.find(function (err, data) {

            if (err) {
                res.send(err);
            }
            res.json(data);

        });

    });

});

});

// ----------------------------------

app.put("/contacts/:id", function (req, res) {

    let id = req.params.id;
    let contact = new Contact();
    //update the model to DB
    Contact.updateOne({ "id": id },
        {
            $set: {
                "name": req.body.name,
                "email": req.body.email,
                "phone": req.body.phone,
                "picture": req.body.city,

            }
        }, 
        function (err) {
            if (err) {
                res.send(err);
            }
        })
    Contact.find(function (err, data) {

        if (err) {
            res.send(err);
        }
        res.json(data);
    })

})

// ----------------------------------
app.use(bodyParser.json()) //--application/json
app.listen(port,()=>console.log(`phonebook server app started on port ${port}`))

