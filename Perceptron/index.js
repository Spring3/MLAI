const perceptron1 = new Perceptron();
const perceptron2 = new Perceptron();

// generating points
const points = new Array(300);
for (let i = 0; i < 300; i ++) {
  points[i] = new Point();
}

const canvasOfUntrained = new Canvas('canvas_untrained');
const canvasOfTrained = new Canvas('canvas_trained');

canvasOfUntrained.drawLine({ x: 0, y: 0 }, { x: 300, y: 300 }, 'red');
canvasOfTrained.drawLine({ x: 0, y: 0 }, { x: 300, y: 300 }, 'red');

const inputUntrained = document.getElementById('weights_untrained');
const inputTrained = document.getElementById('weights_trained');

let unTrainedIndex = 0;
let trainedIndex = 0;


function renderPoint(point, perceptron, canvas, train = false) {
  const input = [point.x, point.y];
  if (train) {
    perceptron.train(input, point.target);
    inputTrained.value = perceptron.weights.map(w => round(w, 2));
    for (const point of canvas.getPoints()) {
      // redraw previous decisions based on the new weights
      renderPoint(point, perceptron, canvas);
    }
  }
  const guess = perceptron.guess(input);
  if (guess !== point.target) {
    canvas.drawPoint(point, 'red');
  } else {
    canvas.drawPoint(point, 'green');
  }
}

function finishUntrained() {
  for (let i = unTrainedIndex; i < points.length; i++) {
    renderPoint(points[i], perceptron1, canvasOfUntrained);
  }
  inputUntrained.value = perceptron1.weights.map(w => round(w, 2));
  unTrainedIndex = points.length;
}

function finishTrained() {
  for (let i = trainedIndex; i < points.length; i++) {
    renderPoint(points[i], perceptron2, canvasOfTrained, true);
  }
  trainedIndex = points.length;
}

void function setup() {
  // initializing with the same weights
  for (let i = 0; i < perceptron1.weights.length; i ++) {
    perceptron2.weights[i] = perceptron1.weights[i] = window.randomFloat(-1, 1);
  }  
  canvasOfUntrained.onClick(() => {
    if (unTrainedIndex < points.length) {
      renderPoint(points[unTrainedIndex], perceptron1, canvasOfUntrained);
      unTrainedIndex ++;
    }
  });
  // not trained
  // trained
  canvasOfTrained.onClick(() => {
    if (trainedIndex < points.length) {
      renderPoint(points[trainedIndex], perceptron2, canvasOfTrained, true);
      trainedIndex ++;
    }
  });
}();
