(function() {
var TopPotModel = window.TopPotModel;
var submitButton = document.getElementById('userSubmit');
var inputLocation = document.getElementById('newLocation').value;
  console.log('Location: ' + inputLocation);
var addNewStore = document.getElementById('newUserRow');
var inputMaxCustomers = document.getElementById('newMaxCustomers').value;
  console.log('Max Customers: ' + inputMaxCustomers);
var inputMinCustomers = document.getElementById('newMinCustomers').value;
  console.log('Min Customers: ' + inputMinCustomers);
var inputAverageDonuts = document.getElementById('newAverageDonut').value;
  console.log('Average Donuts: ' + inputAverageDonuts);
var userHourlyTotals = [];

var renderDonutData = function (){
  addNewStore.innerHTML = '';
  userHourlyTotals.forEach(function(item) {
    addNewStore.appendChild(item.render());
  });
};

submitButton.addEventListener('submit', function calculateInput(ev) {
  ev.preventDefault();
  console.log('I clicked the button');

  var userInput = new TopPotModel(event.target.inputLocation.value, event.target.inputMinCustomers.value, event.target.inputMaxCustomers.value, event.target.inputAverageDonuts.value);
    userHourlyTotals.push(userInput);
    renderDonutData();
}, false);
})();
// inputMaxCustomers.addEventListener('submit', calculateInput);
// inputMinCustomers.addEventListener('submit', calculateInput); //
// inputAverageDonuts.addEventListener('submit', calculateInput);

// inputLocation.addEventListener('submit', calculateInput);
// inputMaxCustomers.addEventListener('submit', calculateInput);
// inputMinCustomers.addEventListener('submit', calculateInput);
// inputAverageDonuts.addEventListener('submit', calculateInput);

// document.getElementById('newLocation').addEventListener(
//     'click', stopDefAction, false

//     function stopDefault(event) {
//     event.preventDefault();
// }

// document.getElementById('newLocation').addEventListener(
//     'click', stopDefaultAction, false


