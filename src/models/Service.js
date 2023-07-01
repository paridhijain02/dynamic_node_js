const mongoose=require('mongoose')
const Service=mongoose.Schema({
    icon:String,
    title:String,
    subTitle:String,
    links:[
            {
                label:String,
                url:String,
            },  
        ],
});
module.exports=mongoose.model('service',Service);

