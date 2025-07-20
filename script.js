const bill = document.getElementById("bill");
const people = document.getElementById("people");
const tipEl = document.getElementById("tip-amount");
const totalEl = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
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

function getBill()  {
  return parseFloat(bill.value);
}

function getTip() {
  tips.forEach((tip) => {
    tip.addEventListener("click", () => {
      tips.forEach(tp => tp.classList.remove("active"));

      tip.classList.add("active");
      selectedTip = tip.value;
      // return selectedTip;
    })
  })
}

getTip();

logo.addEventListener("click", () => {
  console.log(getBill());
  console.log(selectedTip)
})

