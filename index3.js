const http = require('http');

function generateResponse(content) {
  return `
    <html>
      <head><title>first Response</title></head>
      <body><h1>${content}</h1></body>
    </html>
  `;
}

let server = http.createServer((req, res) => {
  let url = req.url;

  let content = "Change the URL like /home, /about, and /node to see the magic";

  if (url === "/home") {
    content = "Welcome to the Home Page";
  } else if (url === "/about") {
    content = "Learn About Us";
  } else if (url === "/node") {
    content = "Node.js Magic";
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(generateResponse(content));
  res.end();
});

server.listen(2000, () => {
  console.log('Server is listening on port 2000');
  console.log('Server is listening on port 2000');

});
