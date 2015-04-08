
var TopPotModel = function(name, minCustomers, maxCustomers, averageDonuts, dayTotal) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageDonuts = averageDonuts;
  this.hourlyTotals = [];
  this.dayTotal = 0;

  this.generateRandom = function() {
    var numCustomers = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    var hourTotal = Math.floor(numCustomers * this.averageDonuts);
    this.hourlyTotals.push(hourTotal);
    this.dayTotal += hourTotal;
    return this.hourlyTotals;
  };

  this.multiDonuts = function() {
    for (var i = 0 ; i < 12 ; i++) {
      console.log(this.generateRandom());
    }
  };

  this.writeToHTML = function() {
    //var donutTotal = this.TopPotModel();
    var myEl = document.getElementById(this.name);

    for (var i = 0; i <= this.hourlyTotals.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      myEl.appendChild(el);
  }
  el.textContent = this.dayTotal;
  myEl.appendChild(el);

};
};

TopPotModel.prototype.render = function() {
  var row = document.createElement('tr');

  var columnone = document.createElement('td');
  columnone.textContent = this.name;
  row.appendChild(columnone);

  for (var i = 0; i <= this.hourlyTotals.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      row.appendChild(el);
  }
  el.textContent = this.dayTotal;
  row.appendChild(el);

  return row;
}



window.TopPotModel = TopPotModel;

// //new variable to write to HTML here

// var handleNewSubmit = function () {
//   object.preventDefault ( );

// }

// }

//console.log(DowntownCustomers);
//console.log(CapitolHillCustomers);
//console.log(SLUCustomers);
//console.log(WedgewoodCustomers);
//console.log(BallardCustomers);

//console.log(DowntownLocation.generateRandom(8, 43));
//console.log(CapitolHillLocation.generateRandom(4, 37));
//console.log(SLULocation.generateRandom(9, 23));
//console.log(WedgewoodLocation.generateRandom(2, 28));
//console.log(BallardLocation.generateRandom(8, 58));

//var DowntownDonuts 4.5);
//var CapitolHillDonuts  2);
//var SLUDonuts  6.33);
//var WedgewoodDonuts 1.25);
//var BallardDonuts 3.75);
