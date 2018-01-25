// generating points
const points = new Array(300);
for (let i = 0; i < 300; i ++) {
  points[i] = new Point();
}

const canvasOfUntrained = new Canvas('canvas_untrained');
const canvasOfTrained = new Canvas('canvas_trained');

canvasOfUntrained.drawLine({ x: 0, y: 0 }, { x: 300, y: 300 }, 'red');
canvasOfTrained.drawLine({ x: 0, y: 0 }, { x: 300, y: 300 }, 'red');

function renderPoints(perceptron, canvas, train = false) {
  for (const point of points) {
    const input = [point.x, point.y];
    if (train) {
      perceptron.train(input, point.target);
    }
    const guess = perceptron.guess(input);
    if (guess !== point.target) {
      canvas.drawPoint(point, 'red');
    } else {
      canvas.drawPoint(point, 'green');
    }
  }
}

void function setup() {
  const perceptron1 = new Perceptron();
  const perceptron2 = new Perceptron();

  // initializing with the same weights
  for (let i = 0; i < perceptron1.weights.length; i ++) {
    perceptron2.weights[i] = perceptron1.weights[i] = window.randomFloat(-1, 1);
  }
  console.log(perceptron1.weights);

  // not trained
  renderPoints(perceptron1, canvasOfUntrained);
  // trained
  renderPoints(perceptron2, canvasOfTrained, true);
}();
