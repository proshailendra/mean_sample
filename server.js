var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./server/routes/web');
var apiRoutes = require('./server/routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', routes);
app.use('/api', apiRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
