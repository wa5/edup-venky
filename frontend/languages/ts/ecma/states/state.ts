let counter=0
function incrementCounter(){

  counter=counter+1
  renderstate()
}

function renderstate(){
 console.log(counter)
}
setInterval(()=>{
    incrementCounter()
},1000)
