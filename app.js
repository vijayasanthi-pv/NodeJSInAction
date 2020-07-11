let express = require('express'); //To user 'express' framework
let bodyParser = require('body-parser'); //To simulate http get, post and put methods
let logger = require('morgan');
let methodOverride = require('method-override');
let mongoose = require('mongoose');
let config = require('config');
let utils = require('./lib/utils');
let mongooseConnection = utils.connectToDatabase(mongoose, config,{useNewUrlParser: true});
let app = express();

app.set("port", process.env.PORT || 3000); //If the 'environment' variable for PORT is set,
                                           //app will use it else uses the default PORT 3000

app.use(express.static(__dirname + '/public')); //Tells the app where the application static files resides
app.use(logger('dev')); //Log every request to console
app.use(bodyParser()); //Pull information from POST request
app.use(methodOverride()); //Simulate DELETE and PUT

app.set('views', __dirname+'/public/views');
app.set('view engine', 'jade'); //Tells app that 'Jade' engine will be used
app.set('view options', { layout : true}); //Will use Jade's layout structure(i.e master page)

require("./models/Article")(mongooseConnection);
require("./models/Comment")(mongooseConnection);
require("./models/User")(mongooseConnection);

require("./controllers/IndexController")(app,mongooseConnection);//'app' is passed to controller because in controller,
                                                                 //express related functions will be used
require("./controllers/ArticleController")(app,mongooseConnection);
require("./controllers/CommentController")(app,mongooseConnection);

app.listen(app.get("port"),function () {
  console.log("Express server listening on port "+app.get("port"));
});
