module.exports = function (app, mongoose) {

    let Article = mongoose.model("Article", mongoose.schema);

    //app will render 'article-new' page when '/article/new' service is hit on the browser
    app.get("/article/new", function (req, res) {
            console.log("new article created");
            res.render("article-new");
        }
    );

    app.post("/article/create", function (req, res) {
        let title = req.body.title;
        let content = req.body.content;
        let articleModel = new Article();

        articleModel.title = title;
        articleModel.content = content;
        articleModel.author = "Vijayasanthi";

        articleModel.save(function (err,data) {
            if (err) {
                res.render("error", {err: err});
            }else {
                let id = data._id;
                res.redirect("/article/show/"+id);
            }
        });

    });

    app.get("/article/show/:id", function (req, res) {
        let id = req.params.id;

        Article.findOne({"_id":id}, function (err, data) {
            if(err){
                res.render("error",{err:err});
            }else {
                res.render("article-detail", {
                    articleInfo: data
                });
            }
        });
    });
}