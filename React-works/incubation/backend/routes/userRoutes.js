const express = require("express");
const { registerUser, authUser,getUserbyId,editUserbyId,deleteUser,userapplication,getApplication } = require("../controllers/userControllers");
// const {} = require('../controllers/userControllers')
// const {protect} = require("../middlewares/authMiddlewares")
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route('/getuser/:id').get(getUserbyId)
router.route('/getuser/edit/:id').post(editUserbyId)
router.route('/deleteUser/:id').post(deleteUser)
// router.route('/getApplication').get(protect,getApplication)
router.route('/userapplication').post(userapplication)
router.route('/getapplication/:id').get(getApplication);





module.exports = router;