const mongoose=require('mongoose')
const User=require('./SchemaModel/User')
const connectDB=require('./db')
const express=require('express')
const app=express()
const port=5000

const cors=require('cors')
app.use(cors())
app.use(express.json())
const routes=require('./routes')

app.use(routes)

app.use((err,_req,res,_next)=>{
    const message=err.messaage?err.messaage:'Server Error Occorred'
    const status=err.status?err.status:500
    res.status(status).json({
        message
    })
})
connectDB('mongodb://127.0.0.1:27017/newUser')
.then(async()=>{
    console.log('Database connected')

        app.listen(port,()=>{
         console.log('server is running')
        })
    
   
})
.catch((e)=>console.log(e))