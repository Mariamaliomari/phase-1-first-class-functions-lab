const returnFirstTwoDrivers= (arr)=>[arr[0],arr[1]];
const returnLastTwoDrivers= (arr)=> arr.slice(-2);

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply){
    return function (fare){
        return fare * multiply
    }
}function fareDoubler (fare){
    return fare * 2;
}
function fareTripler(fare){
    return fare * 3;
}
function selectDifferentDrivers(arrdriver, firstorlast){
    return firstorlast(arrdriver)
}