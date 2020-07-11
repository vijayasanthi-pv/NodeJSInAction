module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index.jade");
    });

    app.post("/signin", function (req, res) {
        res.json({message: "Signin post request"});
    });

    app.get("/user/:id", function(req, res){
        let id = req.params.id;
        res.json({userid: id});
    });

    app.post("/user/create", function (req, res) {
        let id = req.body.id;
        res.json({user:id});
    });
}
