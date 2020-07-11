module.exports = function (mongoose) { //'mongoose' is the MongoDb module for mongo db operations

    let Schema = mongoose.Schema;
    let Comment = require("./Comment");

    let ArticleSchema = new Schema({
        title: String,
        content: String,
        author: String,
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        createDate: {
            type: Date,
            default: Date.now()
        }
    });

    mongoose.model('Article', ArticleSchema);
}