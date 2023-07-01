const mongoose=require('mongoose')
const Banner1=mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    button:String,
    buttonUrl:String
});
module.exports=mongoose.model('banner1',Banner1);