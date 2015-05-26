var _ = require('underscore');
var items = require('./items.json');
var total = _.pluck(items, 'price');

_.each(items, function(item) {
});

//Question 1
var sum = total.reduce(function(a, b){
	return (a+b);
});
console.log
console.log("The average price is $" + (sum/items.length).toFixed(2));

//Question 2


//Question 3


//Question 4


//Question 5


//Question 6


//Question 7


//Question 8


//Question 9


//Question 10
