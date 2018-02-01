// ten skrypt dodatkowo rysuje jeszcze nóżkę naszej choince (wygląda dobrze dopiero dla a > 3)

function drawTree(h) {
  var star = "                ";
  var leg = "              ";
  for (var i = 0 ; i < h ; i++) {
    star = star.slice(1,50);
    star += '* ';
    console.log(star);
  }
  leg += '* *';
  console.log(leg);
  console.log(leg);
}

var a = prompt('Enter tree height');
drawTree(a);

