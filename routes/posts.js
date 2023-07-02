const posts = require("../models/post");
const router = require('express').Router();



router.post("/", async(req,res) => {
   
   const newPost = new posts(req.body);
    try{
        const savedPost =  await newPost.save();
        console.log(savedPost);
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }

   
});

router.put("/:id", async(req,res) => {
    try{
   const findpost = await posts.findById(req.params.id);
   
    if(findpost.username === req.body.username){
       
       try{
          
        const updatedPost = await posts.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.status(200).json(updatedPost);
       }catch (err){
        res.status(500).json(err);
       }
   }else{
     res.status(401).json("You can only update your post");
   }
   
}catch(err){
    res.status(500).json(err);
}


}
);

router.delete("/:id", async(req,res) => {
    try{
   const find_post = await posts.findById(req.params.id);
    if(find_post.username === req.body.username){
       
       try{
          await posts.findByIdAndDelete(req.params.id);
          res.status(200).json("post deleted");
        
       }catch (err){
           res.status(500).json(err);
       }
   }else{
     res.status(401).json("You can only delete your post");
   }
}catch(err){
    res.status(500).json(err);
}


});
router.get("/:id", async(req,res) => {
    
try{
      const get_post = await posts.findById(req.params.id);
      res.status(200).json(get_post);
}catch(err){
      res.status(500).json(err);
}

});


router.get("/", async(req, res) => {
    const username = req.query.user;
    const catname = req.query.cat;
    
    try{
        let post1;
        if(username){
            post1 = await posts.find({username});
        }else if(catname){
            post1 = await posts.find({
            categories:{
                $in: [catname],
            },
        });
        }else{
            post1 = await posts.find();
        }

    res.status(200).json(post1);
        
    }catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;
