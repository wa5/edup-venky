var data = [{ a: 'b', b: 4 }, { a: 'b', b: 4 }, { a: 'b', b: 4 }];
var promiss = new Promise(function (resol, reject) {
    //console.log('hi  i got rejected')
    setTimeout(function () {
        var err = true;
        if (!err) {
            resol(data);
        }
        else {
            reject('rejecte');
        }
    }, 2000);
});
console.log(promiss);
promiss.then(function (a) {
    console.log(a);
});
promiss["catch"](function (a) {
    console.log(a);
});
