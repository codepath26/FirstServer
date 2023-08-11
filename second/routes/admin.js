const express = require('express');
const router = express.Router();
router.get('/add-product' , (req,res,next)=>{
  // console.log('product details middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="number" name="size"><button>Add Product</button></form>')
})
router.post('/product',(req,res)=>{
      console.log(req.body)
      res.redirect('/')

})
module.exports = router