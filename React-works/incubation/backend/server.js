const express = require("express")
const dotenv =require('dotenv');
var db=require('./config/connection')
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

// const { default: Login } = require("../forntend/src/screens/Login/Login");

const app = express();
dotenv.config();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running..")
})

app.use('/api/users',userRoutes)
app.use('/api/admin',adminRoutes)

// app.get('/api/login',(req,res)=>{
//     res.json(Login);
// })

app.use(notFound)
app.use(errorHandler)


const PORT =process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on PORT ${PORT}`))
