var data=[{a:'b',b:4},{a:'b',b:4},{a:'b',b:4}]
async function d(){
    var  promiss=new Promise((resol,reject)=>{
        //console.log('hi  i got rejected')
        setTimeout(()=>{
            var err=false
            if(!err){
                resol(data)
            }else{
                reject('rejecte')
            }
        },2000)
      
    })
    
    console.log(await promiss)
}
d()


