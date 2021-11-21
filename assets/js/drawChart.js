import { test1, test2 } from './index.js'

console.log(test1)
console.log(test2)

window.onload = () => {
    var canvas1 = document.querySelector('#test1');
    var canvas2 = document.querySelector('#test2');

    makeGraph(test1, canvas1)
    makeGraph(test2, canvas2, 2, -60)
}

function makeGraph(tsp, canvas, bigger = 1, tr = 0) {
    let nodes = [];
    let edges = [];

    let trans = 100 + tr;
    let mul = 40 * bigger;

    for (let i = 0; i < tsp.bestTour.length; i++) {
        nodes.push({
            x: tsp.bestTour[i].x * mul + trans,
            y: tsp.bestTour[i].y * mul + trans,
            radius: 10,
            fillStyle: '#F9ED32',
            strokeStyle: '#B0BAC3',
        })

        edges.push({
            from: {
                x: tsp.bestTour[i].x * mul + trans,
                y: tsp.bestTour[i].y * mul + trans
            },
            to: {
                x: tsp.bestTour[(i + 1) % tsp.bestTour.length].x * mul + trans,
                y: tsp.bestTour[(i + 1) % tsp.bestTour.length].y * mul + trans
            }
        });
    }

    drawGraph(edges, nodes, canvas)
}


function drawGraph(edges, nodes, canvas) {
    const WIDTH = 600
    const HEIGHT = 600

    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < edges.length; i++) {
        let fromNode = edges[i].from;
        let toNode = edges[i].to;
        context.beginPath();
        context.strokeStyle = fromNode.strokeStyle;
        context.moveTo(fromNode.x, fromNode.y);
        context.lineTo(toNode.x, toNode.y);
        context.stroke();
    }

    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        context.beginPath();
        context.fillStyle = node.selected ? node.selectedFill : node.fillStyle;
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true);
        context.fillStyle = "black"
        context.font = '25px serif';
        context.fillText(i + 1, node.x - 20, node.y - 30);
        context.strokeStyle = node.strokeStyle;
        context.fill();
        context.stroke();
    }
}


