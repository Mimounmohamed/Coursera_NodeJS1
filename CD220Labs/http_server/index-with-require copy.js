 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today copy');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module

    const currentDate = today.getDate();
    const hour = currentDate.getHours();
    let greeting;

    if(hour<12){
      greeting = "good morning"
    }
    else if(hour<18){
      greeting = "good afternoon"
    }else{
      greeting = "good night"
    }

    res.end(`${greeting} The date today is ${currentDate}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
