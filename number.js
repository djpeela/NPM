const _ = require('lodash');

const numbers = [51,56,87,12,16,48,12,54,14,24];

_.each(numbers, function(number, i) {
    console.log(number);
});
