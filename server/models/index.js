//has access to the database so it actually performs the functions

var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //query string
      var queryString = "select messages.text, messages.id, messages.roomname from messages \
                         left outer join users on (messages.userid = users.id) \
                         order by messages.id desc";
      db.query(queryString, function(err, results){ //(queryStr, callback)
        if (err) {
          console.log(err)
        } else {
          callback(results);
        } 
      }); 

    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = "insert into messages(text, userid, roomname) \
                        values (?, (select id from users where username = ? limit 1), ?)";
      db.query(queryString, params function(err, results){ //(queryStr, callback)
        if (err) {
          console.log(err)
        } else {
          callback(results);
        } 
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

