import express from 'express';

const foo: String = 'bar'
console.log(foo);

const promise = new Promise(resolve => setTimeout(resolve, 1000))


const run = () => {
    const app = express()
    app.get("/", (req, res) => {
        res.sendStatus(200)
    })
    app.listen(8000)
}

//
let name = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing: string|undefined = undefined;
let nothingLiterally: null = null;

nothing = 'asd'
