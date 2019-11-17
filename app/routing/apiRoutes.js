

module.exports = function(app) {
  var friendsData = require("../data/friends")
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });



app.post("/api/friends", function(req, res) {
var newFriend = {
  name: req.body.name,
  photo: req.body.photo,
  scores: req.body.scores
}

friendsData.push(newFriend);
res.json(friendsData);






});




};