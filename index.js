// Code your solution in this file!

const returnFirstTwoDrivers = (function (drivers) {
    let newArray = drivers.slice(0, 2)
    return newArray;
})

const returnLastTwoDrivers = (function (drivers) {
    let newArray = drivers.slice(2, 4)
    return newArray;
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
        return integer * fare;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, secondFunction) {
    if (secondFunction === returnFirstTwoDrivers) {
        return drivers.slice(0, 2)
    } else {
        return drivers.slice(2, 4)
    };
}