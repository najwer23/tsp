function duplicateArray(arr) {
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
    let currentTour = duplicateArray(arr)
    let bestTour = duplicateArray(arr)
    let testTour;
    let currentTourLength;
    let testTourTourLength

    const temperatur = 1000;
    const coolingFactor = 0.999
    

    for (let t = temperatur; t > 1; t*=coolingFactor) {
        testTour = duplicateArray(currentTour)
        testTour = swap2RandomElementsInArray(testTour)

        currentTourLength = distanceAllPath(currentTour)
        testTourTourLength = distanceAllPath(testTour)

        if (Math.random() < probability(currentTourLength, testTourTourLength, t)) {
            currentTour = duplicateArray(testTour)
        }

        if (distanceAllPath(currentTour) < distanceAllPath(bestTour)) {
            bestTour = duplicateArray(currentTour)
        }
    }

    return {
        bestTour: bestTour,
        bestTourDistance: distanceAllPath(bestTour)
    }
}

function runTestFuntionForCoordinates(nameTest, data) {
    let data_xy = data

    data_xy = data_xy.split(" ").map(y => y.replace(/\s/g, '')).filter(y => y != '')

    let data_xy_arr_json = []

    for (let i = 1; i < data_xy.length; i += 2) {
        data_xy_arr_json.push({
            x: +data_xy[i - 1],
            y: +data_xy[i]
        })
    }


    console.log(nameTest, SAOalgorithm(data_xy_arr_json))
}

//best 44
var dataset1 = `
    0 0
    5 5
    8 2
    10 0 
    8 8
    10 10 
    0 10
`;

var dataset2 = `
   1 1
   1 5 
   2 3
   4 2
   3 6
   4 4
   5 2
   6 4
`;

//33523
var dataset3 = `
6734 1453 
2233   10 
5530 1424 
401  841 
3082 1644 
7608 4458 
7573 3716 
7265 1268 
6898 1885 
1112 2049 
5468 2606 
5989 2873 
4706 2674 
4612 2035 
6347 2683 
6107  669 
7611 5184 
7462 3590 
7732 4723 
5900 3561 
4483 3369 
6101 1110 
5199 2182 
1633 2809 
4307 2322 
675 1006 
7555 4819 
7541 3981 
3177  756 
7352 4506 
7545 2801 
3245 3305 
6426 3173 
4608 1198 
23 2216 
7248 3779 
7762 4595 
7392 2244 
3484 2829 
6271 2135 
4985  140 
1916 1569 
7280 4899 
7509 3239 
10 2676 
6807 2993 
5185 3258 
3023 1942 
`;

var dataset4 = `
   
`;

window.onload = () => {
   runTestFuntionForCoordinates("dataset1", dataset1)
   runTestFuntionForCoordinates("dataset2", dataset2)
   runTestFuntionForCoordinates("dataset3", dataset3)
//    runTestFuntionForCoordinates("dataset4", dataset4)

}