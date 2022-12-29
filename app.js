const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-type":"text/html"});
  fs.readFile('./index.html', null, (err, data) => {
    if(err) throw err;
    res.write(data)
    res.end();
  })
});

server.listen(5678, () => {
  console.log(`start server....`)
})