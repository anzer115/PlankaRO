const mongoose = require('mongoose') ;
const joi = require('joi') ;
const userSchema = mongoose.Schema({
    name: {
          type: String,
           required: true,
    },

    email: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
         required: true,
    },

     eventtype : {
        type: String,
       required: true,
    },

    phone: {
        type: Number,
        required: true,
    },
   
     query: {
        type: String,
     }
}) ;

function validateModel(data){
    const schema = joi.object({
        name: joi.string().required(),
        email : joi.string().required(),
        gender : joi.string().required(),
        eventtype : joi.string().required(),
        phone : joi.number().required(),
        query: joi.string().optional(),
    }) ;
    const {error} = schema.validate(data) ;
    return error ;
}

const userModel = mongoose.model('customer',userSchema) ;
module.exports = {validateModel,userModel} ;

