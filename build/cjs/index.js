"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var foo = 'bar';
console.log(foo);
var promise = new Promise(function (resolve) { return setTimeout(resolve, 1000); });
var run = function () {
    var app = (0, express_1.default)();
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
