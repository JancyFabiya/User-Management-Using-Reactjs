const asyncHandler =require('express-async-handler');
const UserApplication = require('../models/userApplicationModel')
const Admin = require('../models/adminModel')
const Slot = require('../models/slotModel')
const generateToken = require('../utils/generateToken');

/*Admin Login */
const adminLogin = asyncHandler(async (req,res) =>{
    const {email,password}=req.body;
    
    const admin=await Admin.findOne({email})

    if(admin && (await Admin.find({password:password}))){
        res.json({
            _id:admin._id,
         
            email:admin.email,
            token:generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid Email or Password!")
    }

  
})

/* get newapplication in admin side */
const getNewApplication=async(req,res)=>{
    const getnewAppli=await UserApplication.find({status:'pending'})
    console.log(getnewAppli)
    res.json(getnewAppli)

}
/* update Application -Processing */

const updateProcessingApp = async(req,res)=>{
    const appli=await UserApplication.updateOne(
        {_id:req.params.id},
        {$set:{status:"processing"}}
    )
    res.json({status:true})
}

/* update Application -Approved */

const updateApprovedApp = async(req,res)=>{
    const appli=await UserApplication.updateOne(
        {_id:req.params.id},
        {$set:{status:"approved"}}
    )
    res.json({status:true})
}

/* update Application -Reject */

const updateRejectApp = async(req,res)=>{
    const appli=await UserApplication.updateOne(
        {_id:req.params.id},
        {$set:{status:"reject"}}
    )
    res.json({status:true})
}

/* get Application -processing */

const getProcessingApp=async(req,res)=>{
    const getnewAppli=await UserApplication.find({status:'processing'})
    console.log(getnewAppli)
    res.json(getnewAppli)

}

/* get Application -approved */

const getApprovedApp=async(req,res)=>{
    const getnewAppli=await UserApplication.find({
      $and: [{ status: "approved" }, { bookingStatus: false }],})
    console.log(getnewAppli)
    res.json(getnewAppli)

}

/* get slot */
const getBookingSlots = async (req, res) => {
    try {
      const slots = await Slot.find({});
      res.json(slots);
      
    } catch (error) {
      res.json({error,bookedSlots:false})
    }
    
  };

/* get Approved applications on popup window */

const getApplications = async (req, res) => {
    try {
      const approvedApp = await UserApplication.find({
        $and: [{ status: "approved" }, { bookingStatus: false }],});
      res.json(approvedApp);
    } catch (error) {
      res.json({error,bookedSlots:false})
    }
    
  };


  const slotUpdate = async (req, res) => {
    try {
      const { applicantId, slotId, slotSection } = req.body;
      const application = await UserApplication.findByIdAndUpdate({ _id: applicantId });
      console.log(application);
      const bookSlot = await Slot.findByIdAndUpdate(
        { _id: slotId },
        {
          $set: {
            selected: true,
            companyname: application.companyname,
            user_email: application.email,
          },
        }
      );
      res.json(bookSlot);
    } catch (error) {
      res.json({error,slotUpdate:false})
    }
  };
  
  const slotDuplicate = async(req,res) =>{
    try {
      const{applicantId}=req.body
      const duplicate = await UserApplication.findById({_id:applicantId})
      console.log(duplicate);
      if(!duplicate.bookingStatus){
        await UserApplication.findByIdAndUpdate({_id:applicantId},{$set:{bookingStatus:true}})
        res.status(200).json({ noDuplicate: true });
      }
      res.status(200).json({ duplicateRemoved: true });
    } catch (error) {
      res.json({error,slotDuplicate:false});
    }
  }

module.exports ={adminLogin,getNewApplication,updateProcessingApp,updateApprovedApp,updateRejectApp,getProcessingApp,getApprovedApp,getApplications,getBookingSlots,slotUpdate,slotDuplicate};