document.addEventListener("DOMContentLoaded", function () {
  let aktuelleZahl = 0;
  let vorherigeZahl = 0;
  let result = 0;
  let history = [];
  let operator = null;

  function add(input) {
    aktuelleZahl = aktuelleZahl * 10 + input;
    console.log(aktuelleZahl);
    updateAktuell();
  }

  function setOperator(input) {
    if (operator !== null) {
      calculate();
    }
    vorherigeZahl = aktuelleZahl;
    aktuelleZahl = 0;
    operator = input;
    updateVorherigeZahl();
    updateAktuell();
  }

  function calculate() {
    if (operator === null) return;
    switch (operator) {
      case "+":
        result = vorherigeZahl + aktuelleZahl;
        break;
      case "-":
        result = vorherigeZahl - aktuelleZahl;
        break;
      case "/":
        result = vorherigeZahl / aktuelleZahl;
        break;
      case "*":
        result = vorherigeZahl * aktuelleZahl;
        break;
      default:
        return;
    }
    history.push(`${vorherigeZahl} ${operator} ${aktuelleZahl} = ${result}`);
    updateHistory();

    aktuelleZahl = result;
    operator = null;
    updateAktuell();
  }
  function remove() {
    aktuelleZahl = Math.floor(aktuelleZahl / 10);
    updateAktuell();
  }

  function reset() {
    aktuelleZahl = "";
    vorherigeZahl = "";
    operator = null;
    history = [];

    document.getElementById("eingabeZahl").value = "";
    document.getElementById("eingabeSpeicher").value = "";
    document.getElementById("ergebnis").value = "";
    document.getElementById("sumHistory").innerHTML = "";
  }

  function updateAktuell() {
    document.getElementById("eingabeZahl").value = aktuelleZahl;
  }

  function updateVorherigeZahl() {
    document.getElementById("eingabeSpeicher").value = vorherigeZahl;
  }

  function updateEndstand() {
    document.getElementById("ergebnis").value = result;
  }

  function updateHistory() {
    document.getElementById("sumHistory").innerHTML = history.join("<p>");
  }

  function hochzwei() {
    result = aktuelleZahl * aktuelleZahl;
    history.push(`${aktuelleZahl}² = ${result}`);
    updateHistory();
    aktuelleZahl = result;
    document.getElementById("eingabeZahl").value = result;
  }

  function change() {
    document.body.classList.toggle("darkmode");
  }

  window.change = change;
  window.hochzwei = hochzwei;
  window.remove = remove;
  window.history = history;
  window.add = add;
  window.reset = reset;
  window.calculate = calculate;
  window.setOperator = setOperator;
  window.setOperator = setOperator;
  window.updateAktuell = updateAktuell;
  window.updateEndstand = updateEndstand;
});
