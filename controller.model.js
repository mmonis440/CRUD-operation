const mongoose = require('mongoose');

const employeeschema = mongoose.schema({
    fname:{type: 'string',required: true,minLength:['15','must be 15',{value}],maxLength:'30'},
    lname:{type: 'string',required: true,minLength:['15','must be 15',{value}],maxLength:'30'},
    age:{type:'number',required: true,minLength:['10','must be 10,got only{value}'],maxLength:'30'}, 
    contact:{type:number,minLength:['18','must be 18,got only{value}'],maxLength:'30'},
    gender:{type:String,minLength:['18','must be 18,got only{value}'],maxLength:'30'},
    department_id:{type:mongoose.schema.Type.objectId,required:true,ref:"departmentid"},
    timestamp:true

})

model.exports= mongoose.model('workers',employeeschema)