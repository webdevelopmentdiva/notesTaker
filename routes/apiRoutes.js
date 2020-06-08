const db = require("../db/db.json");

let id = db.length + 1;
let fs = require("fs");

function apiRoutes(app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    req.body.id = id++;
    db.push(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
      res.json(db);
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    var id = parseInt(req.params.id);

    for (var i = 0; i < db.length; i++) {
      if (db[i].id === id) {
        db.splice(i, 1);
      }
    }
    console.log(db);

    fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
      res.json(db);
    });
  });
}

module.exports = apiRoutes;
