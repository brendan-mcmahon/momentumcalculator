var appRouter = function (app) {

    app.get("/:calories/:fat/:fiber", function(req, res) {
        var c = req.params.calories;
        var f = req.params.fat;
        var i = req.params.fiber;
        if (i > 4){
            i = 4;
        }
        var p = Math.round((c / 50) + (f / 12) - (i/4));
        var result = {
            points: p
        }
      res.status(200).send(result);
    });
  }
  
  module.exports = appRouter;