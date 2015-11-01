//listens for the request or response
//tells the models index what to do

var models = require('../models');
var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.message.get(function(err, results){
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      models.message.post(params, function(err, results) {
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
        models.users.post(params, function(err, results) {
          res.json(results);
        });
    }
  }
};

