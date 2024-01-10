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



// AFTER GAME MENU
var afterGame = false;

function setUpStartingMenu() {
  beforeGame = true;
  whiteSelected = false;
  blackSelected = false;

  menu.className = "menu menuBeforeGame";

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
  resignBtn.textContent = "RESIGN";
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
    flipBoardBtn.className = "button1 flipBoardBtn button1Hoverd";
  }
}

function leaveFlipBoard() {
  if (inGame) {
    flipBoardBtn.className = "button1 flipBoardBtn";
  }
}

function clickFlipBoard() {
  if (inGame) {

  }
}

function deleteMenuDuringGame() {

}

function setUpMenuAfterGame() {

}

function deleteMenuAfterGame() {

}


setUpStartingMenu();
