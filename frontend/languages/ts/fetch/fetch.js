var data1 = fetch('https://data.covid19india.org/data.json').then(function (a) {
    return a.json();
});
data1.then(function (a) {
    console.log(a);
});
