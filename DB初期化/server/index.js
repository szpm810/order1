const express=require('express')
const mongoose= require('mongoose')
const config= require('./config/dev')

const customerRoutes =require('../server/routes/custmer')
const employeeRoutes =require('../server/routes/employee')

const path =require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
}).then(
    () => {
        if (process.env.NODE_ENV!=='production'){
        const fakeDb =new FakeDb()
       //fakeDb.pushProductsToDb()
    }
}
)

const app=express()

app.use('/api/customer',customerRoutes)
app.use('/api/employee',employeeRoutes )


if (process.env.NODE_ENV==='production'){
const appPath=path.join(__dirname, '..','dist','resev-app')
 app.use(express.static(appPath))
 app.get("*",function(req,res) {
     res.sendFile(path.resolve(appPath,'index.html'))
 })
}

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
    console.log('I am running!')
})
