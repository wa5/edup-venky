interface Iobj2{
    a:string;
    b:number;
    c:{ss:number};
    [key:string]:any
}
var obj2:Iobj2={a:"hello",b:5,c:{ss:8}}
// console.log(obj2.c.ss)
console.log(obj2)

var onother={...obj2}
onother.d=5
console.log(onother)
console.log(obj2)