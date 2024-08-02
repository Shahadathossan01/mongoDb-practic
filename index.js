const express=require('express')
const app=express()
const port=500;
app.get('/',(req,res)=>{
    res.send('hello, I am starting mongoDB practic')
})

app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})