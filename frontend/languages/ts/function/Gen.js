
function* gen(a){
yield a+1
yield a+2
yield a+3
}
var calling=gen(10)
console.log(calling.next())
console.log(calling.next())
console.log(calling.next())
console.log(calling.next())
