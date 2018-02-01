// nie widzę sensu zagnieżdżania pętli, nie wiem czemu w poleceniu każą to robić

function drawTree(h) {
  var star = "                ";
  for (var i = 0 ; i < h ; i++) {
    star = star.slice(1,50);
    star += '* ';
    console.log(star);
  }
}

var a = prompt('Enter tree height');
drawTree(a);

