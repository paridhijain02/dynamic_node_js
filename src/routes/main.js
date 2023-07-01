const express=require('express')
const { route } =require('express/lib/application')

const Detail =require("../models/Detail")
const Slider =require("../models/Slider")
const Service =require("../models/Service")
const Contact =require("../models/Contact")
const Album =require("../models/Album")
const Banner1 =require("../models/Banner1")
const routes=express.Router()
routes.get("/", async(req,res)=>{
    const details = await Detail.findOne({'_id':'649b43c2571bb12e37833892'})
    const sliders = await Slider.find()
    const services = await Service.find()
    const banner1 = await Banner1.findOne({'_id':'649ec0989083d22c490e95d8'})
    console.log(banner1);
    res.render("index",{details:details,sliders:sliders,services:services,banner1:banner1})
})

routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({'_id':'649b43c2571bb12e37833892'})
    const albums = await Album.find()
    res.render("gallery",{details:details,albums:albums})

    // res.send("gallery")
})
routes.post("/process-contact-us",async(req,res)=>{
    console.log(req.body);
    try{
        const data=await Contact.create(req.body)
        res.redirect("/");
    }catch(e){
        console.log(e);
        res.redirect("/");
    }
})
module.exports=routes