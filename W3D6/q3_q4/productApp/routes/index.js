var express = require('express');
var router = express.Router();
const product=require('../module/product')
let items=[
  new product("cape",15,"covers your head", 322),
  new product("boots",55,"covers your feet", 23),
  new product("umbrella",5,"shields your body", 115),
  new product("headphones ",36,"lets boom together", 104)]

  let shoppingCart=[];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title:"Products",items:items });
});
// router.get('/item',(req,res)=>{
//   let x=req.query.id;
//   let result=items.filter(y=>(y.id==x))[0];
//   res.render('item',{title:"you selected", item:result});
//   console.log(result)
// });

router.get('/product',(req,res)=>{
  let x=req.query.id;
  let result=items.filter(y=>(y.id==x))[0];
  shoppingCart.push(result);
  res.render('item',{title:"you selected", item:result});
  
});

module.exports = router;
