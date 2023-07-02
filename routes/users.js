const user = require("../models/user");
const post = require("../models/post");
const router = require('express').Router();
const bcrypt = require('bcrypt');


router.put("/:id",async(req,res) => {
   
   if(req.body.userId === req.params.id){ 
      if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

      }
       try{
          const updatedUser = await user.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.status(200).json(updatedUser);
       }catch (err){
           res.status(500).json(err);
       }

   }else{
      res.status(401).json("You can update only your account");
   }
});


router.delete("/:id", async(req, res)=>{
    
    if(req.body.userId === req.params.id){
         try{
           const finduser = await user.findById(req.params.id);

           try{

             await post.deleteMany({username : finduser.username});
             await user.findByIdAndDelete(req.params.id);
             res.status(200).json("User has been deleted...");

           }catch (err){
             res.status(500).json(err);
           }
         }catch (err) {
            res.status(404).json("user not found");
         }
    }else{
        res.status(401).json("You can only delete your account");
    }
}); 

router.get("/:id", async(req, res)=>{

    try{
        const f_user = await user.findById(req.params.id);
        const {password, ...others} = f_user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
