function days() {
  var day = Math.floor(Math.random() * 6 + 1);
  var ele = document.getElementById("root1") as HTMLDivElement;
  switch (day) {
    case 1:
      ele.innerHTML = `monday`;
      break;
    case 2:
      ele.innerHTML = `tuseday`;
      break;
    case 3:
      ele.innerHTML = `wednesday`;
      break;
    case 4:
      ele.innerHTML = `thirsday`;
      break;
    case 5:
      ele.innerHTML = `friday`;
      break;
    case 6:
      ele.innerHTML = `saturday`;
      break;
    case 7:
      ele.innerHTML = `snady`;
      break;

    default:
      ele.innerHTML = `${day}`;
  }
}

function game() {
  var ran = Math.floor(Math.random() * 6 + 1);
  var ele = document.getElementById("root") as HTMLDivElement;

  ele.innerHTML = `${ran}`;
}

console.log(Math.floor(Math.random() * 6 + 1));
