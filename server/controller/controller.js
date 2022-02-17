var Userdb = require("../model/model.js")

//create and save new user
exports.create =(req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    //save user data in teh database
    user
    .save(user)
    //res.send(data) "here it rendersand show the data back"
    .then(data =>{
      // here the pages redirects back to new user page  
        res.redirect("/add-user");  
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Error occurred while Creating a create Operation"
        });
    })
}

//retrieve and return all users/retrive and return single user
exports.find = (req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:"not found user with id" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error in retriving user with id" + id})
        })
    }else
  Userdb.find()
  .then(user =>{
      res.send(user)
  })
  .catch(err =>{
    res.status(500).send({message:err.message || "Error occurred while Creating a create Operation"});
})

}
//Update a new identified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        res.status(400).send({message:"Data to update can not be empty"});
        return;
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. May be user with this Id is not found`})
        } else{
            res.send(data)
        }
    })
       .catch(err =>{
         res.status(500).send({message:"Error Update user information"})
       })
    
}
//Delete a user with specified user id in the request
exports.delete =(req, res) =>{

}