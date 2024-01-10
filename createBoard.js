function createBoard(){
  var color = "black";
  for (row=0; row<8; row++){
    for (column=0; column<8; column++){
      var field = document.createElement("div");
      field.className = color + "Field";
      field.id = row.toString() + column.toString();
      color = switchColor(color);
      document.getElementById("board").appendChild(field);
    }
    color = switchColor(color);
  }
}

function switchColor(color){
  if (color === "white"){
    return "black";
  }
  else {
    return "white";
  }
}

createBoard();
