const error=require('../utils/error')
const {findUser,createUser}=require('../service/user')
const allUsersService=async()=>{
    try{
        return users=await findUser()
    }catch(e){
        throw error()
    }
}
const createUserService=async(name,email)=>{
    return await createUser(name,email)
}

module.exports={allUsersService,createUserService}