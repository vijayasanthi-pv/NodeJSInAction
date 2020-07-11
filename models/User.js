module.exports = function (mongoose) { //'mongoose' is the MongoDb module for mongo db operations

    let Schema = mongoose.Schema;

    let UserSchema = new Schema({
        name: String,
        email: String,
        password: String,
        registerDate: {
            type: Date,
            default: Date.now()
        }
    });

    mongoose.model('User', UserSchema);
}