const router=require('express').Router();
const {allUsers,createUserController,updateUserController,userGetByIdController,deleteUserController}=require('../controller/auth')

router.get('/users',allUsers)
router.post('/users',createUserController)
router.get('/user/:id',userGetByIdController)
router.delete('/user/:id',deleteUserController)
router.put('/user/:id',updateUserController)
module.exports=router