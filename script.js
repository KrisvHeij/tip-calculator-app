const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipEl = document.getElementById("tip-amount");
const totalEl = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
const customInput = document.querySelector(".input-custom");
const container = document.querySelector(".container");
const resetBtn = document.getElementById("reset-btn");
const billError = document.getElementById("bill-error");
const peopleError = document.getElementById("people-error");

let selectedTip;

function getBill() {
  return parseFloat(billInput.value);
}

// EventListeners for tip-buttons
tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    // Reset tip buttons & custom input field
    customInput.classList.remove("active");
    customInput.value = "";
    // Add active class
    tips.forEach(tp => tp.classList.remove("active"));
    tip.classList.add("active");

    selectedTip = parseFloat(tip.value);
  })
})

// EventListener for custom input
customInput.addEventListener("input", () => {
  // Reset tip buttons
  tips.forEach(tp => tp.classList.remove("active"));
  // Add active class
  customInput.classList.add("active");

  const inputValue = parseFloat(customInput.value);
  selectedTip = inputValue;
})

function getNumOfPeople() {
  return parseFloat(peopleInput.value);
}

function calculateTipAmount(bill, tip, people) {
  const tp = tip / 100;
  const totalTip = bill * tp;
  return  totalTip / people;
}

function calculateTotal(bill, tip, people) {
  const tp = tip / 100;
  const totalAmount = bill + (bill * tp);
  return totalAmount / people;
}

function showResults(tip, total) {
  tipEl.innerText = `$${tip.toFixed(2)}`;
  totalEl.innerText = `$${total.toFixed(2)}`;
}

function showError(element) {
  element.classList.remove("hidden");
}

function removeError(element) {
  element.classList.add("hidden");
}

function resetAll() {
  selectedTip = null;
  tips.forEach(tp => tp.classList.remove("active"));
  customInput.classList.remove("active");
  customInput.value = "";
  billInput.value = "";
  peopleInput.value = "";
  resetBtn.classList.remove("active");
}

// Event Listeners
const events = ["click", "input"];

events.forEach((event) => {
  container.addEventListener(event, () => {
    const bill = getBill();
    const tip = selectedTip;
    const people = getNumOfPeople();

    console.log(tip)

    // Hightlight resetBtn when there is input
    if (bill || tip || people) {
      resetBtn.classList.add("active");
    }

    // Show error for invalid input
    if (bill && tip && people <= 0 || bill && tip && isNaN(people)) {
      if (people <= 0) {
        showError(peopleError);
        peopleError.innerText = "Can't be zero of empty";
        peopleInput.classList.add("outline-red");
        return; 
      } else if (isNaN(people)) {
        showError(peopleError)
        peopleError.innerText = "Please enter a number";
        peopleInput.classList.add("outline-red");
      } 
    } else {
      removeError(peopleError);
      peopleInput.classList.remove("outline-red");
    }

    if (bill <= 0 || isNaN(bill)) {
      showError(billError);
      billError.innertext = "Please enter a valid bill amount";
      billInput.classList.add("outline-red");
      return;
    } else {
      removeError(billError);
      billInput.classList.remove("outline-red");
    }

    // Calculate & show results
    const tipResult = calculateTipAmount(bill, tip, people);
    const totalResult = calculateTotal(bill, tip, people);
      
    if (!tipResult || !totalResult) {
      showResults(0, 0);
    } else {
      showResults(tipResult, totalResult);
    }
  })
})

resetBtn.addEventListener("click", () => {
  resetAll();
  showResults(0, 0);
});