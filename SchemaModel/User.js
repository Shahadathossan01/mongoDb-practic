const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema=new Schema({
    name:String,
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    age:{
        type:Number,
        min:1,
        max:100,
        // validate:{
        //     validator:v=>v%2==0,
        //     message:props=>`${props.value} is not an even number`
        // }
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    },
    bestFriend:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }],
    hobbies:[String],
    address:{
        street:String,
        city:String
    }
})

userSchema.methods.sayHi=function(){
    console.log(`Hi, I am ${this.name}`)
}

userSchema.statics.findByName=function(name){
    return this.where({name: new RegExp(name,'e')})
}
userSchema.virtual("nameEmail").get(function(){
    return `${this.name} ${this.email}`
})
const User=mongoose.model('User',userSchema)

module.exports=User