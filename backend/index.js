const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const User = require('./models/user.model.js');


app.use(express.json()); // middleware para permitir 
app.get('/',(req,res)=>{
    res.send("Hello update");
});


app.post('/api/users', async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }


});


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


