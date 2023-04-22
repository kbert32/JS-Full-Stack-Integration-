const http = require('http');

const server = http.createServer((req, res) => {
  console.log('INCOMING REQUEST');
  console.log(req.method, req.url);

  if (req.method === 'POST') {
    let body = '';
    req.on('end', () => {
      const userName = body.split('=')[1];  //data will be sent as: "username=data", this must be split to get just the 'data'
      res.end('<h1>' + userName + '</h1>');
    });

    req.on('data', (chunk) => {   //data is sent to the server in chunks and needs to be concatenated
      body += chunk;
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'  //by default method would be GET if not specified by the method prop
    );
  }
});

server.listen(5000);
