const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<body><h1>Welcome to My Page</h1></body>");
    res.write(
      '<form action="/create-user" method="POST"><label for="name">Enter your name:</label><input type="text" id="name" name="name"><input type="submit" value="Submit"></form>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url == "/users") {
    res.write(
      "<html><body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body></html>"
    );
    return res.end();
  }

  if (url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const nameR = Buffer.concat(body).toString();
      console.log(nameR.split("=")[1]);
    });
    console.log;
    res.writeHead(302,{"Location": "/"})
    return res.end();
  }
});

server.listen(3000);
