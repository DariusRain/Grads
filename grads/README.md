# 🎓Grads

<pre>
Development Process  
Last Updated: 2/28/20
</pre>

# Development process

# Under the hood: 
A Full stack application using Express Mongoose Pug and Nodejs. <br>
Create various route endpoints to to interact with Express. <br>
Save users to the Mongoose Database using the npm package mongoose. <br> 
(no mongoose is not made by MongoDB, but ontop of the MongoDB Drivers). <bre>
Form sign up features and sending the data to the back end via HTTP Requests -> (GET, POST, PUT, DELETE) <br> 
&nbsp;

# Sections: 
[Installation & set up of express mongoose and pug](#setting-up-file-structure-and-installing-dependencies) 
&nbsp;

[Basic Nodejs setup for Express, Mongoose, Pug & Enviroment Variable](#basic-nodejs-setup-for-express-mongoose-pug-and-enviroment-variables) 
&nbsp;

[Setup routes and middlewares required for the server.js file](#setup-routes-and-middlewares-required-for-the-main-server-file) 
&nbsp;

[Create a Mongoose schema for new graduates](#create-a-mongoose-schema-for-new-graduates) 
&nbsp;

[Create pug files for the frontend in the views directory](#create-pug-files-for-the-frontend-in-the-views-directory-pug) 
&nbsp;

[Create Stylesheet and JavaScript files in the public directory.](#create-the-stylesheet-and-javaScript-files-in-the-public-directory) 
&nbsp;

[Create the route handlers and endpoints to home_route.js file](#create-the-route-handlers-and-endpoints-to-home-page) 
&nbsp;

[Process of building the front end layout](#the-process-of-building-the-frontend-layout)
&nbsp;

# Setting up file structure and installing dependencies 

#### Initialize a package.json file
// Command <br>
// npm init -y <br>
&nbsp;

#### Install Express
// Command <br>
// npm i express <br>
&nbsp;

#### Install  Mongoose 
// Command <br>
// npm i mongoose <br>
&nbsp;

#### Install pug
// Command <br>
// npm i pug <br>
&nbsp;

#### Create a server.js, app.js or index.js file (Main server file)
// Commands <br>
// Visual Studio Code: code server.js <br>
// touch server.js -> Then open in editor <br>
&nbsp;

#### Create a public directory (Static files)
//Command <br>
// mkdir public <br>
&nbsp;

#### Create a views directory (for pug files)
// Command <br>
// mkdir views <br>
&nbsp;

#### Create a routes directory
// Command <br>
// mkdir routes <br>
&nbsp;

#### Create a models directory (mkdir models).
// Commmand <br>
// mkdir models <br>
&nbsp;

#### Open server.js <br>
&nbsp;
&nbsp;


# Basic Nodejs setup for Express Mongoose Pug and Enviroment Variables


#### Import express from node_modules
// #1 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
const express = require("express");
```
&nbsp;

#### Import mongoose from node_modules
// #2 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
const mongoose = require("mongoose");
```
&nbsp;

#### Create an instance of an express application
// #3 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
const app = express();
```
&nbsp;

#### Import the path core module
// #4 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
    const path = require('path');
```
&nbsp;

#### Set the view engine for express to pug
// #5 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
app.set("views", path.join(__dirname, 'views'));
```
&nbsp;

#### Set the express view-engine to pug
// #6 in in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
app.set("view engine", "pug");
```
&nbsp;

#### Use the express.static() for the public directory.
// #7 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
app.use(express.static("public"));
```
&nbsp;

#### Create a bash script outside of the project, a quick tool to set enviroment variables.
// Commands  <br>
// nano ../bash/set_enviroment_development.sh  <br>
```bash
    #!/bin/bash
    export DB=yourDatabaseConnectionStringHere
    export PORT=setPort
    export NODE_ENV=development
    echo 'Set the enviroment to development'
```
// Ctrl + s (Save)  <br>
// Ctrl + x (Exit)  <br>
// . ../bash/set_enviroment_development.sh  <br>
// The '.' states the current directory you are in & the path to the bash script you want to execute  <br>
// Should see message from the script that it is set to a specific enviroment.  <br>
&nbsp;

#### Now assign the enviroment variables value using 'process.env' 
// #8 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
const PORT = process.env.PORT,
DB = process.env.DB;
```
&nbsp;

#### Now use the above values to connect to cloud or local database & set server to listen on a port.
// #12 - #13 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
```javascript
mongoose.connect(
    DB,
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    () => {
        console.log(`Connected to ${DB}... `);
    }
);

app.listen(
    PORT,
    () => {
        console.log(`Listening on ${PORT}... `);
    }
);
```
&nbsp;
&nbsp;

# Setup routes and middlewares required for the main server file


#### Create a home route
// Commands  <br>
// Visual Studio Code: code routes/home_route.js  <br>
// touch routes/home_route.js  <br>
&nbsp;

#### Write to 'home_route.js' and create an instance of an express router to be exported
// #1 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
```javascript
const express = require('express'),
router = express.Router();
```
&nbsp;

#### Export that router, then now available for import in any nodejs file.
// #2 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
```javascript
module.exports = router;
```
&nbsp;

#### Then import and use that router as middleware in the server.js file
// #9 & #10 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js") <br>
```javascript
const homeRoute = require("./routes/home_route"),
graduatesRoute = require("./routes/graduates_route");

app.use("/api/home", homeRoute);
app.use("/api/graduates", graduatesRoute);
```
&nbsp;

#### Use built-in express middleware called express.json() so incoming requests can be parsed.
// #11 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js") <br>
```javascript
app.use(express.json());
```

&nbsp;
&nbsp;

# Create a Mongoose schema for new graduates

#### Create graduate.js file in the models directory
// Commands <br>
// Visusal Studio Code: code models/graduate.js <br>
// touch models/graduate.js (Then open it) <br>
&nbsp;

#### Import mongoose and use mongoose.Schema() syntax to make a schema
// #1 in [models/graduate.js]("https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js") <br>
```javascript
const mongoose = require('mongoose'),
GraduateSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: 'https://bit.ly/2wzdL2x'
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    about: {
        type: String,
        default: 'N/A',
        min: 10
    },
    education: {
        type: String,
        default: 'N/A',
        min: 5
    },
    jobtitle: {
        type: String,
        min: 1,
        default: 'N/A'
    }

});
```
&nbsp;

#### Export the schema with the mognoose.model() syntax
// #2 in [models/graduate.js]("https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js") <br>
```javascript
module.exports = mongoose.model('Graduate', GraduateSchema);
```
&nbsp;

#### Import the model in routes/home_route.js
// #3 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
```javascript
const Graduate = require('../models/graduate');
```
&nbsp;
&nbsp;


# Create pug files for the frontend in the views directory
#### Create a index.pug file
// Commands <br>
// touch or code views/index.pug <br>
&nbsp;

#### Create a graduate.pug file 
// Commands <br>
// touch or code views/graduate.pug <br>
&nbsp;

#### Create a errors.pug file 
// Commands <br>
// touch or code views/errors.pug <br>
&nbsp;

#### See [views/]("https://github.com/DariusRain/Grads/blob/master/grads/views")
&nbsp;
&nbsp;
    


# Create Stylesheet and JavaScript files in the public directory


#### Add a script.js and stylesheet.css file in public directory
//Commands <br>
// touch or code public/script.js <br>
// touch or code public/stylesheet.css <br>
&nbsp;

#### See [public/script.js]("https://github.com/DariusRain/Grads/blob/master/grads/public/index.js") & [public/stylesheet.css]("https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css") <br>
&nbsp;
&nbsp;

# Create the route handlers and endpoints for the home page 
&nbsp;

#### Open [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
&nbsp;


#### Create a GET route for the root route for the '/api/home' endpoint and have it render index.pug
// See #4 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
```javascript
    router.get('/', (req, res) => {
        res.status(200).render('index');
    });
```
&nbsp;

#### Create a POST route to the same endpoint '/api/home' for new graduates.
// See #5 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
```javascript
    router.post('/', async (req, res) => {
        const newUser = new Graduate(req.body);
        try {
            console.log('Attempting post request.');
            const savedUser = await newUser.save();
            res.status(201).json({
                message: `Thank you ${req.body.firstname}!`
            });
        }
        catch (error) {
            res.status(401).json({
                message: 'Please fill out the required feilds'
            });
        }
    });
```
&nbsp;

#### Create a GET route with an extended endpoint 'api/home/all'.
// See #6 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js") <br>
```javascript
    router.get('/all', async (req, res) => {
        try {
            const allGraduates = await Graduate.find();
            res.status(200).json(allGraduates);
        }
        catch (err) {
            res.status(500).render('errors',
            {
                error: '500 Server error.'
            });
        }
    });
```
&nbsp;
&nbsp;

# The process of building the frontend layout
- [ ] 📝 Currently on.
// Getting started with the [index.pug]("https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug")file (Home Page) <br>

#### Initial set up for any html doc - open index.pug in editor (Pug ~ Landing Page)
    // See #1 - #4 in [views/index.pug]("https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug") <br>

#### Import public static files to index.pug: [public/script.js]("https://github.com/DariusRain/Grads/blob/master/grads/public/index.js") & [public/stylesheet.css]("https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css") <br>  
    // See #5 in [views/index.pug]("https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug") <br>
