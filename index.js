const express = require("express");
const moongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");

var cors = require("cors");
const multer = require("multer");
const path = require("path");
app.use(cors())
dotenv.config();
app.use(express.json()); // to support URL-encoded bodies
app.use("/images", express.static(path.join(__dirname,"/images")))



moongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
})
.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null, "images");
    }, 

    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});


const upload = multer({storage:storage});

app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);



app.listen(4000, () => {
  console.log("Server is listening");
});


// moongoose.connect(process.env.Mongo_url,
//     {useNewUrlParser: true, 
//     useUnifiedTopology:true})
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));
