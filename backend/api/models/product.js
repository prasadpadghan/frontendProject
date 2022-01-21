const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://projectLocalMart:localMart123@clusterlocalmart.zktej.mongodb.net/localMartDataBase?retryWrites=true&w=majority',{useNewUrlParser:true});
var conn =mongoose.Collection; 

var productSchema= new mongoose.Schema({
ptitle:{
    type: String
  },
pbrand:{
    type: String
  },
pdiscription:{
    type: String
  },
pprise:{
    type: String
  },
pimg:{
    type: String
  },

})

var productModel = mongoose.model('product', productSchema);
module.exports=productModel;