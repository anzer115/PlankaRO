const express = require('express') ;
const app = express() ;
require('dotenv').config() ;
const mongooseConnection = require('./configuration/mongoose') ;
const {userModel,validateModel} = require('./models/detail') ;


const path = require('path') ;

app.set('view engine', 'ejs') ;
app.use(express.static(path.join(__dirname,'public'))) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;

app.get("/" , (req,res)=>{
    res.sendFile("./public/myproject.html",{root: __dirname}) ;
} )

app.get("/details",(req,res)=>{
    res.render('detailform')
})

app.post("/submit", async (req,res)=>{
    let { name, email, phone , gender, eventtype, query } = req.body;
    let error = validateModel({ name, email, phone , gender, eventtype, query  }) ;
    if(error) {
        res.redirect("/submit") ;
    }
    else{
    let user = await userModel.create({
        name,
        email,
        phone,
        gender,
        eventtype,
        query,
    }) ;
       res.render("Thankyou") ;
    }
}) ;

app.listen(process.env.PORT || 3000) ;