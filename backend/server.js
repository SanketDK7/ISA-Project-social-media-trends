const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection URL
const url = 'mongodb://localhost:27017';

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to MongoDB');

    const db = client.db('User_Database'); // Replace 'your_database_name' with your actual database name

    // Define your routes and handle login logic here
    // Example:
    app.post('/login', (req, res) => {
        const { username, password } = req.body;

        // Check credentials against MongoDB
        db.collection('users').findOne({ username, password }, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            if (result) {
                res.send('Login successful');
            } else {
                res.send('Invalid username or password');
            }
        });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
