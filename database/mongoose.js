const mongoose = require("mongoose");

const url = "mongodb+srv://aiswaryaregi69:Aiswarya2001@cluster0.gmd5ygb.mongodb.net/?retryWrites=true&w=majority";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        const dbConn = await mongoose.connect(url);
        console.log("dbconn =>", dbConn)
    } catch(error) {
        console.log("Error in coneccting db")
    }
}

module.exports = connect;

