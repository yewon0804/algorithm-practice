const input = require('fs').readFileSync('./jejuCoding/input18.txt').toString().split(' ');

let avg = 0;

for (var i = 0; i < input.length; i++) {
    avg += Number(input[i]);
}

avg /= input.length;

Math.floor(avg);
console.log(avg);