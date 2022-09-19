const express = require("express");
const {adminLogin,getNewApplication,updateProcessingApp,updateApprovedApp,updateRejectApp,getProcessingApp,getApprovedApp,getApplications,getBookingSlots,slotUpdate,slotDuplicate} = require("../controllers/adminControllers");
// const {} = require('../controllers/userControllers')
// const {protect} = require("../middlewares/authMiddlewares")
const router = express.Router();


router.route("/login").post(adminLogin);
router.route("/getnewapplication").get(getNewApplication)
router.route("/processingApp/:id").patch(updateProcessingApp)
router.route("/approvedApp/:id").patch(updateApprovedApp)
router.route("/rejectApp/:id").patch(updateRejectApp)
router.route("/getprocessingApp").get(getProcessingApp)
router.route("/getapprovedApp").get(getApprovedApp)
router.get("/getBookingSlots", getBookingSlots);
router.route("/getApplications").get(getApplications)
router.post("/slotUpdate", slotUpdate);
router.patch("/slotDuplicate", slotDuplicate);




module.exports = router;