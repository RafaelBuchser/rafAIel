const colorMask = 24;
const typeMask = 7;

const white = 8;
const black = 16;
const pawn = 1;
const knight = 2;
const bishop = 3;
const rook = 4;
const queen = 5;
const king = 6;

function createBoard(){
  let color = "black";
  for (let row=0; row<8; row++){
    for (let column=0; column<8; column++){
      let square = document.createElement("div");
      square.className = color + "Square";
      square.id = "square" + String(row * 8 + column);
      color = switchColor(color);
      document.getElementById("board").appendChild(square);
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

function updateBoard(board){
  for (let i = 0; i < 64; i++){
    if (board[i]){
      let piece = (board[i] & typeMask);
      let color = (board[i] & colorMask);
      createImage("square" + String(i), piece, color);
    } else {
      removeImage("square" + String(i));
    }
  }
}

function createImage(squareId, piece, color) {
    const square = document.getElementById(squareId);
    const img = document.createElement("img");
    if (color === white){
      if (piece === pawn) {
        img.src = "images/pawnWhite.png";
      } else if (piece === knight) {
        img.src = "images/knightWhite.png";
      } else if (piece === bishop) {
        img.src = "images/bishopWhite.png";
      } else if (piece === rook) {
        img.src = "images/rookWhite.png";
      } else if (piece === queen) {
        img.src = "images/queenWhite.png";
      } else if (piece === king) {
        img.src = "images/kingWhite.png";
      }
    } else {
      if (piece === pawn) {
        img.src = "images/pawnBlack.png";
      } else if (piece === knight) {
        img.src = "images/knightBlack.png";
      } else if (piece === bishop) {
        img.src = "images/bishopBlack.png";
      } else if (piece === rook) {
        img.src = "images/rookBlack.png";
      } else if (piece === queen) {
        img.src = "images/queenBlack.png";
      } else if (piece === king) {
        img.src = "images/kingBlack.png";
      }
    }
    img.className = "chessPiece";
    square.appendChild(img);
}

function removeImage(squareId) {
    const square = document.getElementById(squareId);
    while (square.firstChild) {
        square.removeChild(square.firstChild);
    }
}

createBoard();
let tempboard = Array(64);
tempboard[0] = black + rook;
tempboard[1] = black + knight;
tempboard[2] = black + bishop;
tempboard[3] = black + queen;
tempboard[4] = black + king;
tempboard[5] = black + bishop;
tempboard[6] = black + knight;
tempboard[7] = black + rook;
tempboard[8] = black + pawn;
tempboard[9] = black + pawn;
tempboard[10] = black + pawn;
tempboard[11] = black + pawn;
tempboard[12] = black + pawn;
tempboard[13] = black + pawn;
tempboard[14] = black + pawn;
tempboard[15] = black + pawn;

tempboard[48] = white + pawn;
tempboard[49] = white + pawn;
tempboard[50] = white + pawn;
tempboard[51] = white + pawn;
tempboard[52] = white + pawn;
tempboard[53] = white + pawn;
tempboard[54] = white + pawn;
tempboard[55] = white + pawn;
tempboard[56] = white + rook;
tempboard[57] = white + knight;
tempboard[58] = white + bishop;
tempboard[59] = white + queen;
tempboard[60] = white + king;
tempboard[61] = white + bishop;
tempboard[62] = white + knight;
tempboard[63] = white + rook;
updateBoard(tempboard);
