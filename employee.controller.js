const employee = require('../ new javascript/employee.model')

exports.create  = async (req, res)=>{
 
    const empdata =new employee({
        fname : req.body.fname,
        lname:req.body.lname,
        age:req.body.age,
        contact:req.body.contact,
    })

    try{
        const employee = await employee.find()
        console.log(employee)
        res.status(200).send(json);
    }
    catch(err){
        console.log("hey there is some part",err)
        res.status(404).send('error found');
    }
}


exports.getbyid = async(req, res,next)=>{
  const_id = req.params.id
  try{
      const depid = await employee.findbyid({_id})
      console.log(depid)
      res.status(200).send('error found')

  }
  catch (err){
      console.log('there is some error',err)
  }
}
exports.create=async(req, res,next) =>{
    console.log(req.body)
    const depdata = new employee({
        employee_name:req.body.employee_name
    });

try{

    const depcreate = await depdata.save();
    console.log(depdata);
    res.status(200).json(depcreate);
}
catch (err){
    console.log('error found the buddy',err)
    res.status(404).send('error found')
}
}

exports.update =async  (req, res,next)=>{
    const depdata = {
        employee_name:req.body.employee_name,
        dep_status:req.body.dep_status
    }
    const_id = req.params.id

    try{

        const updatedata = await employee.findbyidAndupdate(_id,depdata)
        console.log("data updated",updatedata)
        res.status(200).json(updatedata)
    }
    catch(err){
        console.log("error found",err)
        res.status(404).send('error  found')
    }

}

exports.delete = async (req, res,next)=>{
const_id = req.params.id

try{
    const deletedata = await employee.findbyidanddelete(_id)
    console.log('data deleted')
    res.status(200).json(deletedata)
}
catch{
    console.log('error deleting')
    res.status(404).json('error deleting')
}
}


