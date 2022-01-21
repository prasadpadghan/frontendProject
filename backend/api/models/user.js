const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://projectLocalMart:localMart123@clusterlocalmart.zktej.mongodb.net/localMartDataBase?retryWrites=true&w=majority',{useNewUrlParser:true});
var conn =mongoose.Collection; 

var userSchema= new mongoose.Schema({
    efname: String,
    mobno: String,
    eemail: String,
    euname: String,
    epass: String,
    eaddress:String,
    epincode: String,
    esatate: String,
    egender: String,
    eage: String,
    ejoiningDate: Date,
});

var userModel = mongoose.model('user', userSchema);
module.exports=userModel;