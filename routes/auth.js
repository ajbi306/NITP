const user = require("../models/user");
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { findOne } = require("../models/post");

router.post("/register",async(req,res) => {

    try{

    const user1 = await user.findOne({username: req.body.username});

    if(user1){
        res.status(404).json("username already found");
    }else{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);

        
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
    });
   
    const user1 = await newUser.save();
     res.status(200).json(user1);

    }
}

    catch(err){
        console.log(err);
        res.status(500).json(err);
    }


});


router.post("/login", async(req, res)=>{
    try{

        const user2 = await user.findOne({username:req.body.username})
        if(user2){

        const validate = await bcrypt.compare(req.body.password, user2.password);
        if(validate){

        const {password, ...others} = user2._doc;
         res.status(200).json(others);
        }else 
        res.status(404).json("Wrong Credentials");

        }else
        res.status(404).json("Wrong Credentials");
      


     }catch(err){

              res.status(400).json(err);
  
    }
}); 

module.exports = router;
