//synrex <> inside symbol u give 
interface Iown<T>{
    [key:string]:T
}

type Iglas<T>=Iown<T> &{
   
   // water:string
   
}


var glss:Iglas<string>={shape:'round',waite:'50grm'}
glss.water='jj'
glss.juice='jj'
glss.tea='jj'


//optinal properties with ur own key name
// interface Iglas{
//     shape:string,
//     waite:string,
//    // water:string
//     [key:string]:string,
// }


// var glss:Iglas={shape:'round',waite:'50grm'}
// glss.water='s'
// glss.juice='s'
// glss.tea='s'