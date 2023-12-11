
// /********* create variables *********/
// // useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// // Do any of these variables need to be initialized when the page is loaded? 
// // When do they need to be reset or updated?
let dailyRate = 35; 
let selectedDays = [];
const dayElements = document.querySelectorAll('.day-selector li');
const calculatedCost = document.getElementById('calculated-cost');
const fullDay = document.getElementById('full');
const halfDay = document.getElementById('half');



// /********* colour change days of week *********/
// // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayElements.forEach(function(dayElement) {
    dayElement.addEventListener('click', function(event) {
      DaysSelected(event);
    });
  });
  
  fullDay.addEventListener('click', function() {
    ChangePrice(35, 'full');
  });
  
  halfDay.addEventListener('click', function() {
    ChangePrice(20, 'half');
  });

  function DaysSelected(event) {
    const clickedDay = event.target.id;
  
    if (event.target.classList.contains('clicked') === false) {
      event.target.classList.add('clicked');
      selectedDays.push(clickedDay);
    } else {
      event.target.classList.remove('clicked');
    }
  
    calculateCost();
  }



// /********* clear days *********/
// // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


document.getElementById('clear-button').addEventListener('click', function() {
    clearDays();
  });
function clearDays() {
    dayElements.forEach(function(dayElement) {
      dayElement.classList.remove('clicked');
    });
    selectedDays = [];
    calculateCost();
  }



// /********* change rate *********/
// // when the half-day button is clicked, set the daily price to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// // when the full-day button is clicked, the daily price is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function ChangePrice(price, selectedButton) {
    dailyRate = price;
    document.getElementById(selectedButton).classList.add('clicked');
    let fullHalfButton;
    if (selectedButton === 'full') {
     fullHalfButton = 'half';
    } 
    else {
     fullHalfButton = 'full';
    }   
    document.getElementById(fullHalfButton).classList.remove('clicked');
  
    calculateCost();
  }

// /********* calculate *********/
// // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCost.innerText = totalCost;
  }







