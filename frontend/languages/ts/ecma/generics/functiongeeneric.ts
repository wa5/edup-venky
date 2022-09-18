function identity(arg:number):number{
    return arg
}
// identity('ff')
function identity1(arg:any):any{
    return arg
}
identity1('r')
identity1(33)
function identity3<T>(arg:T):T{
return arg
}
let out=identity3<number>(9)
let out2=identity3<string>('jjj')
function identity4<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
    }

    identity4<number>([2,4,5,6])


    function store<EXPECT>(arg:EXPECT):EXPECT{
        return arg
    }

   console.log("ll",typeof(store('milk'))) 
    store(9)
    store(true)