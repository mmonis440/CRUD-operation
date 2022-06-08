var mongoose =require('mongoose');

const departmentschema=mongoose.schema({
    departments_name:
    {type: 'string',required: true}, 
    status:{type:boolean,default:true},
    timestamp:true,

})  
model.export = mongoose.model('Department',departmentschema);
