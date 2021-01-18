const express=require('express')
const Employee = require('../model/employees')
const router=express.Router()

router.post('/customer',function(req,res) {
    // Product.find({},function(err,foundProducts) {
    //    return res.json(foundProducts)

    // })   
})

router.post('/employee',function(req,res) {
  const empno=req.body.empno
  const ename=req.body.ename
  const yomi=req.body.yomi
  const job=req.body.job
  const hiredate=req.body.hiredate
  const sal=req.body.sal
  const comm=req.body.comm
  const deptno=req.body.deptno

  if(!empno){
   return res.status(422).send({errors:[{title:'User error',detail:'Please fill empno!'}]}) //invail error の部分はエラーハンドラに変更
  }
  if(!ename){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill email!'}]})
  }
  if(!yomi){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }
  if(!job){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }
  if(!hiredate){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }
  if(!sal){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill empno!'}]}) //invail error の部分はエラーハンドラに変更
   }
   if(!comm){
     return res.status(422).send({errors:[{title:'User error',detail:'Please fill email!'}]})
   }
   if(!deptno){
     return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
   }
     const employee =new Employee({empno,ename,yomi,job,hiredate,sal,})
       employee.save(function(err){
         if(err){
    //       return res.status(422).send({errors:[{title:'User error',detail:'Something went wrong!'}]})

         return res.json({"employeed":true}) 
         }
       })
    })

module.exports=router