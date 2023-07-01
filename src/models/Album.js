const mongoose=require('mongoose')
const Photo=mongoose.Schema({
    imageUrl:String
});
module.exports=mongoose.model('photos',Photo);