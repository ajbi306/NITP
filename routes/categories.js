const router = require('express').Router();
const category = require("../models/category");


router.post("/", async(req, res) => {
   
   
      const newCategory = new category(req.body);
    try{
        const savedCategory =  await newCategory.save();
        res.status(200).json(savedCategory);
    }catch(err){
        res.status(500).json(err);
    }
   
});

router.get("/:id", async (req, res) => {
   try{
    const get_category = await category.findById(req.params.id);
     try{
        const category1 = await get_category.save();
         res.status(200).json(category1);
     }catch (err){
          res.status(500).json(err);
     }
   }catch {
      res.status(404).json("category not found");
   }
});


module.exports = router;
