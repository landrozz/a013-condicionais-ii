const num = Number(prompt('Descubra se o numero é divisivel por 2 e por 3'))

// if (num % 2 === 0) {

//     console.log('O seu numero é divisivel por 2')

//     if(num % 3 === 0) {
//         console.log('O seu numero é divisivel por 3')
//     } else {
//         console.log('O seu numero nao é divisivel por 3')
//     }
// } else {
//     console.log('O seu numero nao é divisivel por 2 nem por 3')
// }

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log("O número é divisivel por 2 ou por 3")
    }
    else {
        console.log("O número é divisivel por 2 e não por 3")
    }
} else {
    if (num % 3 === 0) {
        console.log("O número é divisivel por 3 e não por 2")
    }
    else {

        console.log("O número informado NÃO é divisivel por 2 ou 3")
    }
}        

console.log('-------')

if (num % 2 === 0 || num % 3 === 0){
    console.log('O seu numero é divisivel por 2 ou por 3')
} else {
    console.log('O seu numero nao é divisivel por 2 nem por 3')
}