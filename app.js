const express = require("express");
const dbConnect = require("./db/dbconn");

require("dotenv").config();
const cookieParser=require('cookie-parser')
const port = process.env.Port;
const bodyParser = require('body-parser');


const app = express();
// routes

const userRoute=require('./routes/user')

// cnnect with database
dbConnect();
// json middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())





//middlewares for routes
app.use("/user",userRoute) 




app.get("*",(req,res)=>{
  res.status(404).send("page not found")
})



app.listen(port, () => {
  console.log(`sever is start at http://127.0.0.1:${port}`);
});


