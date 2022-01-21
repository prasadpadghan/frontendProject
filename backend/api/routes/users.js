var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

router.get('/', function (req, res, next) {

  var userDetails = new userModel({
    efname: '',
    mobno: '',
    eemail: '',
    euname: '',
    epass: '',
    eaddress:'',
    epincode: '',
    esatate: '',
    egender: '',
    eage: '',
    ejoiningDate: '',
  });
  userDetails.save(function(err, req1){
    if(err) throw err

    res.render('index', { title: 'user records inserted' });
  })

});
router.post('/empregister', function(req, res, next) {
 
  var userDetails = new userModel({
    // name: req.body.Name,
    // email: req.body.Email,
    // password: req.body.Password,
    efname: req.body.efname,
    mobno: req.body.mobno,
    eemail: req.body.eemail,
    euname: req.body.euname,
    epass: req.body.epass,
    eaddress:req.body.eaddress,
    epincode: req.body.epincode,
    esatate: req.body.esatate,
    egender: req.body.egender,
    eage: req.body.eage,
    ejoiningDate: req.body.ejoiningDate,

  });
 
  userDetails.save().then(doc=>{
    res.status(201).json({
        message:"Inserted Successfully",
        results:doc
    });
})

.catch(err=>{
    res.json(err);
});
 
  
});
 
module.exports = router;
