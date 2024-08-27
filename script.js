let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = input.value;
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

// document.getElementById("inputBox").addEventListener("input", function (e) {
//   let input_val = e.target.value;
//   const regex = /^[0-9+*\/\-]+$/;
//   if (!regex.test(input_val)) {
//     input_val = input_val.slice(0, -1);
//     console.log(input_val);
//     input.value = "letter";
//   }
// });
document.getElementById("inputBox").addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    string = input.value;
    string = eval(string);
    input.value = string;
  }
  if (e.keyCode === 46) {
    input.value = "";
  }
});
