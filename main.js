// main elements
const result_place = document.querySelector(".result_place");
const spans = document.querySelectorAll("span");
// operations
const operations = ["*", "/", "+", "-", "."];
// the result variable
let result = "";
let saving_result = "";
// create the function that will get the result
const getresult = (btn) => {
  if (btn === "=") {
    if (result.length > 0) {
      result = eval(result);
      saving_result = result;
    }
  } else if (btn === "AC") {
    result = "";
  } else if (btn === "DE") {
    result = result.toString().slice(0, -1);
  } else if (btn === "ANS") {
    result = localStorage.getItem("res");
    result_place.innerHTML = result;
  } else {
    // check for the first time
    if (
      (btn == "/" && result.length == 0) ||
      (btn == "*" && result.length == 0) ||
      (btn == "+" && result.length == 0) ||
      (btn == "-" && result.length == 0) ||
      (btn == "." && result.length == 0)
    ) {
      result = "";
    } else {
      result += btn;
    }
  }
  result_place.innerHTML = result;
  localStorage.setItem("res", saving_result);
};
window.onload = (e) => {
  e.preventDefault();
  spans.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      // get the value of clicked button and push it to getresult function
      getresult(e.target.dataset.value);
    });
  });
};
