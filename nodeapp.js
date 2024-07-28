// const age= 19;

// if(age < 18 ){
//     console.log('You cant have sex')
// }

// else{
//     console.log('fuck puss')
// }

// console.log(`Its's our first node app`)



// const names = require("./bongu")
// const sayHi = require("./dungu")


// sayHi('Nacho')
// sayHi(names.name1)
// sayHi(names.name2)


// builtin modules in node

const user = require('os')


const nuser = user.userInfo()
console.log(nuser)

console.log(`The uptime for the system is ${user.uptime() }`)


const obj ={
    release: user.release(),
    type: user.type(),
    totalMem: user.totalmem(),
    freeMem: user.freemem()
}

console.log(obj)