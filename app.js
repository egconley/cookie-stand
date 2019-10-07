var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'attempting to contact html';

var child = document.createElement('h2');
child.textContent = 'proof of life';
parentEl.appendChild(child);

var downtownShop = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 10,
  max: 25,
  avgCookiesPerCustVisit: 2,
  cookiesPurchased: [],
  totCookiesSold: [0],
  locationName: 'Pike Place Market',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]} ~ Total: ${this.totCookiesSold[i]}`;
      parentEl.appendChild(childEl);
    }
  }
}
downtownShop.render();

var greenwoodShop = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourCustomerVisits: [],
  min: 5,
  max: 15,
  avgCookiesPerCustVisit: 3,
  cookiesPurchased: [],
  locationName: '85th and Greenwood',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourCustomerVisits.push(this.randoNumberGen(this.min, this.max));
      this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
      parentEl.appendChild(childEl);
    }
  },
}
greenwoodShop.render();