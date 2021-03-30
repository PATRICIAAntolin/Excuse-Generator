/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuseGenerator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let randomWho = Math.floor(Math.random() * 4);
    let randomAction = Math.floor(Math.random() * 4);
    let randomWhat = Math.floor(Math.random() * 3);
    let randomWhen = Math.floor(Math.random() * 5);

    let excuse =
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen];
    document.getElementById("miexcusa").innerHTML = excuse;
  }
  excuseGenerator();
};
