const mongoose =  require('mongoose');
const URL = proces.env.ATLAS_CONNECT_URL ? process.env.ATLAS_CONNECT_URL : 'mongodb://localhost:27017/ADD OUR NAME HERE'

mongoose.connect(URL);


module.exports = mongoose.connection;







