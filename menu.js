const board = document.getElementById("board");
const menu = document.getElementById("menu");

var whiteText = null;
var blackText = null;

var whiteHumanBtn = null;
var blackHumanBtn = null;
var whiteEngineBtn = null;
var blackEngineBtn = null;

var startBtn = null;

var whiteIsHuman = false;
var blackIsHuman = false;


function setUpStartingMenu() {
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

  blackHumanBtn = document.createElement("button");
  blackHumanBtn.className = "button1 blackHumanBtn";
  menu.appendChild(blackHumanBtn);
  blackHumanBtn.textContent = "HUMAN";

  whiteEngineBtn = document.createElement("button");
  whiteEngineBtn.className = "button1 whiteEngineBtn";
  menu.appendChild(whiteEngineBtn);
  whiteEngineBtn.textContent = "ENGINE";

  blackEngineBtn = document.createElement("button");
  blackEngineBtn.className = "button1 blackEngineBtn";
  menu.appendChild(blackEngineBtn);
  blackEngineBtn.textContent = "ENGINE";

  startBtn = document.createElement("button");
  startBtn.className = "button1 startBtn";
  menu.appendChild(startBtn);
  startBtn.textContent = "START";

}

function deleteStartingMenu() {

}

function setUpMenuDuringGame() {

}

function deleteMenuDuringGame() {

}

function setUpMenuAfterGame() {

}

function deleteMenuAfterGame() {

}

setUpStartingMenu();
