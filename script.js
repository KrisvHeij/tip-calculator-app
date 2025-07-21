const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipEl = document.getElementById("tip-amount");
const totalEl = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
const customInput = document.querySelector(".input-custom");
const inputContainer = document.querySelector(".input-container");

const logo = document.querySelector(".logo");

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

function getTip() {
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
}

function getNumOfPeople() {
  return parseFloat(peopleInput.value);
}

function calculateTipAmount(bill, tip, people) {
  const tp = tip / 100;
  const totalTip = bill * tp;
  const tipAmount = totalTip / people;
  console.log(tipAmount)
}


getTip();



inputContainer.addEventListener("click", () => {
  console.log(getBill);
  console.log(selectedTip)
  console.log(getNumOfPeople);
  calculateTipAmount(100, 30, 2);
})
inputContainer.addEventListener("input", () => {
  console.log(getBill);
  console.log(selectedTip)
  console.log(getNumOfPeople);
})

// 2 EventListeners maken op de inputcontainer : click en input.