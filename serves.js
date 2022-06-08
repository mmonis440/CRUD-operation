const express = require('express')
const { hostname } = require('os')
const mongoose = require("mongoose")
const app=express()
 const hostname ='localhost'
const port = 8081 ;
const employeeroute = require('../ new javascript/department.route')
const departname = require('../ new javascript/employee.route')
app.use(express.json())
app.use('/employee.route.js',employeeroute)
app.use('/department.route.js',departname)




mongoose.connect('mongodb://localhost:27017/perfectSolution', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>console.log('connected sucessfully to the database'))
.catch((err)=>console.log('could not connect to the database',err))


app.listen(port,()=>{
    console.log(`connected to see the database ${port}`)

})




