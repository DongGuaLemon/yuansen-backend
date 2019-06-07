var express = require('express');
var router = express.Router();

require('./getphonenumber')(router);
require('./users')(router)
require('./Getquestion')(router)
require('./answercheck')(router)
require('./ctrlquestion')(router)
module.exports=router