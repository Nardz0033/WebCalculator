let display = document.getElementById("display");
let historyList = document.getElementById("history");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    saveHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function saveHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);

  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(entry);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function clearHistory() {
  localStorage.removeItem("calcHistory");
  historyList.innerHTML = "";
}

loadHistory();
