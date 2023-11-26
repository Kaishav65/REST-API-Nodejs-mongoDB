const mongoose = require('mongoose')

// url = "mongodb+srv://kaishav:password@clusterkeshav.6qezoi5.mongodb.net/thapa?retryWrites=true&w=majority"


const connectDB = (url)=>{

    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;
