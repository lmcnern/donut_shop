(function() {
var TopPotModel = window.TopPotModel;
var form = document.getElementById('form1');
var inputLocation = document.getElementById('newLocation').value;
var addNewStore = document.getElementById('newUserRow');
var inputMaxCustomers = document.getElementById('newMaxCustomers').value;
var inputMinCustomers = document.getElementById('newMinCustomers').value;
var inputAverageDonuts = document.getElementById('newAverageDonut').value;
var userHourlyTotals = [];

var renderDonutData = function (){
  addNewStore.innerHTML = '';

  //Recreate the header row on the table

  userHourlyTotals.forEach(function(item) {
    addNewStore.appendChild(item.render());
  });
};

var eventFormSubmit = function calculateInput(ev) {
  ev.preventDefault();
  console.log('I clicked the button');

  //revert these to use event.target like in the sample
  var userInput = new TopPotModel(
    document.getElementById('newLocation').value,
    document.getElementById('newMinCustomers').value,
    document.getElementById('newMaxCustomers').value,
    document.getElementById('newAverageDonut').value);

  userInput.multiDonuts();
  userHourlyTotals.push(userInput);

 // console.log(userHourlyTotals);

  renderDonutData();
};


var downtownCustomers = new TopPotModel('Downtown', 8, 43, 4.5);
var capitolCustomers = new TopPotModel('Capitol Hill', 4, 37, 2);
var sluCustomers = new TopPotModel('SLU', 9, 23, 6.33);
var wedgeCustomers = new TopPotModel('Wedgewood', 2, 28, 1.25);
var ballardCustomers = new TopPotModel('Ballard', 8, 58, 3.75);

downtownCustomers.multiDonuts();
capitolCustomers.multiDonuts();
sluCustomers.multiDonuts();
wedgeCustomers.multiDonuts();
ballardCustomers.multiDonuts();

userHourlyTotals.push(downtownCustomers);
userHourlyTotals.push(capitolCustomers);
userHourlyTotals.push(sluCustomers);
userHourlyTotals.push(wedgeCustomers);
userHourlyTotals.push(ballardCustomers);

form.addEventListener('submit', eventFormSubmit, false);
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


