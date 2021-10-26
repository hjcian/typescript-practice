export {}
// workaround:
// https://www.aritsltd.com/blog/frontend-development/cannot-redeclare-block-scoped-variable-the-reason-behind-the-error-and-the-way-to-resolve-it/

let info: object = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
info = {}


let someone = {
    knows: undefined,
    identity: null
};

console.log(info);

const arrayObj = [1,2,3]
arrayObj.pop = ()=> 123
// arrayObj.pop = ()=> ''