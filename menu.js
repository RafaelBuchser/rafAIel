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
var afterGame = false;

function setUpStartingMenu() {
  beforeGame = true;
  whiteSelected = false;
  blackSelected = false;

  whiteText = document.createElement("div");
  whiteText.className = "text whiteText";
  whiteText.textContent = "WHITE";
  menu.appendChild(whiteText);

  blackText = document.createElement("div");
  blackText.className = "text blackText";
  blackText.textContent = "BLACK";
  menu.appendChild(blackText);

  whiteHumanBtn = document.createElement("button");
  whiteHumanBtn.className = "button1 whiteHumanBtn";
  menu.appendChild(whiteHumanBtn);
  whiteHumanBtn.textContent = "HUMAN";
  whiteHumanBtn.addEventListener("click", clickWhiteHuman);
  whiteHumanBtn.addEventListener("mouseover", hoverWhiteHuman);
  whiteHumanBtn.addEventListener("mouseleave", leaveWhiteHuman);

  blackHumanBtn = document.createElement("button");
  blackHumanBtn.className = "button1 blackHumanBtn";
  menu.appendChild(blackHumanBtn);
  blackHumanBtn.textContent = "HUMAN";
  blackHumanBtn.addEventListener("click", clickBlackHuman);
  blackHumanBtn.addEventListener("mouseover", hoverBlackHuman);
  blackHumanBtn.addEventListener("mouseleave", leaveBlackHuman);

  whiteEngineBtn = document.createElement("button");
  whiteEngineBtn.className = "button1 whiteEngineBtn";
  menu.appendChild(whiteEngineBtn);
  whiteEngineBtn.textContent = "ENGINE";
  whiteEngineBtn.addEventListener("click", clickWhiteEngine);
  whiteEngineBtn.addEventListener("mouseover", hoverWhiteEngine);
  whiteEngineBtn.addEventListener("mouseleave", leaveWhiteEngine);

  blackEngineBtn = document.createElement("button");
  blackEngineBtn.className = "button1 blackEngineBtn";
  menu.appendChild(blackEngineBtn);
  blackEngineBtn.textContent = "ENGINE";
  blackEngineBtn.addEventListener("click", clickBlackEngine);
  blackEngineBtn.addEventListener("mouseover", hoverBlackEngine);
  blackEngineBtn.addEventListener("mouseleave", leaveBlackEngine);

  startBtn = document.createElement("button");
  startBtn.className = "button1 startBtn";
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
        whiteHumanBtn.className = "button1 whiteHumanBtn button1Hoverd";
      }
    } else {
      whiteHumanBtn.className = "button1 whiteHumanBtn button1Hoverd";
    }
  }
}

function leaveWhiteHuman() {
  if (beforeGame) {
    if (whiteSelected) {
      if (!whiteIsHuman) {
        whiteHumanBtn.className = "button1 whiteHumanBtn";
      }
    } else {
      whiteHumanBtn.className = "button1 whiteHumanBtn";
    }
  }
}

function clickWhiteHuman() {
  if (beforeGame) {
    whiteSelected = true;
    whiteIsHuman = true;
    whiteHumanBtn.className = "button1 whiteHumanBtn button1Clicked";
    whiteEngineBtn.className = "button1 whiteEngineBtn";
  }
}

function hoverBlackHuman() {
  if (beforeGame) {
    if (blackSelected){
      if (!blackIsHuman) {
        blackHumanBtn.className = "button1 blackHumanBtn button1Hoverd";
      }
    } else {
      blackHumanBtn.className = "button1 blackHumanBtn button1Hoverd";
    }
  }
}

function leaveBlackHuman() {
  if (beforeGame) {
    if (blackSelected) {
      if (!blackIsHuman) {
        blackHumanBtn.className = "button1 blackHumanBtn";
      }
    } else {
      blackHumanBtn.className = "button1 blackHumanBtn";
    }
  }
}

function clickBlackHuman() {
  if (beforeGame) {
    blackSelected = true;
    blackIsHuman = true;
    blackHumanBtn.className = "button1 blackHumanBtn button1Clicked";
    blackEngineBtn.className = "button1 blackEngineBtn";
  }
}

function hoverWhiteEngine() {
  if (beforeGame) {
    if (whiteSelected){
      if (whiteIsHuman) {
        whiteEngineBtn.className = "button1 whiteEngineBtn button1Hoverd";
      }
    } else {
      whiteEngineBtn.className = "button1 whiteEngineBtn button1Hoverd";
    }
  }
}

function leaveWhiteEngine() {
  if (beforeGame) {
    if (whiteSelected) {
      if (whiteIsHuman) {
        whiteEngineBtn.className = "button1 whiteEngineBtn";
      }
    } else {
      whiteEngineBtn.className = "button1 whiteEngineBtn";
    }
  }
}

function clickWhiteEngine() {
  if (beforeGame) {
    whiteSelected = true;
    whiteIsHuman = false;
    whiteEngineBtn.className = "button1 whiteEngineBtn button1Clicked";
    whiteHumanBtn.className = "button1 whiteHumanBtn";
  }
}

function hoverBlackEngine() {
  if (beforeGame) {
    if (blackSelected){
      if (blackIsHuman) {
        blackEngineBtn.className = "button1 blackEngineBtn button1Hoverd";
      }
    } else {
      blackEngineBtn.className = "button1 blackEngineBtn button1Hoverd";
    }
  }
}

function leaveBlackEngine() {
  if (beforeGame) {
    if (blackSelected) {
      if (blackIsHuman) {
        blackEngineBtn.className = "button1 blackEngineBtn";
      }
    } else {
      blackEngineBtn.className = "button1 blackEngineBtn";
    }
  }
}

function clickBlackEngine() {
  if (beforeGame) {
    blackSelected = true;
    blackIsHuman = false;
    blackEngineBtn.className = "button1 blackEngineBtn button1Clicked";
    blackHumanBtn.className = "button1 blackHumanBtn";
  }
}

function hoverStart() {
  if (beforeGame) {
    startBtn.className = "button1 startBtn button1Hoverd";
  }
}

function leaveStart() {
  if (beforeGame) {
    startBtn.className = "button1 startBtn";
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

  toBeginningBtn = document.createElement("button");
  toBeginningBtn.className = "button1 toBeginningBtn";
  menu.appendChild(toBeginningBtn);
  toBeginningBtn.textContent = "I<";
  toBeginningBtn.addEventListener("click", clickToBeginning);
  toBeginningBtn.addEventListener("mouseover", hoverToBeginning);
  toBeginningBtn.addEventListener("mouseleave", leaveToBeginning);

  backBtn = document.createElement("button");
  backBtn.className = "button1 backBtn";
  menu.appendChild(backBtn);
  backBtn.textContent = "<";
  backBtn.addEventListener("click", clickBack);
  backBtn.addEventListener("mouseover", hoverBack);
  backBtn.addEventListener("mouseleave", leaveBack);

  forwarwdBtn = document.createElement("button");
  forwarwdBtn.className = "button1 forwarwdBtn";
  menu.appendChild(forwarwdBtn);
  forwarwdBtn.textContent = ">";
  forwarwdBtn.addEventListener("click", clickForward);
  forwarwdBtn.addEventListener("mouseover", hoverForward);
  forwarwdBtn.addEventListener("mouseleave", leaveForward);

  toEndBtn = document.createElement("button");
  toEndBtn.className = "button1 toEndBtn";
  menu.appendChild(toEndBtn);
  toEndBtn.textContent = ">I";
  toEndBtn.addEventListener("click", clickToEnd);
  toEndBtn.addEventListener("mouseover", hoverToEnd);
  toEndBtn.addEventListener("mouseleave", leaveToEnd);

  resignBtn = document.createElement("button");
  resignBtn.className = "button1 resignBtn";
  menu.appendChild(resignBtn);
  resignBtn.textContent = "🏳";
  resignBtn.addEventListener("click", clickResign);
  resignBtn.addEventListener("mouseover", hoverResign);
  resignBtn.addEventListener("mouseleave", leaveResign);

  flipBoardBtn = document.createElement("button");
  flipBoardBtn.className = "button1 flipBoardBtn";
  menu.appendChild(flipBoardBtn);
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
  if (inGame){
    toBeginningBtn.className = "button1 toBeginningBtn button1Hoverd";
  }
}

function leaveToBeginning() {
  if (inGame) {
    toBeginningBtn.className = "button1 toBeginningBtn";
  }
}

function clickToBeginning() {
  if (inGame) {
  }
}

function hoverBack() {
  if (inGame){
    backBtn.className = "button1 backBtn button1Hoverd";
  }
}

function leaveBack() {
  if (inGame) {
    backBtn.className = "button1 backBtn";
  }
}

function clickBack() {
  if (inGame) {

  }
}

function hoverForward() {
  if (inGame){
    forwarwdBtn.className = "button1 forwarwdBtn button1Hoverd";
  }
}

function leaveForward() {
  if (inGame) {
    forwarwdBtn.className = "button1 forwarwdBtn";
  }
}

function clickForward() {
  if (inGame) {

  }
}

function hoverToEnd() {
  if (inGame){
    toEndBtn.className = "button1 toEndBtn button1Hoverd";
  }
}

function leaveToEnd() {
  if (inGame) {
    toEndBtn.className = "button1 toEndBtn";
  }
}

function clickToEnd() {
  if (inGame) {

  }
}

function hoverResign() {
  if (inGame){
    resignBtn.className = "button1 resignBtn button1Hoverd";
  }
}

function leaveResign() {
  if (inGame) {
    resignBtn.className = "button1 resignBtn";
  }
}

function clickResign() {
  if (inGame) {

  }
}

function hoverFlipBoard() {
  if (inGame){
    if (!boardFlipped){
      flipBoardBtn.className = "button1 flipBoardBtn button1Hoverd";
    }
  }
}

function leaveFlipBoard() {
  if (inGame) {
    if (!boardFlipped) {
      flipBoardBtn.className = "button1 flipBoardBtn";
    }
  }
}

function clickFlipBoard() {
  if (inGame) {
    if (boardFlipped){
      boardFlipped = false;
      flipBoardBtn.className = "button1 flipBoardBtn";
    } else {
      boardFlipped = true;
      flipBoardBtn.className = "button1 flipBoardBtn button1Clicked";
    }
  }
}

function hoverLogEntry(evt) {
  if (inGame){
    if (currentMoveSelected != evt.currentTarget.moveIndex) {
      evt.currentTarget.className = "logEntry logEntryHovered";
    }
  }
}

function leaveLogEntry(evt) {
  if (inGame) {
    if (currentMoveSelected != evt.currentTarget.moveIndex) {
      evt.currentTarget.className = "logEntry";
    }
  }
}

function clickLogEntry(evt) {
  if (inGame) {
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

}

function setUpMenuAfterGame() {

}

function deleteMenuAfterGame() {

}


setUpStartingMenu();
