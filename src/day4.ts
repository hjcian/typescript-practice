export { }

// error TS7006: Parameter 'a' implicitly has an 'any' type.
// const add = (a, b) => {
//   return a + b
// }

const add2 = (a: number, b: number) => a + b

const a = () => 123

// const b = ():void => {
//   return 123 // Type 'number' is not assignable to type 'void'.ts(2322)
// }

const c = ():void => {
  123 + 456
}

const d = ():any => {
  123 + 456
}

const e = ():undefined => undefined

// const f = ():undefined => {
//   return 123 // Type '123' is not assignable to type 'undefined'.ts(2322)
// }

const g = ():void => undefined
