const express= require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
// const cockieParser = require('cockie-parser')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user');
const app  =  express();
app.use(bodyParser.urlencoded({extended : false}))
app.use(cookieParser())
app.use(adminRoutes);
app.use(userRoutes);
app.use((req,res)=>{
  res.status(404).send('<h1>Page not found</h1>')
})
app.listen(3000)
