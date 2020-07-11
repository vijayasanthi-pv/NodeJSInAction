let utils = {
    connectToDatabase:function (mongoose, config, cb) {
        let dbPath;

        dbPath = "mongodb+srv://" + config.db.USER + ":";
        dbPath += config.db.PASS + "@";
        dbPath += config.db.HOST + "/";
        //dbPath += config.HOST + ((config.PORT.length > 0) ? ":" : "");
        //dbPath += config.PORT + "/";
        dbPath += config.db.DATABASE;
        dbPath += "?retryWrites=true&w=majority";
        mongoose.connect(dbPath, cb);
        return mongoose;
    }

    /*connectToDatabase:function (mongoose, config, cb) {
        let dbPath;

        dbPath = "mongodb+srv://" + "vpuli" + ":";
        dbPath += "Charan99$" + "@";
        dbPath += "cluster0.7b92q.gcp.mongodb.net" + "/";
        //dbPath += config.HOST + ((config.PORT.length > 0) ? ":" : "");
        //dbPath += config.PORT + "/";
        dbPath += "simpleblog";
        dbPath += "?retryWrites=true&w=majority";
        mongoose.connect(dbPath, cb);
        return mongoose;
    }*/
};

module.exports = utils;