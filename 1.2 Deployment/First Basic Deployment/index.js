console.log("Let's start backend development with Node.js!");
// To listen to all the requests from User frontend and send back response from server we use 2 packages :
// Express and Mongoose. Mongoose is for Database related interactions
// Express "LISTEN" to all requests and response accordingly.
// / : home route, /login : login setup


// npm init -y => here -y by default does yes to every option
// In package.json -> Scripts -> We define various scripts like run, build, deploy etc.
// We use start script to tell how to run index.js, For example. "start": "node index.js"
// Now whenever we do npm run start => It will execute node index.js, it is good practice in server side applications

// Express - Web Framework
// const express = require('express') - CommonJS - This is the older module system used in Node.js. Uses require() and module.exports.
import express from "express" // ES Modules - This is the modern ECMAScript module system. Uses import and export.
const app = express()
const port = 3000 // Computer has a lot of ports, approximately around 65000. Port is where computer will listen
app.get('/', (req,res) => { // For GET request where app needs to respond. 
    res.send("If the app gets request at / which is root directory, then it responds with this")
})
app.listen(port, () => { // app.listen(port, callback) → starts your Express app on the given port.
    console.log(`This usually tells us if app is active and listening at ${port}`)
}) // The callback runs once the server is up and running.

// dotenv
// We use dotenv in Node.js (and other JS projects) to manage environment variables in a clean, safe, and flexible way.
// Special values that configure your app without hardcoding secrets in your code.
import dotenv from "dotenv";
dotenv.config();
const port2 = process.env.PORT || 5000;
app.listen(port, () => { // Using two app.listen for same port gives error and for different port is useless and is not a best practice. just two doors to the same house. Here it is done just for demonstration showing how we use ENV
  console.log(`Server running on port ${port}`);
});