const http = require("http");

http
  .createServer((request, response) => {
    console.log(request);
    const { headers, method, url } = request;
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.
        //response.write(JSON.stringify({ hello: "world" }));
        //response.end();
      });
  })
  .listen(8080); // Activates this server, listening on port 8080.
