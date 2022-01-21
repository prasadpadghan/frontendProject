var express = require('express');
var router = express.Router();
var productModel=require ('../models/product');
var multer = require('multer');


const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});


// Multer Mime Type Validation
var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });
  


/* GET product listing. */
router.get('/', function (req, res, next) {

    var productDetails = new productModel({

        ptitle:'',
        pbrand:'',
        pdiscription:'',
        pprise:'',
        pimg:'',
  });
  productDetails.save(function(err, req1){
    if(err) throw err

    res.render('index', { title: 'product inserted' });
  })

});

router.post('/addProd',upload.single('pimg') ,function(req, res, next) {
 
    const url = req.protocol + '://' + req.get('host')

    var productDetails = new productModel({
    ptitle:req.body.ptitle,
    pbrand:req.body.pbrand,
    pdiscription:req.pbody.pdiscription,
    pprise:req.body.pprise,
    pimg:url + '/public/' + req.file.filename
  });
 
  productDetails.save().then(result=>{
    res.status(201).json({
        message:"Inserted Successfully",
        results:doc
    });
})

.catch(err=>{
    res.status(500).json(err);
});
});
 
module.exports = router;
