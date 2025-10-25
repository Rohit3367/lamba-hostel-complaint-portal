// server.js (CommonJS version for json-server 0.17.4)

const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();

// build DB object in memory by reading multiple .json files
function getCombinedDB() {
  const baseDir = path.join(__dirname, "db");

  return {
    complaints: JSON.parse(
      fs.readFileSync(path.join(baseDir, "studentComplaints.json"), "utf8")
    ),
    users: JSON.parse(
      fs.readFileSync(path.join(baseDir, "users.json"), "utf8")
    ),
    complaintsHandled: JSON.parse(
      fs.readFileSync(path.join(baseDir, "handleComplaints.json"), "utf8")
    ),
  };
}

// IMPORTANT: router takes an object, not a path
const router = jsonServer.router(getCombinedDB());

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);

// mount routes
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`);
});
