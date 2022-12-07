// Nickname Generator

// VARIABLES FOR HTML ELEMENTS
let randomNicknameEl = document.getElementById("randomNicknames");
let allNicknameEl = document.getElementById("allNicknames");
let containerEl = document.getElementById("container");
let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");

// ARRAY
let nicknames = ["the boss", "the great", "the guy", "the cool guy", "the monster", "the boulder"];

// ADD EVENT LISTENER TO BUTTON
randomNicknameEl.addEventListener("click", returnRandomNick);
allNicknameEl.addEventListener("click", returnAllNick);

// Returns a random nickname
function returnRandomNick() {
  let firstName = firstNameEl.value;
  let lastName = lastNameEl.value;
  containerEl.innerHTML = "<div>" + firstName + " " + `${nicknames[randomInt(0, nicknames.length)]}` + " " + lastName + "</div>";
}

// Returns a list of all nicknames
function returnAllNick() {
  let firstName = firstNameEl.value;
  let lastName = lastNameEl.value;
  let outputStr = "";
  for (let i = 0; i < nicknames.length; i++) {
    outputStr += "<div>" + firstName + " " + `${nicknames[i]}` + " " + lastName + "</div>";
  }
  containerEl.innerHTML = outputStr;
}
