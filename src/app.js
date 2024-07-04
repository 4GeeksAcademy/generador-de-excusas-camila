import "bootstrap";
import "./style.css";

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "while I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = "";
  let randomElements = [who, action, what, when];

  for (let i = 0; i < randomElements.length; i++) {
    let randomIndex = Math.floor(Math.random() * randomElements[i].length);
    excuse += randomElements[i][randomIndex] + " ";
  }

  document.querySelector("#excuse").innerHTML = excuse.trim();
}

document.addEventListener("DOMContentLoaded", function() {
  generateExcuse();
});
