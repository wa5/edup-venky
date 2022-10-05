interface IMyh2{
    a:string,
    h:number,
    f?:()=>void,
    j:boolean,
    arr:number[],
    obj:{g:string}
}
var Myh2=(a:IMyh2)=>{
    return <>hello im h2</>
}

interface IProps{}

var Props:React.FC<IProps>=(props)=>{
var f=():string=>{
    return 'jj'
}
var f1=():number=>{
    return 8
}
var f2:()=>{}=()=>{
    return ()=>{}
}
    console.log(Myh2({a:'hhh',h:8,j:true,f:f2,arr:[6,8,9],obj:{g:'kkk'}}))
    return <>
  <Myh2 a='hhh' h={8} j f={f2} arr={[6,8,9]} obj={{g:'kkk'}}/> 
    <h1>hell234</h1></>
}
Props({})
export default Props
function test(a:number,b:number){

}
function test2(a:string,b:string){

}
interface Itest{
    a:string,
    b:string
}
function test3(props:Itest){
console.log(props.a)
}