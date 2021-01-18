const express=require('express')
const Customer = require('../model/customers')
const router=express.Router()

router.post('/login',function(req,res) {
    // Product.find({},function(err,foundProducts) {
    //    return res.json(foundProducts)

    // })   
})

router.post('/customer',function(req,res) {
  const custno=req.body.custno
  const cname=req.body.cname
  const adress=req.body.adress
  const phone=req.body.phone
  const credit_rating=req.body.credit_rating


  if(!custno){
   return res.status(422).send({errors:[{title:'User error',detail:'Please fill username!'}]}) //invail error の部分はエラーハンドラに変更
  }
  if(!cname){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill email!'}]})
  }
  if(!adress){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }
  if(!phone){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }
  if(!credit_rating){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }

//   User.findOne({email},function(err,foundUser) {//emailが1つ見つかったら探すのを止める
//     if(err){
//       return res.status(422).send({errors:[{title:'User error',detail:'Something went wrong!'}]})　//間違っていた時
//     }
//     if(foundUser){//重複エラー
//       return res.status(422).send({errors:[{title:'User error',detail:'User already Passrord!'}]})　//すでに使用されていた時
//     }
     const customer =new Customer({custno,cname,adress,phone,credit_rating})
       customer.save(function(err){
         if(err){
    //       return res.status(422).send({errors:[{title:'User error',detail:'Something went wrong!'}]})

         return res.json({"customerd":true}) 
         }
       })
    })

module.exports=router