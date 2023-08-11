const express = require('express');
const router = express.Router();
router.get('/login' , (req,res,next)=>{
  res.send('<form action="/username" method="POST"  onsubmit =" document.getElementById("username").value = localStorage.getItem(username)" ><input type="text" name="username" id = "username"><button type = "submit">Login</button></form>')
})
router.post('/username',(req,res)=>{
 
    const username =  req.body.username
    res.cookie('username' ,username);
      res.redirect('/')
})

module.exports = router
