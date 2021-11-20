function duplicateArrayOfObj(arr) {
    return arr.map(y => Object.assign({}, y));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function swap2RandomElementsInArray(arr) {
    let index1 = getRandomInt(0, arr.length-1)
    let index2 = getRandomInt(0, arr.length-1)
    return swap2ElementInArray(arr, index1, index2)
}

function swap2ElementInArray(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp;
    return arr;
}

function distanceBetweenPoints(obj1,obj2) {
    let x = Math.abs(obj1.x - obj2.x);
    let y = Math.abs(obj1.y - obj2.y);
    return (x**2 + y**2)**0.5
}

function distanceAllPath(arr) {
    let d = 0;
    for (let i=1; i<arr.length; i++) {
        d+=distanceBetweenPoints(arr[i-1],arr[i])
    }
    d+=distanceBetweenPoints(arr[0],arr[arr.length-1])
    return d
}

function probability(f1,f2,temp) {
    return (f2 < f1) ? 1 : Math.exp((f1 - f2) / temp);
}

function SAOalgorithm(arr) {
    let currentTour = duplicateArrayOfObj(arr)
    let bestTour = duplicateArrayOfObj(arr)
    let testTour;
    let currentTourLength;
    let testTourTourLength

    const temperatur = 1000;
    const coolingFactor = 0.999
    

    for (let t = temperatur; t > 1; t*=coolingFactor) {
        testTour = duplicateArrayOfObj(currentTour)
        testTour = swap2RandomElementsInArray(testTour)

        currentTourLength = distanceAllPath(currentTour)
        testTourTourLength = distanceAllPath(testTour)

        if (Math.random() < probability(currentTourLength, testTourTourLength, t)) {
            currentTour = duplicateArrayOfObj(testTour)
        }

        if (distanceAllPath(currentTour) < distanceAllPath(bestTour)) {
            bestTour = duplicateArrayOfObj(currentTour)
        }
    }

    return {
        bestTour: bestTour,
        bestTourDistance: distanceAllPath(bestTour),
        dataIn: arr
    }
}

function runTestFuntionForCoordinates(data) {
    let data_xy = data

    data_xy = data_xy.split(" ").map(y => y.replace(/\s/g, '')).filter(y => y != '')

    let data_xy_arr_json = []

    for (let i = 1; i < data_xy.length; i += 2) {
        data_xy_arr_json.push({
            x: +data_xy[i - 1],
            y: +data_xy[i]
        })
    }

    return SAOalgorithm(data_xy_arr_json)
}



import {dataset1, dataset2} from './dataIn.js'

var test1 = runTestFuntionForCoordinates(dataset1)
var test2 = runTestFuntionForCoordinates(dataset2)

export { test1, test2 }

