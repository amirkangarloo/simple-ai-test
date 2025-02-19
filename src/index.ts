import { createServer } from 'http'; // Import Node modules using ES6 syntax, which TypeScript supports thanks to type definitions installed with @types/node package 

const http = createServer();
// Handle requests here or add more logic as required for your application. For example:
http.on('request', (req, res) => {
    const data = JSON.stringify({ message: 'Hello from TypeScript-enabled Node.js server!' }); // A simple response body 
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
});
http.listen(3000, () => {
   console.log('Server running on http://localhost:3000');
});
