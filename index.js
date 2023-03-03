let string = "";
let display = document.querySelector(".display");
let btns = document.querySelectorAll(".btn");
Array.from(btns).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "C") {
      string = "";
      display.innerHTML = string;
    } else if (e.target.innerHTML == "=") {
      if (string == "") {
        return;
      }
      string = eval(string);
      display.innerHTML = string;
    } else if (e.target.innerHTML == "Back") {
      string = string.toString();
      string = string.slice(0, string.length - 1);
      display.innerHTML = string;
    } else {
      if (
        (string[string.length - 1] == "-" ||
          string[string.length - 1] == "+" ||
          string[string.length - 1] == "*" ||
          string[string.length - 1] == "." ||
          string[string.length - 1] == "/") &&
        (e.target.innerHTML == "-" ||
          e.target.innerHTML == "+" ||
          e.target.innerHTML == "*" ||
          e.target.innerHTML == "." ||
          e.target.innerHTML == "/")
      ) {
        return;
      }
      if (
        string == "" &&
        (e.target.innerHTML == "/" ||
          e.target.innerHTML == "." ||
          e.target.innerHTML == "*")
      ) {
        display.innerHTML = string;
        return;
      }
      string = string + e.target.innerHTML;
      display.innerHTML = string;
    }
  });
});
