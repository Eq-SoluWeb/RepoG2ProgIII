const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-productos';
mongoose.connect(URI)
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;