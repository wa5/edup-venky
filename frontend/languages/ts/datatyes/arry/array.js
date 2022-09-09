var myobj = [
    { a: 'apple', b: "boll" },
    { a: 'apple', b: "boll", c: "cat" },
    { a: 'apple', b: "boll", d: "dog" }
];
var mu = myobj.filter(function (data) { return data.c === "cat"; });
console.log(mu);
var mu1 = myobj.find(function (data) { return data.c === "cat"; });
console.log(mu1);
var arry2 = [];
function addingvalue() {
    var getval = document.getElementById('myval');
    console.log(getval.value);
    console.log(arry2);
    arry2.push(getval.value);
    console.log(arry2);
}
var a = "apple";
var b = "boll";
var c = "cat";
var arry = ["apple", "boll", "cat"];
console.log(a);
console.log(arry[0]);
arry[4] = "dog";
arry.push('elepant');
console.log(arry);
//for all the ements in array to be printed using foreach mehod
// arry.forEach((i)=>{
//     console.log(i)
// })
