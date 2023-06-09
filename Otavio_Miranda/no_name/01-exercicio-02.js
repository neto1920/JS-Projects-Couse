let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// // forma antiga
// let alterada = varA;
// varA = varB
// varB = varC
// varC = alterada
// console.log(varA,varB, varC)

// forma moderna
[varA, varB, varC] = [varB, varC, varA]
console.log(varA,varB, varC)