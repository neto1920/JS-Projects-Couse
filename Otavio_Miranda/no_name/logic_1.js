// Escreva uma função que recebe 2 números e retorne o maior deles

function max1(a,b){
   if( a > b){
    return a;
   } else {
    return b;
   }
    
}

// Refatorando código

function max2(a,b){
    if( a > b){
     return a;
    }
    return b;     
}

function max3(a,b){
    if( a > b) return a;  
    return b;     
}

function max4(a,b){
    return a > b ? a: b;     
}

// Arrow function

const max5 = (a, b) => {
    return a > b ? a:b;
}

const max6 = (a, b) => a > b ? a:b;

console.log(max6(50,9))