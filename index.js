// +-------------------------------------------------------------+
// |                          SERVER                             |
// +-------------------------------------------------------------+

var dburl = process.env.DATABASE_URL
            .replace('postgres://','')
            .replace(':','|')
            .replace('@','|')
            .replace(':','|')
            .replace('/','|')
            .split('|');

var conObj = {user: dburl[0],
              password: dburl[1],
              database: dburl[4],
              port: parseInt(dburl[3]),
              host: dburl[2],
              ssl: true};

var pg = require('pg');

var express = require('express');
var app = express();
var async = require('async');

// List of allowed origins
var origins = ["http://www.northeastern.edu",
               "http://localhost:5000"];

// Set Cross Origin Resource Sharing headers 
app.use(function(req, res, next) {
    if (req.headers.origin) {
        // can only set one allowed origin per response, therefore
        // check to see if origin of request is in origins list and
        // set header if so
        var origin;
        for (var i = 0; i < origins.length; i++) {
          origin = origins[i]
          if (req.headers.origin.indexOf(origin) > -1){
              res.header("Access-Control-Allow-Origin", origin);
              break;
          }
        }
        res.header("Access-Control-Allow-Methods", "GET");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// +-------------------------------------------------------------+
// |                          SERVER                             |
// +-------------------------------------------------------------+

var client = new pg.Client(conObj);

client.connect(function(err){
  if (err) { console.error(err); }
});

// +-------------------------------------------------------------+
// |                           INDEX                             |
// +-------------------------------------------------------------+

app.get('/', function(request, response) {
  // Run every function in this object in parallel
  async.parallel({
    // Retrieve Data for Sections
    brothers : function(callback) {
      q = 'SELECT * FROM brothers b';
      client.query(q, function(err, result) {
        if (err) { 
          callback(new Error("Failed getting brothers:" + err.message));
          return;
        } else { 
          callback(null, result.rows);
        }
      });
    },
    classes : function(callback) { 
      client.query('SELECT * FROM classes', function(err, result) {
        if (err) { 
          callback(new Error("Failed getting classes:" + err.message));
          return;
        } else { 
          callback(null, result.rows);
        }
      });
    },
    eboards : function(callback) { 
      client.query('SELECT * FROM eboards', function(err, result) {
        if (err) { 
          callback(new Error("Failed getting eboards:" + err.message));
          return;
        } else { 
          callback(null, result.rows);
        }
      });
    },
    chapters : function(callback) { 
      client.query('SELECT * FROM chapters', function(err, result) {
        if (err) { 
          callback(new Error("Failed getting chapters:" + err.message));
          return;
        } else { 
          callback(null, result.rows);
        }
      });
    }
  }, function (error, results) { 
    response.render('pages/index', {results: results} );
  });
});

// +-------------------------------------------------------------+
// |                           ADMIN                             |
// +-------------------------------------------------------------+

app.get('/admin', function (request, response) {
  response.render('pages/admin');
})

// +-------------------------------------------------------------+
// |                          BROTHERS                           |
// +-------------------------------------------------------------+

app.get('/brothers', function (request, response) {
    client.query('SELECT * FROM brothers', function(err, result) {
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
})

// +-------------------------------------------------------------+
// |                           CLASSES                           |
// +-------------------------------------------------------------+

app.get('/classes', function (request, response) {
    client.query('SELECT * FROM classes', function(err, result) {
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
})

// +-------------------------------------------------------------+
// |                           EBOARDS                           |
// +-------------------------------------------------------------+

app.get('/eboards', function (request, response) {
    client.query('SELECT * FROM eboards', function(err, result) {
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
})

// +-------------------------------------------------------------+
// |                          CHAPTERS                           |
// +-------------------------------------------------------------+

app.get('/chapters', function (request, response) {
    client.query('SELECT * FROM chapters', function(err, result) {
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
})
