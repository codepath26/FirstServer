const express= require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const app  =  express();
//this is the simple type
// app.use((req,res,next)=>{
//   console.log("this is the first marvell")
//   next();
// })
// app.use((req,res,next)=>{
//   console.log("this is second marvell")
//   res.send('<h1>hellow from Express</h1>')
// })

 //parse the data 
 app.use(bodyParser.urlencoded({extended : false}))


app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res)=>{
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)