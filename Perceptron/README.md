In this example, I created a simple example of a perceptron with one neuron and 2 inputs.

300 points are generated with random values on X and Y axes in a range from 0 to 300;

The canvas is split diagonally with a line.

All the points, that are above the line, are considered to be positive with a value of 1

All the points, that are below the line, are considered to be negative, with a value of -1

Now let's see of perceptron will be able to guess to which part of the canvas the point belongs.

Open `index.html` file to see the results of a trained and untrained perceptron

I also added an ability to track the progress by clicking the mouse button on the canvas.

The problem of this perceptron is in the case when both weights are 0. In this case, the guess will always be equal to 0 and the activation function will return 1. This can be solved by adding another input - a `bias`, that will always be equal to `1`.
