const mongoose =  require('mongoose');
const URL = process.env.ATLAS_CONNECT_URL ? process.env.ATLAS_CONNECT_URL : 'mongodb+srv://jonahlindsley:<password1234>@cluster0.g5pi4fj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL);


module.exports = mongoose.connection;







