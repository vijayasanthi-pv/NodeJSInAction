module.exports = function (mongoose) { //'mongoose' is the MongoDb module for mongo db operations

    let Schema = mongoose.Schema;

    let CommentSchema = new Schema({
        text: String,
        author: String,
        createDate: {
            type: Date,
            default: Date.now()
        }
    });

    mongoose.model('Comment', CommentSchema);
}