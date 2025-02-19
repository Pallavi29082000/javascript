const accountId = 12
let city="siwan"
var state="bihar"// do not use var because of issue in block scope and functional scope
village="hello"
const account = 23
let accountstate;// it gives undefined value because accountstate has no value
console.table([accountId,city,state,village,accountstate])