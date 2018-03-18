const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');



// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected to mongo')
// });

let repoSchema = mongoose.Schema({
  userName: String,
  repoName: String,
  repo: Object,
  repoId: { type: Number, unique: true },
  url: String,
  createdAt: Number
});


let Repo = mongoose.model('Repo', repoSchema);

let save = (data, user, repo, repoId, url, createdAt) => {
  var r = new Repo({repo: data, userName: user, repoName: repo, repoId: repoId, url: url, createdAt: createdAt });
  r.save(function(err, r){
    if(err) return console.log(err.errmsg);
    // console.log('repo saved')
  })
}

Repo.find(function(err, result){
  if(err)console.log(err);
  console.log(result)
});


module.exports.save = save;
module.exports.Repo = Repo;