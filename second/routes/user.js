const express = require('express')
const router = express.Router();
const fs = require('fs')


router.get('/' ,(req,res,next)=>{
  fs.readFile('data.txt',(err ,data)=>{
    if(err){
      console.log(err);
      data = "no data available"
    }else{
      res.send(`${data}<form action="/message" method="POST"><input type="text" name="message"><button>send</button></form>`)
    }
  })
  
 
})
router.post('/message', (req,res)=>{
  const message = req.body.message
  const username= req.cookies.username
  console.log(username , message);
  fs.writeFile('data.txt' , `${username} :${message}`,{flag :'a'},(err)=>{
 if(err){
  console.log(err);
 }else{
  res.redirect('/')
 }
  } )
  
})

module.exports = router;