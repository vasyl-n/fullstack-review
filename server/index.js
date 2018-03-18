const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const githubHelper = require('../helpers/github')
const db = require('../database/index')



app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  githubHelper.getReposByUsername(req.body.userName, function(repoData){
    JSON.parse(repoData).forEach(repo => {
      db.save(repo, repo.owner.login, repo.name, repo.id, repo.html_url, Date.now())
    });
  })
});

app.get('/repos', function (req, res) {
  var q = db.Repo.find().sort({'createdAt': -1}).limit(25);
  q.exec(function(err, repos) {
    if(err)console.log(err.errmsg)
    res.send(200, JSON.stringify({repos: repos}))
  });
});

let port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

