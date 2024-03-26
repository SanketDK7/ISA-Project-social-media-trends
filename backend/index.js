const express = require('express')
const app = express() 
const mongoose = require('mongoose')


app.use(express.json()); // middleware para permitir 
app.get('/',(req,res)=>{
    res.send("Hello update");
});


app.post('/api/users', (req,res) => {
    console.log(req.body);
    res.send(req.body);
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


