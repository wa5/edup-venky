var data1=fetch('https://data.covid19india.org/data.json').then((a)=>{
    return a.json()
})


data1.then((a)=>{
    console.log(a)
})