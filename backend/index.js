const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const User = require('./models/user.model.js');


app.use(express.json()); // middleware para permitir 
app.get('/',(req,res)=>{
    res.send("Hello update");
});


//to view listings
app.get('/api/users', async(req,res) =>{
    try {
        const users = await User.find({});
        res.status(201).json(users);
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})



//get specific id based user 
app.get('/api/users/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);      
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})


app.post('/api/users', async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }

});


//update user credentials 
app.put('/api/user/:id', async(req, res) =>{
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
});


//delete a user 

app.delete('/api/user/:id', async(req,res) =>{
    try{
        const {id} = req.params;
       const user = await User.findByIdAndDelete(id);


        if( !user ) {
            return res.status(404).json('No user found');
          
        }
        res.status(200).json({message: "Product deleted successfully"});


    }catch(error){
        res.status(500).json({message: error.message});
    }
})




mongoose.connect("mongodb+srv://kshivaniofficial:XH5gDc9RbXC7t4Gg@backenddb.yikx6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
})

.catch((
    console.log("Connection Failed!")
))


