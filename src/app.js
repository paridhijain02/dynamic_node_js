const express = require("express");
const hbs = require("hbs")
const app = express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose")
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const Album =require("./models/Album")
const Banner1 =require("./models/Banner1")
// app.use(bodyParser.json({
    // extended:true
// }))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

mongoose.set("strictQuery", false);
//db collections
mongoose.connect("mongodb://0.0.0.0:27017/dynamic_website_db",(err)=>{
    if(err) console.log(`db not connected : ${err}`);
    else
    {
        // Banner1.create(
        //         {
        //             title:"Banner1",
        //             subTitle:"vhjvk bhkhkj jbknl bob jlnb lknoin  buib kn lkn  oi kl bol jhb hjb hjbh bh hg bb h gjb i vh bj vug jf ug hi yufy tdyfguy gty d fvuy c yty g",
        //             imageUrl:"https://cdn.pixabay.com/photo/2023/06/08/08/27/plant-8049076_1280.jpg",
        //             button:"Click Here",
        //             buttonUrl:"geeksforgeeks.org/data-structures/",
        //             imageUrl:"/static/images/eren.webp"
        //         },
        //     )

        // Album.create(
        //         {
        //             imageUrl:"/static/images/eren.webp"
        //         },
        //         {
        //             imageUrl:"/static/images/Eren_and_Mikasa.webp"
        //         },
        //     )

        // Slider.create(
        //     {
        //         title:"ABCVH",
        //         subTitle:"dhbebvciwkjeb  wjnf",
        //         imageUrl:"/static/images/eren.webp"
        //     },
        //     {
        //         title:"ABCVH",
        //         subTitle:"dhbebvciwkjeb  wjnf",
        //         imageUrl:"/static/images/Eren_and_Mikasa.webp"
        //     },
        // )

        // Detail.create({ 
        //     brandName:"Red Sheep", 
        //     brandIconUrl:"DSVdsvdv", 
        //     links:[ 
        //         { 
        //             label:"Home", 
        //             url:"/" 
        //         },             
        //         {
        //             label:"Services", 
        //             url:"/services" 
        //         },
        //         { 
        //             label:"Gallery", 
        //             url:"/gallery" 
        //         },             
        //         {
        //             label:"About", 
        //             url:"/about" 
        //         },
        //         {
        //             label:"Contact us", 
        //             url:"/contactus" 
        //         }
        //     ] 
        // }) 

        // Service.create({ 
        //     icon:"fa-solid fa-house service-icon", 
        //     title:"Tutorial", 
        //     subTitle:"Cs CSS CSS CSSSS", 
        //     links:[ 
        //         { 
        //             label:"Home", 
        //             url:"/" 
        //         },             
        //         {
        //             label:"Services", 
        //             url:"/services" 
        //         }
        //     ] 
        // }) 
        console.log("db connected")
    }
    
}); 


app.listen(process.env.PORT | 5555,()=>{
    console.log("server started")
})

