let string = "";
let display = document.querySelector(".display");
let btns = document.querySelectorAll(".btn");
let toggle = true;
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
      console.log(string, typeof(string));
      display.innerHTML = string;
      if(string.toString().includes(".")){
        toggle = false
        console.log("hiii");
      }else{
        toggle = true;
      }
    } else if (e.target.innerHTML == "Back") {
      string = string.toString();
      string = string.slice(0, string.length - 1);
      display.innerHTML = string;
    } else {
      if(e.target.innerHTML === "."){
         if(toggle === true){
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
          toggle = false
         } else{
          return
         }
      }else if(["+","-","*","/"].includes(e.target.innerHTML)){
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
          console.log("hello",string);
          return;
        }
        string = string + e.target.innerHTML;
        display.innerHTML = string;
        toggle = true;
      }else{
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
    }
  });
});
