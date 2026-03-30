import { createServer } from "http";

const port = 3000;

const server = createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  const parsedURL = new URL(req.url ?? "", `http://${req.headers.host}`);
  const keyword = parsedURL.searchParams.get("keyword");
  if (req.method !== "GET" || parsedURL.pathname === "/favicon.ico") {
    res.writeHead(404, "Not Found");
    res.end();
    return;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(keyword ? `Hello, ${keyword}` : "Hello, HTTP");
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
