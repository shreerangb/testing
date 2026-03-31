const comment = req.body.comment;
db.save(comment);

// later
res.send("<p>" + comment + "</p>");
