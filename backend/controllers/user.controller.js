const bcrypt = require('bcryptjs');
const path = require('path');

const User = require("../models/user.model.js");

const getUsers = async (req,res)=>{
        try {
            const users = await User.find({});
            res.status(201).json(users);
            
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    };
    //logic for get all users 

const singleUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);      
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const createUser = async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }

};

const updateUser =  async(req, res) =>{
    try {
        const {id} = req.params;

        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user){
            return res.status(404).json("No user with this id");
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const delUser =  async(req,res) =>{
    try{
        const {id} = req.params;
       const user = await User.findByIdAndDelete(id);
        if( !user ) {
            return res.status(404).json('No user found');  
        }
        res.status(200).json({message: "User deleted successfully"});


    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const authenticateUser = async (req, res) => {
    try {
        // Extract username/email and password from request body
        const { username, password } = req.body;

        // Find user by username/email in the database
        const user = await User.findOne({ username });

        // If user is not found or password is incorrect, return error
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // If authentication is successful, return success message or token/session
       // res.status(200).json({ message: "Authentication successful", user });
        res.redirect(path.join(__dirname, '../../finalfrontend/index.html'));
    } catch (error) {
        // Handle any errors that occur during authentication
        res.status(500).json({ message: error.message });
    }
};

module.exports={
    getUsers,
    singleUser,
    createUser,
    updateUser,
    delUser,
    authenticateUser
}
