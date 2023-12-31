// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  surveyData;
  for (let i = 0; i < surveyData.length; i++) {
    console.log(surveyData[i]);
  }
  // Count the number of "Yes" responses,
 let totalYes = 0;
 let i =index.surveyData;
 if(surveyData[i] === "yes") {
  totalYes++; outputEl.innerHTML += "<br>Total 'Yes' responses: " + totalYes;
 }
  // Count the number of "No" responses,
  let totalNo = 0;
  if(surveyData[i] === "no") {
    totalNo++; outputEl.innerHTML += "<br>Total 'No' responses: " + totalNo;
  }
  // Count the number of "Maybe" responses,
  let totalMaybe = 0; maybe
  if(surveyData[i] === "maybe") {
    totalMaybe++;outputEl.innerHTML += "<br>Total 'Maybe' responses: " + totalMaybe
  }
  // and output the results in the outputEl.
  outputEl.innerHTML = "Survey Data";
  
  
  
  outputEl.innerHTML = "Survey Data";
  console.log(surveyData);
}
console.log(yes);
function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  outputEl.innerHTML = "Age Data";
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML = "Number Data";
  console.log(numberData);
}
