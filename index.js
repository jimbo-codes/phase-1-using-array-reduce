const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(sumit,0);

function reducer(input0){
return batteries(input0);
}
function batteries(input1){
    let totalBatteries = input1.reduce(sumit,0);
    return totalBatteries;
}
function sumit(accumulator, element){
    return accumulator+=element;
}

console.log(reducer(batteryBatches));
console.log(batteries(batteryBatches));

reducer(batteryBatches);
batteryBatches.reduce(sumit,0);

//reduce (function, initializer value)
// function (the returned value) will be aggregated across and the things you
// increment over