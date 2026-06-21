const escape = require("escape-html");

app.get("/hello", (req, res) => {
  res.send("<h1>" + escape(req.query.name) + "</h1>");
});
