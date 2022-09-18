
interface Iobj{
    a:string,
    b:string,
    c?:string//optinal
}



var obj:Iobj={a:'apple',b:'boll'}
var copyobj={...obj}
copyobj.c='cat'
console.log("original",obj)
console.log("ccopy",copyobj)