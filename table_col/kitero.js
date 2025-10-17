console.log("POV: Mát");

/**
 * @type {string}
 */
const a = "Patapim";

console.log(a);

const b = ["o(≧∀≦)o","(っ °Д °;)っ","(～￣▽￣)～"];
for(let i = 0; i < b.length; i++){
    console.log(b[i]);
}

for(const a of b){
    console.log(a)
}

for(const key in b){
    console.log(`${key}: ${b[key]}`)
}

/**
 * @type {{name:string, age:int}}
 */
const y = {
    name : "Povmát",
    age : 17
}

for(const i in y){
    console.log(y[i])
}