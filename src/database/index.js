const mongoose = require('mongoose');

const uri =
  'mongodb+srv://user:user@cluster0.w7ksyne.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
