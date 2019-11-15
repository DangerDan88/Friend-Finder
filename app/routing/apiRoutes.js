

module.exports = function(app) {
  var friendsData = require("../data/friends")
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });



app.post("/api/friends", function(req, res) {




});




};