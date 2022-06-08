 var express = require('express');
 const router = express.router();

 const departmentcontroller = ('../ new javascript/department.constroller.js')

 router.get('/',(req, res) => departmentcontroller.get(req, res))

 router.create('/',(req, res) => departmentcontroller.create(req, res))

router.update('/:id',(req, res) => departmentcontroller.update(req, res))

router.delete('/:id',(req, res) => departmentcontroller.delete(req, res))

model.exports='router';