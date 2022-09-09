function myfunction() {
    var text = '';
    var i;
    var j;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 2; j++) {
            text += "this no is i ".concat(i, " and j").concat(j, " <br>");
        }
    }
    document.getElementById('root').innerHTML = text;
    console.log(text);
}
