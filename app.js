var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'attempting to contact html';

var child = document.createElement('h1');
child.textContent = 'proof of life';
parentEl.appendChild(child);

var salmonCookieShop = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourTotals: [12, 3, 4, 56, 34, 12, 23, 43, 56, 73, 21, 44, 55, 24, 15],
  locationName: 'Pike Place Market',
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
      parentEl.appendChild(childEl);
    }
  }
}
salmonCookieShop.render();