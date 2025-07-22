const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipEl = document.getElementById("tip-amount");
const totalEl = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
const customInput = document.querySelector(".input-custom");
const inputContainer = document.querySelector(".input-container");

// const billAmount = getBill();
// let numOfPeople;


// function getBill() {
//     bill.addEventListener("keyup", () => {
//       billAmount = parseFloat(bill.value);
//       // calculateAmount(billAmount);
//   })
// }

// function calculateAmount(bill) {
//   tips.forEach((tip) => {
//     tip.addEventListener("click", () => {
//       tips.forEach(tp => tp.classList.remove("active"));

//       tip.classList.add("active");
//       const tipPercentage = parseFloat(tip.value / 100);
//       const totalTip = bill * tipPercentage;
//       const totalAmount = bill + (bill * tipPercentage);
//       console.log(totalTip)
//       divideByPeople(totalAmount, totalTip);
//     })
//   })
// }

// function divideByPeople(amount, tip) {
  
//   people.addEventListener("keyup", () => {
//     numOfPeople = parseFloat(people.value);
//     const amountPerson = amount / numOfPeople;
//     const tipPerson = tip / numOfPeople;
//     console.log(amountPerson, tipPerson)
//   })
// }

// getBill();
// calculateAmount();


let selectedTip;

function getBill() {
  return parseFloat(billInput.value);
}

  // EventListeners op tip-buttons
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

  // EventListener op custom input
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
  tipEl.innerText = `$${tip}`;
  totalEl.innerText = `$${total}`;
  console.log(tip);
  console.log(total)
}


inputContainer.addEventListener("click", () => {
  const bill = getBill();
  const tip = selectedTip;
  const people = getNumOfPeople();
  
  const tipResult = calculateTipAmount(bill, tip, people);
  const totalResult = calculateTotal(bill, tip, people);
  showResults(tipResult, totalResult);
})

inputContainer.addEventListener("input", () => {
  const bill = getBill();
  const tip = selectedTip;
  const people = getNumOfPeople();
  
  const tipResult = calculateTipAmount(bill, tip, people);
  const totalResult = calculateTotal(bill, tip, people);
  showResults(tipResult, totalResult);
})

// Validatie toevoegen als er bijv. iets niet is ingevuld