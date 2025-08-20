const mongoose = require("mongoose");
const validator = require("validator")

// schema
// mongoose schema defines structure of document, default values, validations etc
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true, trim: true, minlength: [3, 'minimum two letters'], maxlength: 30 },
    email: {
        type: String, required: true, unique: [true,"Email already present"], lowercase: true,
        validate(value){ if(!validator.isEmail(value)){ throw new Error("Email is Invalid") }  }
    },
    phone: { type: Number, minlength: 10, maxlength: 12, required: true, unique: [true,"Phone already present"], 
        validate(value){ if(value<0){ throw new Error("phone number can't be negative") }  }
        // validate:{ validator: function(value){ return value.length<0; }, message:"phone number can't be negative" }
    },
    address: {type: String, require: true}
    
    // date: { type: Date, default: Date.now }
    
})

// collection creation
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;