var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'attempting to contact html';

var child = document.createElement('h1');
child.textContent = 'proof of life';
parentEl.appendChild(child);

var downtownShop = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourTotals: [],
  locationName: 'Pike Place Market',
  randoNumberGen: function(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  },
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.hourTotals.push(this.randoNumberGen(5, 9));
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
      parentEl.appendChild(childEl);
    }
  }
}
downtownShop.render();