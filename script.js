// Дз как положенно, но был конфликт с переменной 'i', поскольку я ее исподьзовал дважды.
// Решил данную проблему используя для второго цыкла переменную 'j'.

let i=1;
do {
    console.log(i)
    i++
} while (i <= 8)
//=================
let j=1;
while (j <= 8) {
    console.log(j)
    j++
}
//=================
// Просто было интересно можно ли решить проблему с переменной 'i'с помощью замыкания.
let close = ()=> {
    let i=1;
    do {
        console.log(i)
        i++
    } while (i <= 8)
}
close()
//=================
let closeOneMoreTime = ()=> {
    let i=1;
    while (i <= 8) {
        console.log(i)
        i++
    }
}
closeOneMoreTime()
// =================
// вот рекурсия
let i = 1
function recursion() {
    console.log(i)
    if (i < 8){
        i++
        recursion()
    }
}
recursion()

