const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'request',
      'Authorization': `token ${process.env.GITHUB_TOKEN || config.guitar}`
    }
  };

  request(options, function(err, res, body) {
    // let json = JSON.parse(body);
    if(err)console.log(err)
    else {
      callback(body);
    }
  });

}

module.exports.getReposByUsername = getReposByUsername;