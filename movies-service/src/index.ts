let a:number = 3;

let b:number = 4;


function magicFunction(x:number, y:number):number {
    return ((x ** 2) + (y ** 2)) ** (1/2);
}


let c:number = magicFunction(a, b);

console.log(c);

