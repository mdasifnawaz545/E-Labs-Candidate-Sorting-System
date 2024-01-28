const express = require('express')
const mongoose = require('mongoose');
const app = express();
let port = 8080;

// Requiring Files

// const { expressError } = require('./utils/expressError');
// const { schema } = require('./models/studentSchema');// how we can import all the thing with a single objcet i.e using only schema.
const Student=require('./models/studentSchema');
// const {validation}=require('./schemaValidation');


// Connecting with the database

let mongoDB_URL = "mongodb://127.0.0.1:27017/ELabs_Recruitment";

main()
    .then(() => {
        console.log("Connected With ELabs_Recruitment Database.");
    })
    .catch((err) => {
        console.log("Not Connected.");
    })

async function main() {
    await mongoose.connect(mongoDB_URL);
}


// Schema Validation
const validation=async(req,res,next)=>{
    let {error}=validation.validate(req.body);
    if(error)
    {
        throw new expressError(404,"Validation Error is there");
    }
    else 
    {
        next();
    }

}


// Listening to Port

app.listen(port, (req, res) => {
    console.log(`Listening to Port ${port}`);
})

// Home Route
app.get("/", (req, res) => {
    res.send("Salaam...");
})


// Candidate Form Page Routes

app.get("/form",(req,res)=>{
    try{
        res.render("form.ejs");
    }
    catch(err){
        console.log(err.error);
    }
})


// Home Page Route

app.get("/domains",(req, res) => {
    try {
        res.send("reactPage");
    }
    catch (err) {
        console.log(err.error);
    }
});


let initData=()=>{
    let student_1=new Student({
        domain:["Web Development","App Development"],
        kiitemail:"22052736@kiit.ac.in",
        name:"Md Asif Nawaz",
        email:"mdasifnawaz545@gmail.com",
        roll:"22052736",
        gender:"Male",
        contactNumber:"7761054431",
        yearOfStudy:"2nd",
        branch:"CSE",
        links:{
            resume:"https://drive.google.com/file/d/1H_RMDI9CDBveYyy5w0VNjXymvtnfPHCk/view?usp=drive_link",
            github:"https://github.com/mdasifnawaz545",
            linkdin:"https://www.linkedin.com/in/mdasifnawaz/",
        },
        existSocieties:"Not Yet",
        whyElabs:"Good Society",
        anythingElse:"Nothing",
    });
    student_1.save();

}

// initData();

// Respective Domain Route

app.get("/domain/webdev",async(req,res)=>{
let data=await Student.find();
})