function saveComment(req, db) {
  const comment = req.body.comment;
  db.save(comment);
}

function showComment(comment, res) {
  res.send("<p>" + comment + "</p>");
}
