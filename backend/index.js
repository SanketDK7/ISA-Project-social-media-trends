const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const userRoute = require('./routes/user.route.js')
const youtubeRoute = require('./routes/youtube.route.js')
const twitterRoute = require('./routes/twitterRoute.js');
const redditRoute = require('./routes/reddit.route.js');
const User = require('./models/user.model.js');


app.use(express.json()); // middleware configuration
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/users', userRoute);

app.use('/twitter', twitterRoute);

app.use('/api/youtube', youtubeRoute);

app.use('/reddit', redditRoute);

app.get('/',(req,res)=>{
    res.send("Hello update");
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


