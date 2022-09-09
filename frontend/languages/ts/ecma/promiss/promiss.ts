var data=[{a:'b',b:4},{a:'b',b:4},{a:'b',b:4}]
var  promiss=new Promise((resol,reject)=>{
    //console.log('hi  i got rejected')
    setTimeout(()=>{
        var err=true
        if(!err){
            resol(data)
        }else{
            reject('rejecte')
        }
    },2000)
  
})
console.log(promiss)
promiss.then((a)=>{
console.log(a)
})
promiss.catch((a)=>{
    console.log(a)
    })

