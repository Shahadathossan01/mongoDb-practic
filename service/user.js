const User=require('../SchemaModel/User')
const findUser=async()=>{
    return User.find()
}
const createUser=async(name,email)=>{
    const newUser=await User({
        name:name,
        email:email
    })
    return await newUser.save()
}
module.exports={findUser,createUser}