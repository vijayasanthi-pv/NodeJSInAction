module.exports = function(app, mongoose){

    let Article = mongoose.model("Article", mongoose.schema);
    let Comment = mongoose.model("Comment", mongoose.schema);

    app.post("/comment/create", function (req, res) {
        let text = req.body.text;
        let articleID = req.body.articleId;

        Article.findOne({"_id":articleID}, function (err,data) {
            if (err || typeof data  == 'undefined'){
                res.render("error", {err:err});
            }else {
                let commentModel = new Comment();
                commentModel.text = text;
                commentModel.author = "anonymous";
                data.comments.push(commentModel);
                data.save(function (err, data) {
                    if (err) {
                        res.render("error", {err:err});
                    }else {
                        res.redirect("/article/show/"+articleID);
                    }
                })
            }
        });
    });
}