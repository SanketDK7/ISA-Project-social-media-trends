const mongoose = require ('mongoose');


const userSchema = new mongoose.Schema({
    username :{
        type: String, 
        required: [true,'Please provide your username']
        },

    email:{
        type:String,
        required: [true, 'Please provide your email'],
        validate : {
            validator: function(v){
                // Expression to check valid email address
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
          }  
    },
    password: {
        type: String, 
        required: [true, "Please provide your password"],
        minlength: [8,"Password should be at least 8 characters"]
        }
    },

    {
        timestamps: true
    }

);


const  User = mongoose.model('User',userSchema)
module.exports=User;