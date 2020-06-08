var path = require("path");

function htmlRoutes(app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__direname, "../public/index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
}

module.exports = htmlRoutes;
