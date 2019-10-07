var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'attempting to contact html';

var child = document.createElement('h1');
child.textContent = 'Salmon Cookies';
parentEl.appendChild(child);

var seattle = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 23,
  max: 65,
  avgCookiesPerCustVisit: 6.3,
  cookiesPurchased: [],
  totCookiesSold: [0],
  locationName: 'Seattle',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  displayStoreName: function() {
    var childEl0 = document.createElement('h2');
    childEl0.textContent = `${this.locationName}`;
    parentEl.appendChild(childEl0);
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
      parentEl.appendChild(childEl);
    }
  },
  totalSold: function() {
    var childEl2 = document.createElement('li');
    childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
    parentEl.appendChild(childEl2);
  }
}
seattle.displayStoreName();
seattle.render();
seattle.totalSold();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tokyo = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 3,
  max: 24,
  avgCookiesPerCustVisit: 1.2,
  cookiesPurchased: [],
  totCookiesSold: [0],
  locationName: 'Tokyo',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  displayStoreName: function() {
    var childEl0 = document.createElement('h2');
    childEl0.textContent = `${this.locationName}`;
    parentEl.appendChild(childEl0);
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
      parentEl.appendChild(childEl);
    }
  },
  totalSold: function() {
    var childEl2 = document.createElement('li');
    childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
    parentEl.appendChild(childEl2);
  }
}
tokyo.displayStoreName();
tokyo.render();
tokyo.totalSold();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dubai = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 11,
  max: 38,
  avgCookiesPerCustVisit: 3.7,
  cookiesPurchased: [],
  totCookiesSold: [0],
  locationName: 'Dubai',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  displayStoreName: function() {
    var childEl0 = document.createElement('h2');
    childEl0.textContent = `${this.locationName}`;
    parentEl.appendChild(childEl0);
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
      parentEl.appendChild(childEl);
    }
  },
  totalSold: function() {
    var childEl2 = document.createElement('li');
    childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
    parentEl.appendChild(childEl2);
  }
}
dubai.displayStoreName();
dubai.render();
dubai.totalSold();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var paris = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 20,
  max: 38,
  avgCookiesPerCustVisit: 2.3,
  cookiesPurchased: [],
  totCookiesSold: [0],
  locationName: 'Paris',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  displayStoreName: function() {
    var childEl0 = document.createElement('h2');
    childEl0.textContent = `${this.locationName}`;
    parentEl.appendChild(childEl0);
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
      parentEl.appendChild(childEl);
    }
  },
  totalSold: function() {
    var childEl2 = document.createElement('li');
    childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
    parentEl.appendChild(childEl2);
  }
}
paris.displayStoreName();
paris.render();
paris.totalSold();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var lima = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 2,
  max: 16,
  avgCookiesPerCustVisit: 4.6,
  cookiesPurchased: [],
  totCookiesSold: [0],
  locationName: 'Lima',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  displayStoreName: function() {
    var childEl0 = document.createElement('h2');
    childEl0.textContent = `${this.locationName}`;
    parentEl.appendChild(childEl0);
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
      parentEl.appendChild(childEl);
    }
  },
  totalSold: function() {
    var childEl2 = document.createElement('li');
    childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
    parentEl.appendChild(childEl2);
  }
}
lima.displayStoreName();
lima.render();
lima.totalSold();