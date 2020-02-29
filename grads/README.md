# 🎓Grads

<p>
The Development Process  
Last Updated: 2/28/20
</p>

## The Development process:

### Under the hood: <br>
A Full stack application using Express Mongoose Pug and Nodejs. <br>
&nbsp;

### Sections: <br>
[Installation & set up of express mongoose and pug](#✔ Installation & set up of express mongoose and pug) <br>
&nbsp;

[Basic Nodejs setup for Express, Mongoose, Pug & Enviroment Variable](#✔ Basic Nodejs setup for Express, Mongoose, Pug & Enviroment Variables) <br>
&nbsp;

[Setup routes and middlewares required for the server.js file](#✔ Setup routes and middlewares required for the server.js file -Express) <br>
&nbsp;

[Create a Mongoose schema for graduates](# ✔ Create a Mongoose schema for graduates -Mongoose) <br>
&nbsp;

[Create pug files for the frontend in the views directory](#✔ Create pug files for the frontend in the views directory -Pug) <br>
&nbsp;

[Create Stylesheet and JavaScript files in the public directory & link it to Pug.](#✔ Create Stylesheet and JavaScript files in the public directory) <br>
&nbsp;

[Create the route handlers and endpoints to home_route.js file](#✔ Create the route handlers and endpoints to home_route.js file) <br>
&nbsp;

[Process of building the front end layout](#📝 The process of building the frontend layout)
&nbsp;

# ✔ Installation & set up of express mongoose and pug

- [x] Initialize a package.json file
    // Command
    // npm init -y
&nbsp;

- [x] Install Express
    // Command
    // npm i express
&nbsp;

- [x] Install  Mongoose
    // Command
    // npm i mongoose
&nbsp;

- [x] Install pug
    // Command
    // npm i pug
&nbsp;

- [x] Create a server.js, app.js or index.js file (Main server file)
    // Commands
    // Visual Studio Code: code server.js
    // touch server.js -> Then open in editor
&nbsp;

- [x] Create a public directory (Static files)
    //Command
    // mkdir public
&nbsp;

- [x] Create a views directory (for pug files)
    // Command
    // mkdir views
&nbsp;

- [x] Create a routes directory
    // Command
    // mkdir routes
&nbsp;

- [x] Create a models directory (mkdir models).
    // Commmand
    // mkdir models
&nbsp;

- [x] Open server.js
&nbsp;
&nbsp;


# ✔ Basic Nodejs setup for Express, Mongoose, Pug & Enviroment Variables


- [x] Import express from node_modules
    // #1 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        const express = require("express");
    ```
&nbsp;

- [x] Import mongoose from node_modules
    // #2 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        const mongoose = require("mongoose");
    ```
&nbsp;

- [x] Create an instance of an express application
    // #3 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        const app = express();
    ```
&nbsp;

- [x] Import the path core module
    // #4 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
            const path = require('path');
    ```
&nbsp;

- [x] Set the view engine for express to pug
    // #5 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        app.set("views", path.join(__dirname, 'views'));
    ```
&nbsp;

- [x] Set the express view-engine to pug
    // #6 in in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        app.set("view engine", "pug");
    ```
&nbsp;

- [x] Use the express.static() for the public directory.
    // #7 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        app.use(express.static("public"));
    ```
&nbsp;

- [x] Create a bash script outside of the project, a quick tool to set enviroment variables.
    // Commands
    // nano ../bash/set_enviroment_development.sh
    ```bash
            #!/bin/bash
            export DB=yourDatabaseConnectionStringHere
            export PORT=setPort
            export NODE_ENV=development
            echo 'Set the enviroment to development'
    ```
    // Ctrl + s (Save)
    // Ctrl + x (Exit)
    // . ../bash/set_enviroment_development.sh
    // The '.' states the current directory you are in & the path to the bash script you want to execute
    // Should see message from the script that it is set to a specific enviroment.
&nbsp;

- [x] Now assign the enviroment variables value using 'process.env'
    // #8 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        const PORT = process.env.PORT,
        DB = process.env.DB;
    ```
    - [x] Now use the above values to connect to cloud or local database & set server to listen on a port.
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

# ✔ Setup routes and middlewares required for the server.js file -Express


- [x] Create a home route
    // Commands
    // Visual Studio Code: code routes/home_route.js
    // touch routes/home_route.j
&nbsp;

- [x] Write to 'home_route.js' and create an instance of an express router to be exported
    // #1 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
    ```javascript
        const express = require('express'),
        router = express.Router();
    ```
&nbsp;

- [x] Export that router, then now available for import in any nodejs file.
    // #2 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
    ```javascript
        module.exports = router;
    ```
&nbsp;

- [x] Then import and use that router as middleware in the server.js file
    // #9 & #10 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        const homeRoute = require("./routes/home_route"),
        graduatesRoute = require("./routes/graduates_route");

        app.use("/api/home", homeRoute);
        app.use("/api/graduates", graduatesRoute);
    ```
&nbsp;

- [x] Use built-in express middleware called express.json() so incoming requests can be parsed.
    // #11 in [server.js]("https://github.com/DariusRain/Grads/blob/master/grads/server.js")
    ```javascript
        app.use(express.json());
    ```

&nbsp;
&nbsp;

# ✔ Create a Mongoose schema for graduates -Mongoose


- [x] Create graduate.js file in the models directory
    // Commands
    // Visusal Studio Code: code models/graduate.js
    // touch models/graduate.js (Then open it)
&nbsp;

- [x] Import mongoose and use mongoose.Schema() syntax to make a schema
    // #1 in [models/graduate.js]("https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js")
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

- [x] Export the schema with the mognoose.model() syntax
    // #2 in [models/graduate.js]("https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js")
    ```javascript
        module.exports = mongoose.model('Graduate', GraduateSchema);
    ```
&nbsp;

- [x] Import the model in routes/home_route.js
    // #3 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
    ```javascript
        const Graduate = require('../models/graduate');
    ```
&nbsp;
&nbsp;


# ✔ Create pug files for the frontend in the views directory -Pug
- [x] Create a index.pug file
    // Commands
    // touch or code views/index.pug
&nbsp;

- [x] Create a graduate.pug file
    // Commands
    // touch or code views/graduate.pug
&nbsp;
    
- [x] Create a errors.pug file
    // Commads
    // touch or code views/errors.pug
&nbsp;
    
- [x] See [views/]("https://github.com/DariusRain/Grads/blob/master/grads/views")
&nbsp;
&nbsp;
        


# ✔ Create Stylesheet and JavaScript files in the public directory


- [x] Add a script.js and stylesheet.css file in public directory
//Commands
// touch or code public/script.js
// touch or code public/stylesheet.css
&nbsp;

- [x] See [public/script.js]("https://github.com/DariusRain/Grads/blob/master/grads/public/index.js") & [public/stylesheet.css]("https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css")
&nbsp;
&nbsp;

# ✔ Create the route handlers and endpoints to home_route.js file
&nbsp;


- [x] Open [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
&nbsp;


- [x] Create a GET route for the root route for the '/api/home' endpoint and have it render index.pug
    // See #4 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
    ```javascript
        router.get('/', (req, res) => {
            res.status(200).render('index');
        });
    ```
&nbsp;

- [x] Create a POST route to the same endpoint '/api/home' for new graduates.
    // See #5 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
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

- [x] Create a GET route with an extended endpoint 'api/home/all'.
    // See #6 in [routes/home_route.js]("https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js")
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
    
 # 📝 The process of building the frontend layout

  Getting started with the [index.pug]("https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug")file (Home Page)

  - [x] Initial set up for any html doc - open index.pug in editor (Pug ~ Landing Page)
        // See #1 - #4 in [views/index.pug]("https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug")
    
  - [x] Import public static files to index.pug: [public/script.js]("https://github.com/DariusRain/Grads/blob/master/grads/public/index.js") & [public/stylesheet.css]("https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css")  
        // See #5 in [views/index.pug]("https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug")
 