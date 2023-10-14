let a = +prompt("1 soni kiriting !")
let b = +prompt("2 soni kiriting !")
let c = +prompt("3 soni kiriting !")
if (a > b && a < c || a < b && a > c || a > c && a < b || a < c && a > b) {
    alert(a)
} else if (b > a && b < c || b < a && b > a || b > c && b < a || b < c && b > c) {
    alert(b)
} else if (c > a && c < b || c < a && c > b || c > b && c < a || c < b && c > a ) {
    alert(c)
} else {
    alert ("sorry ))) this is not a number")
}
// else if (a < b && a > b) {
//     alert(a)
// }