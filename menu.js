const board = document.getElementById("board");
const menu = document.getElementById("menu");

// BEFORE GAME MENU
var whiteText = null;
var blackText = null;

var whiteHumanBtn = null;
var blackHumanBtn = null;
var whiteEngineBtn = null;
var blackEngineBtn = null;

var startBtn = null;

var whiteIsHuman = false;
var blackIsHuman = false;
var whiteSelected = false;
var blackSelected = false;

var beforeGame = false;

// IN GAME MENU
var toBeginningBtn = null;
var backBtn = null;
var forwarwdBtn = null;
var toEndBtn = null;
var flipBoardBtn = null;
var resignBtn = null;
var gameLog = null;
var inGame = false;
var boardFlipped = false;
var currentMoveSelected = -1;
var currentNumberOfLogEntries = 0;


// AFTER GAME MENU
var newGameBtn = null;
var gameOverMessageDiv = null;
var afterGame = false;

function setUpStartingMenu() {
  beforeGame = true;
  whiteSelected = false;
  blackSelected = false;

  whiteText = document.createElement("div");
  whiteText.className = "text";
  whiteText.style.gridRow = 1;
  whiteText.style.gridColumn = 1;
  whiteText.textContent = "WHITE";
  menu.appendChild(whiteText);

  blackText = document.createElement("div");
  blackText.className = "text";
  blackText.style.gridRow = 1;
  blackText.style.gridColumn = 2;
  blackText.textContent = "BLACK";
  menu.appendChild(blackText);

  whiteHumanBtn = document.createElement("button");
  whiteHumanBtn.className = "button1";
  whiteHumanBtn.style.gridRow = 2;
  whiteHumanBtn.style.gridColumn = 1;
  menu.appendChild(whiteHumanBtn);
  whiteHumanBtn.textContent = "HUMAN";
  whiteHumanBtn.addEventListener("click", clickWhiteHuman);
  whiteHumanBtn.addEventListener("mouseover", hoverWhiteHuman);
  whiteHumanBtn.addEventListener("mouseleave", leaveWhiteHuman);

  blackHumanBtn = document.createElement("button");
  blackHumanBtn.className = "button1";
  blackHumanBtn.style.gridRow = 2;
  blackHumanBtn.style.gridColumn = 2;
  menu.appendChild(blackHumanBtn);
  blackHumanBtn.textContent = "HUMAN";
  blackHumanBtn.addEventListener("click", clickBlackHuman);
  blackHumanBtn.addEventListener("mouseover", hoverBlackHuman);
  blackHumanBtn.addEventListener("mouseleave", leaveBlackHuman);

  whiteEngineBtn = document.createElement("button");
  whiteEngineBtn.className = "button1";
  whiteEngineBtn.style.gridRow = 3;
  whiteEngineBtn.style.gridColumn = 1;
  menu.appendChild(whiteEngineBtn);
  whiteEngineBtn.textContent = "ENGINE";
  whiteEngineBtn.addEventListener("click", clickWhiteEngine);
  whiteEngineBtn.addEventListener("mouseover", hoverWhiteEngine);
  whiteEngineBtn.addEventListener("mouseleave", leaveWhiteEngine);

  blackEngineBtn = document.createElement("button");
  blackEngineBtn.className = "button1";
  blackEngineBtn.style.gridRow = 3;
  blackEngineBtn.style.gridColumn = 2;
  menu.appendChild(blackEngineBtn);
  blackEngineBtn.textContent = "ENGINE";
  blackEngineBtn.addEventListener("click", clickBlackEngine);
  blackEngineBtn.addEventListener("mouseover", hoverBlackEngine);
  blackEngineBtn.addEventListener("mouseleave", leaveBlackEngine);

  startBtn = document.createElement("button");
  startBtn.className = "button1";
  startBtn.style.gridRow = 4;
  startBtn.style.gridColumnStart = 1;
  startBtn.style.gridColumnEnd = 3;
  menu.appendChild(startBtn);
  startBtn.textContent = "START";
  startBtn.addEventListener("click", clickStart);
  startBtn.addEventListener("mouseover", hoverStart);
  startBtn.addEventListener("mouseleave", leaveStart);
}

function hoverWhiteHuman() {
  if (beforeGame){
    if (whiteSelected){
      if (!whiteIsHuman) {
        whiteHumanBtn.className = "button1 button1Hoverd";
      }
    } else {
      whiteHumanBtn.className = "button1 button1Hoverd";
    }
  }
}

function leaveWhiteHuman() {
  if (beforeGame) {
    if (whiteSelected) {
      if (!whiteIsHuman) {
        whiteHumanBtn.className = "button1";
      }
    } else {
      whiteHumanBtn.className = "button1";
    }
  }
}

function clickWhiteHuman() {
  if (beforeGame) {
    whiteSelected = true;
    whiteIsHuman = true;
    whiteHumanBtn.className = "button1 button1Clicked";
    whiteEngineBtn.className = "button1";
  }
}

function hoverBlackHuman() {
  if (beforeGame) {
    if (blackSelected){
      if (!blackIsHuman) {
        blackHumanBtn.className = "button1 button1Hoverd";
      }
    } else {
      blackHumanBtn.className = "button1 button1Hoverd";
    }
  }
}

function leaveBlackHuman() {
  if (beforeGame) {
    if (blackSelected) {
      if (!blackIsHuman) {
        blackHumanBtn.className = "button1";
      }
    } else {
      blackHumanBtn.className = "button1";
    }
  }
}

function clickBlackHuman() {
  if (beforeGame) {
    blackSelected = true;
    blackIsHuman = true;
    blackHumanBtn.className = "button1 button1Clicked";
    blackEngineBtn.className = "button1";
  }
}

function hoverWhiteEngine() {
  if (beforeGame) {
    if (whiteSelected){
      if (whiteIsHuman) {
        whiteEngineBtn.className = "button1 button1Hoverd";
      }
    } else {
      whiteEngineBtn.className = "button1 button1Hoverd";
    }
  }
}

function leaveWhiteEngine() {
  if (beforeGame) {
    if (whiteSelected) {
      if (whiteIsHuman) {
        whiteEngineBtn.className = "button1";
      }
    } else {
      whiteEngineBtn.className = "button1";
    }
  }
}

function clickWhiteEngine() {
  if (beforeGame) {
    whiteSelected = true;
    whiteIsHuman = false;
    whiteEngineBtn.className = "button1 button1Clicked";
    whiteHumanBtn.className = "button1";
  }
}

function hoverBlackEngine() {
  if (beforeGame) {
    if (blackSelected){
      if (blackIsHuman) {
        blackEngineBtn.className = "button1 button1Hoverd";
      }
    } else {
      blackEngineBtn.className = "button1 button1Hoverd";
    }
  }
}

function leaveBlackEngine() {
  if (beforeGame) {
    if (blackSelected) {
      if (blackIsHuman) {
        blackEngineBtn.className = "button1";
      }
    } else {
      blackEngineBtn.className = "button1";
    }
  }
}

function clickBlackEngine() {
  if (beforeGame) {
    blackSelected = true;
    blackIsHuman = false;
    blackEngineBtn.className = "button1 button1Clicked";
    blackHumanBtn.className = "button1";
  }
}

function hoverStart() {
  if (beforeGame) {
    startBtn.className = "button1 button1Hoverd";
  }
}

function leaveStart() {
  if (beforeGame) {
    startBtn.className = "button1";
  }
}

function clickStart() {
  if (whiteSelected && blackSelected) {
    deleteStartingMenu();

    // CREATE GAME

    setUpMenuDuringGame();
  }
}

function deleteStartingMenu() {
  beforeGame = false;
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }

}

function setUpMenuDuringGame() {
  inGame = true;
  currentMoveSelected = -1;
  currentNumberOfLogEntries = 0;
  boardFlipped = false;

  toBeginningBtn = document.createElement("button");
  toBeginningBtn.className = "button1";
  menu.appendChild(toBeginningBtn);
  toBeginningBtn.style.gridRow = 1;
  toBeginningBtn.style.gridColumn = 1;
  toBeginningBtn.textContent = "I<";
  toBeginningBtn.addEventListener("click", clickToBeginning);
  toBeginningBtn.addEventListener("mouseover", hoverToBeginning);
  toBeginningBtn.addEventListener("mouseleave", leaveToBeginning);

  backBtn = document.createElement("button");
  backBtn.className = "button1";
  menu.appendChild(backBtn);
  backBtn.style.gridRow = 1;
  backBtn.style.gridColumn = 2;
  backBtn.textContent = "<";
  backBtn.addEventListener("click", clickBack);
  backBtn.addEventListener("mouseover", hoverBack);
  backBtn.addEventListener("mouseleave", leaveBack);

  forwarwdBtn = document.createElement("button");
  forwarwdBtn.className = "button1";
  menu.appendChild(forwarwdBtn);
  forwarwdBtn.style.gridRow = 1;
  forwarwdBtn.style.gridColumn = 3;
  forwarwdBtn.textContent = ">";
  forwarwdBtn.addEventListener("click", clickForward);
  forwarwdBtn.addEventListener("mouseover", hoverForward);
  forwarwdBtn.addEventListener("mouseleave", leaveForward);

  toEndBtn = document.createElement("button");
  toEndBtn.className = "button1";
  menu.appendChild(toEndBtn);
  toEndBtn.style.gridRow = 1;
  toEndBtn.style.gridColumn = 4;
  toEndBtn.textContent = ">I";
  toEndBtn.addEventListener("click", clickToEnd);
  toEndBtn.addEventListener("mouseover", hoverToEnd);
  toEndBtn.addEventListener("mouseleave", leaveToEnd);

  resignBtn = document.createElement("button");
  resignBtn.className = "button1";
  menu.appendChild(resignBtn);
  resignBtn.style.gridRow = 5;
  resignBtn.style.gridColumnStart = 1;
  resignBtn.style.gridColumnEnd = 3;
  resignBtn.textContent = "🏳";
  resignBtn.addEventListener("click", clickResign);
  resignBtn.addEventListener("mouseover", hoverResign);
  resignBtn.addEventListener("mouseleave", leaveResign);

  flipBoardBtn = document.createElement("button");
  flipBoardBtn.className = "button1";
  menu.appendChild(flipBoardBtn);
  flipBoardBtn.style.gridRow = 5;
  flipBoardBtn.style.gridColumnStart = 3;
  flipBoardBtn.style.gridColumnEnd = 5;
  flipBoardBtn.textContent = "\u21ba";
  flipBoardBtn.addEventListener("click", clickFlipBoard);
  flipBoardBtn.addEventListener("mouseover", hoverFlipBoard);
  flipBoardBtn.addEventListener("mouseleave", leaveFlipBoard);

  gameLog = document.createElement("div");
  gameLog.className = "gameLog";
  menu.appendChild(gameLog);

  var log = ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "d3", "Bc5", "O-O", "d6", "Nc3", "O-O"];
  updateLog(log);
}



function hoverToBeginning() {
  if (inGame || afterGame){
    toBeginningBtn.className = "button1 button1Hoverd";
  }
}

function leaveToBeginning() {
  if (inGame || afterGame) {
    toBeginningBtn.className = "button1";
  }
}

function clickToBeginning() {
  if (inGame || afterGame) {
  }
}

function hoverBack() {
  if (inGame || afterGame){
    backBtn.className = "button1 button1Hoverd";
  }
}

function leaveBack() {
  if (inGame || afterGame) {
    backBtn.className = "button1";
  }
}

function clickBack() {
  if (inGame || afterGame) {

  }
}

function hoverForward() {
  if (inGame || afterGame){
    forwarwdBtn.className = "button1 button1Hoverd";
  }
}

function leaveForward() {
  if (inGame || afterGame) {
    forwarwdBtn.className = "button1";
  }
}

function clickForward() {
  if (inGame || afterGame) {

  }
}

function hoverToEnd() {
  if (inGame || afterGame){
    toEndBtn.className = "button1 button1Hoverd";
  }
}

function leaveToEnd() {
  if (inGame || afterGame) {
    toEndBtn.className = "button1";
  }
}

function clickToEnd() {
  if (inGame || afterGame) {

  }
}

function hoverResign() {
  if (inGame){
    resignBtn.className = "button1 button1Hoverd";
  }
}

function leaveResign() {
  if (inGame) {
    resignBtn.className = "button1";
  }
}

function clickResign() {
  if (inGame) {
    deleteMenuDuringGame();
    setUpMenuAfterGame();
  }
}

function hoverFlipBoard() {
  if (inGame || afterGame){
    if (!boardFlipped){
      flipBoardBtn.className = "button1 button1Hoverd";
    }
  }
}

function leaveFlipBoard() {
  if (inGame || afterGame) {
    if (!boardFlipped) {
      flipBoardBtn.className = "button1";
    }
  }
}

function clickFlipBoard() {
  if (inGame || afterGame) {
    if (boardFlipped){
      boardFlipped = false;
      flipBoardBtn.className = "button1";
    } else {
      boardFlipped = true;
      flipBoardBtn.className = "button1 button1Clicked";
    }
  }
}

function hoverLogEntry(evt) {
  if (inGame || afterGame){
    if (currentMoveSelected != evt.currentTarget.moveIndex) {
      evt.currentTarget.className = "logEntry logEntryHovered";
    }
  }
}

function leaveLogEntry(evt) {
  if (inGame || afterGame) {
    if (currentMoveSelected != evt.currentTarget.moveIndex) {
      evt.currentTarget.className = "logEntry";
    }
  }
}

function clickLogEntry(evt) {
  if (inGame || afterGame) {
    old = document.getElementById("log" + String(currentMoveSelected));
    old.className = "logEntry";
    evt.currentTarget.className = "logEntry logEntryClicked";
    currentMoveSelected = evt.currentTarget.moveIndex;

  }
}

function updateLog(log){
  for (let i = currentNumberOfLogEntries; i < log.length; i++){
    let row = Math.floor(i / 2) + 1;
    let entry = document.createElement("div");
    entry.className = "logEntry";
    entry.textContent = log[i];
    entry.style.gridRow = row;

    entry.moveIndex = i;
    gameLog.appendChild(entry);
    entry.id = "log" + String(i);
    entry.addEventListener("click", clickLogEntry);
    entry.addEventListener("mouseover", hoverLogEntry);
    entry.addEventListener("mouseleave", leaveLogEntry);

    if (i % 2 == 0) {
      let logNumber = document.createElement("div");
      logNumber.className = "logNumber";
      logNumber.textContent = String(row);
      logNumber.style.gridRow = row;
      logNumber.style.gridColumn = 1;
      gameLog.appendChild(logNumber);

      entry.style.gridColumn = 2;
    } else {
      entry.style.gridColumn = 3;
    }
  }
  if (currentNumberOfLogEntries < log.length){
    currentNumberOfLogEntries = log.length;
    if (currentMoveSelected != -1){
      document.getElementById("log" + String(currentMoveSelected)).className = "logEntry";
    }
    currentMoveSelected = currentNumberOfLogEntries - 1;
    document.getElementById("log" + String(currentMoveSelected)).className = "logEntry logEntryClicked";
    gameLog.scrollTop = 10000000;
  }
}


function deleteMenuDuringGame() {
  inGame = false;
  menu.removeChild(resignBtn);
}

function setUpMenuAfterGame() {
  afterGame = true;

  newGameBtn = document.createElement("div");
  newGameBtn.className = "button1";
  menu.appendChild(newGameBtn);
  newGameBtn.style.gridRow = 5;
  newGameBtn.style.gridColumnStart = 1
  newGameBtn.style.gridColumnEnd = 3;
  newGameBtn.textContent = "Revanche";
  newGameBtn.addEventListener("click", clickNewGame);
  newGameBtn.addEventListener("mouseover", hoverNewGame);
  newGameBtn.addEventListener("mouseleave", leaveNewGame);

  gameLog.style.gridRowEnd = 4;

  gameOverMessageDiv = document.createElement("div");
  gameOverMessageDiv.className = "gameOverMessage";
  menu.appendChild(gameOverMessageDiv);
  /*
  gameOverMessageDiv.gridRow = 4;
  gameOverMessageDiv.gridColumnStart = 2;
  gameOverMessageDiv.gridColumnEnd = 5;
  */
  gameOverMessageDiv.textContent = "White won by checkmate";


}

function hoverNewGame() {
  if (afterGame){
    newGameBtn.className = "button1 button1Hoverd";
  }
}

function leaveNewGame() {
  if (afterGame) {
    newGameBtn.className = "button1";
  }
}

function clickNewGame() {
  if (afterGame) {
    deleteMenuAfterGame();
    setUpStartingMenu();
  }
}

function deleteMenuAfterGame() {
  afterGame = false;
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
}


setUpStartingMenu();
