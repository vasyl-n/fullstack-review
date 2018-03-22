const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  userName: String,
  repoName: String,
  repoId: { type: Number, unique: true },
  url: String,
  createdAt: Number
});

let userSchema = mongoose.Schema({
  id: Number,
  userName: String
})

let Repo = mongoose.model('Repo', repoSchema);
let User = mongoose.model('User', userSchema);

let save = (user, repo, repoId, url, createdAt) => {
  var r = new Repo({userName: user, repoName: repo, repoId: repoId, url: url, createdAt: createdAt });
  r.save(function(err, r){
    if(err) return console.log(err.errmsg);
    // console.log('repo saved')
  })
}

Repo.find(function(err, result){
  if(err)console.log(err);
});


module.exports.save = save;
module.exports.Repo = Repo;