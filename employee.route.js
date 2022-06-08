var express = require('express');
const employeename = require('../ new javascript/employee.controller')

router.get('/',function(req,res){
    return employee.get(req,res)
})

router.create('/',(req, res) => employee.create(req, res))

router.update('/:id',(req, res) => employee.update(req, res))

router.delete('/',function(req,res){
    return employee.delete(req,res)
})

router.patch('/',function(req,res){
    return employee.patch(req,res)
})

model.exports = router ;