const mongoose = require('mongoose');

function connect(){
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/database';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(MONGO_URI, options);

  mongoose.connection.once('open', () => {
    console.log('Conection established succedfuly');
  });
  mongoose.connection.on('error', (error) => {
    console.log('Something went wrong', error);
  });

  return mongoose.connection;

}

module.exports = { connect }