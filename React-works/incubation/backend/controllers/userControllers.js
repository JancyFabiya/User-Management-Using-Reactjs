const asyncHandler =require('express-async-handler');
const User = require('../models/userModel');
const UserApplication = require('../models/userApplicationModel')

const generateToken = require('../utils/generateToken');



const registerUser = asyncHandler(async (req,res) =>{
    const {name,phonenumber,email,password}=req.body;
    
    const userExists=await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }
    const user = await User.create({
        name,
        phonenumber,
        email,
        password,
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            phonenumber:user.phonenumber,
            email:user.email,
            // password:user.password,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(400)
        throw new Error("Error Occured!")
    }
    // res.json({
    //     name,
    //     email,
    // })
})


const authUser = asyncHandler(async (req,res) =>{
    const {email,password}=req.body;
    
    const user=await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            phonenumber:user.phonenumber,
            email:user.email,
            // password:user.password,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid Email or Password!")
    }

  
})



const getUserbyId=async(req,res)=>{
    const {id}=req.params
    const UserbyID=await User.findById(id)
    res.json(UserbyID)

}


const editUserbyId=async(req,res)=>{
    const {id}=req.params
    const editUser=await User.findByIdAndUpdate(id,req.body)
    res.json(editUser)
}


const deleteUser=async(req,res)=>{
    const {id}=req.params
    const deleteuser=await User.findByIdAndDelete(id)
    res.json(deleteuser)
}

/*   User Application */
const userapplication = asyncHandler(async (req,res) =>{
    const {email,name,address,city,state,phonenumber,companyname,
    teamandbackground,companyandproduct,problem,solution,valueproposition,
    competators,revenue,potentialmarketsize,plan,type,businessproposal,userid,status}=req.body;    
   
    const applicationExists=await UserApplication.findOne({email})

    if(applicationExists){
        res.status(400)
        throw new Error('Application Already Exists')
    }
    const userApplication = await UserApplication.create({
        email,name,address,city,state,phonenumber,companyname,
                    teamandbackground,companyandproduct,problem,solution,valueproposition,
                    competators,revenue,potentialmarketsize,plan,type,businessproposal,userid,
                    status:"pending",
                    bookingStatus: false,
                    slotCode: "null",
    })

    if(userApplication){
        res.status(201).json({
            userApplication
         })
    }else{
        res.status(400)
        throw new Error("Error Occured!")
    }
    // res.json({
    //     name,
    //     email,
    // })
})

/* get application */

const getApplication=async(req,res)=>{
    const id=req.params.id
    const getappli=await UserApplication.find({userid:id})
    console.log(getappli);
    res.json(getappli)
}
// /* get newapplication in admin side */
// const getNewApplication=async(req,res)=>{
//     const getnewAppli=await UserApplication.find({status:'pending'})
//     console.log(getnewAppli)
//     res.json(getnewAppli)

// }


module.exports ={registerUser,authUser,getUserbyId,editUserbyId,deleteUser,userapplication,getApplication};