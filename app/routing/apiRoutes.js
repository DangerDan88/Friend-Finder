

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

//res.json(friendsData);
var score = req.body.scores;
for(var i = 0; i < score.length; i++){
  //console.log(score[0]);
}
var lastDiff = 100;
var bestMatch = {};
for(var i = 0; i < friendsData.length; i++){
  var totalDiff = 0;
  console.log(friendsData[i].scores);
  for(var x = 0; x < friendsData[i].scores.length; x++){
    totalDiff += Math.abs(friendsData[i].scores[x] - score[x]);
    console.log(totalDiff);
  }
  if (totalDiff < lastDiff){
    lastDiff = totalDiff;
    totalDiff = 0;
    bestMatch = friendsData[i];
  }
}
friendsData.push(newFriend);
console.log(bestMatch);
res.json(bestMatch);



});



};
