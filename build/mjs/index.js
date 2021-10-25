import express from 'express';
var foo = 'bar';
console.log(foo);
var promise = new Promise(function (resolve) { return setTimeout(resolve, 1000); });
var run = function () {
    var app = express();
    app.get("/", function (req, res) {
        res.sendStatus(200);
    });
    app.listen(8000);
};
var name = 'Maxwell';
var age = 20;
var hasPet = false;
var nothing = undefined;
var nothingLiterally = null;
nothing = 'asd';
