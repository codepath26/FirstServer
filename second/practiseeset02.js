const express= require('express');
const bodyParser = require('body-parser');
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
//use middleware with routes 
app.use('/' , (req,res,next)=>{
  // console.log("run")
  next();
})
app.use('/add-product' , (req,res,next)=>{
  // console.log('product details middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="number" name="size"><button>Add Product</button></form>')
})
app.use('/product',(req,res)=>{
      console.log(req.body)
      res.redirect('/')

})
app.use('/' ,(req,res,next)=>{
  // console.log("this is second marvell")
  res.send('<h1>hellow from Express</h1>')
})


app.listen(3000)