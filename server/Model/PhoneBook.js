const mongoose = require('mongoose')

const PhoneBookSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})

module.exports =  mongoose.model('PhoneBook',PhoneBookSchema)
