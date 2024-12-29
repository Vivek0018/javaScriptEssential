//Global scope
var globalVar= "I'm a global variable";
let globalLet = "I'm also global, but Scoped with let";
const globalConst = "I'm a global constant"

//Block Scope
{
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let ";
const blockConst = "I'm a block-scoped const";
}

//Global Scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope
// console.log(blockVar);
// console.log(blockLet);




// fucntion scoped variables 
function show(){
    var functionVar = "I'm a block-scope var";
    let functionLet = "I,m a block-scoped let";
    const fuctionConst = "I'm a block-scoped const";
}

show()

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
