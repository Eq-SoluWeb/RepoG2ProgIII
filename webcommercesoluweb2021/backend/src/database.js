const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-productos';
//const URI = 'mongodb+srv://misiontic2022_1:<password>@cluster0.rjlj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI)
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;