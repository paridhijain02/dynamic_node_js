const mongoose=require('mongoose')
const Contact=mongoose.Schema({
    emailid:String,
    phonenumber:String,
    query:String
});
module.exports=mongoose.model('query',Contact);


