const mongoose =  require('mongoose');
const URL = process.env.ATLAS_CONNECT_URL ? process.env.ATLAS_CONNECT_URL : 'mongodb://localhost:27017/super-group'

mongoose.connect(URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


module.exports = mongoose.connection;







