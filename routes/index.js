const express = require('express');
const router = express.Router();
const database = require('../models/index.js')


const title = '到位APP - 高品质上门服务直约平台, 家政服务, 上门按摩, 上门维修, 搬家, 安心到家!'
/* GET home page. */
router.get('/', function(req, res, next) {
  database.shop.find({},function (err,result) {
    if (!err){
      res.render('index',{title,result});
    }
  })

});

router.get('/service', function(req, res, next) {
  database.service.find({},function (err,result) {
    if (!err){
      res.render('service',{title,result});
    }
  })

});


router.get('/seller', function(req, res, next) {
  database.item.find({},function (err,result) {
    if (!err){
      res.render('seller',{title,result});
    }
  })

});

module.exports = router;
