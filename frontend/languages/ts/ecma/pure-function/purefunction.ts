//impure function
function add(a:any,b:any){
    const total=a+b
    console.log(total)
    add1()
}
//pure function
function add1(a:any,b:any){
    const total=a+b
    return total
}