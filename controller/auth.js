const User=require('../SchemaModel/User')
const {allUsersService,createUserService}=require('../service/auth')
const allUsers=async(req,res,next)=>{
    try{
        const users=await allUsersService()
        res.status(201).json(users)
    }catch(error){
        next(error)
    } 
}
const createUserController=async(req,res,next)=>{
    const {name,email}=req.body
    try{
        await createUserService(name,email)
        res.status(201).send(newUser)
    } catch(error){
        next(error)
    }
}
const userGetByIdController=async(req,res)=>{
    const id=req.params.id;
    const user=await User.findById(id)
    res.send(user)
}
const deleteUserController=async(req,res)=>{
    const id=req.params.id;
    const user=await User.deleteOne({_id:id})
    res.send(user)
}
const updateUserController=async(req,res)=>{
    const id=req.params.id;
    const {name,email}=req.body
    console.log(id)
    const findUser=await User.findById(id).updateOne({_id:id},{$set: {name,email}})
    res.send(findUser)
}
module.exports={allUsers,createUserController,userGetByIdController,deleteUserController,updateUserController}