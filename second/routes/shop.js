const express = require('express')
const router = express.Router();


router.get('/' ,(req,res,next)=>{
  // console.log("this is second marvell")
  res.send('<h1>hellow from Express</h1>')
})

module.exports = router;