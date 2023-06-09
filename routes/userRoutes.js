const express=require('express')
const { body} = require('express-validator');
const { registerUser, loginUser, logoutUser,updateUserPassword,updateUser, blockUnblockUser, getUser, getAllUsers, getMe, changeProfile, forgetPassword, resetPassword, deleteUser } = require('../controllers/userController');
const { checkAuth } = require('../middlewares/auth');
const upload = require('../middlewares/multer');


const router=express.Router()


// all the  routes 
router.post("/user/register",upload.single("profile"),registerUser)
router.post('/user/login',loginUser)
router.get('/user/logout',checkAuth,logoutUser)
// router.get('/user/followunfollow',checkAuth,followUnfollowUser)
router.put('/user/update/user',checkAuth,updateUser)
router.get('/user/myprofile',checkAuth,getMe)
router.get('/user/blockunblock/:id',checkAuth,blockUnblockUser)
router.get('/user/:id',checkAuth,getUser)
router.get('/users',checkAuth,getAllUsers)
router.put('/user/changeprofile/:id',upload.single("profile"),checkAuth,changeProfile)
router.put('/user/forgetpassword',forgetPassword)
router.put('/user/password/reset/:token',resetPassword)
router.delete('/user/:id',checkAuth,deleteUser)
module.exports=router


