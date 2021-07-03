const fs = require('fs');
const GRAVITY = 9.8;

function parseArgs(arr) {
    let args = {};

    arr.forEach((a, i) => {
        if (a.slice(0, 1) == "-") {
            let argument = a.slice(1);
            let param;
            if (i < arr.length - 1) {
                param = arr[i + 1];
                arr.splice(i, 1);
            } else {
                arr.splice(i);
            }
            args[argument] = param;
        }
    });

    return args;
}

if (process.argv.length > 2) {
    let args = parseArgs(process.argv);
    console.log(args);

    console.log(
        calculateRangeOfAProjectile(args['v'], args['a'], args['h'])
    );
}

function calculateRangeOfAProjectile(
    velocity,
    degrees,
    h
) {
    let radians = degrees * Math.PI / 180;
    if(h == 0){
        let toFixed = ((velocity ** 2/GRAVITY) * Math.sin(2 * radians)).toFixed(1);
        return Number(toFixed);
    }else{
        //Floor to the nearest tenth
        let vX = velocity * Math.cos(radians);
        let vY = velocity * Math.sin(radians);

        return vX * Math.sqrt(vY ** 2 + (2 * GRAVITY * h)) / GRAVITY;
    }

}

module.exports = {
    calculateRangeOfAProjectile
}