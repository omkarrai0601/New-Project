
const mongoose = require("mongoose");

const courseModel = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imgURL:{
        type:String,
        require:true
    },
    University_name:{
        type:String,
        require:true,
    },
    linkedin_URL:{
        type:String,
        require:true
    },
    learning_time:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    Certificate :{
        type:String,
        require:true
    },
    eligibility_criteria:{
        type:String,
        require:true
    }
})







module.exports = mongoose.model("Courses",courseModel);