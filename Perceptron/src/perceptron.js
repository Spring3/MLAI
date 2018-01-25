function Perceptron (learningRate = 0.1) {
  this.weights = new Array(2);
  this.learningRate = learningRate;

  // activation function
  this.sign = (n) => {
    return n >= 0 ? 1 : -1;
  }

  // neuron function
  this.guess = (inputs) => {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.sign(sum);
  }

  this.train = (inputs, target) => {
    const guess = this.guess(inputs);
    const error = target - guess;
    // tuning the weights
    for (let i = 0; i < inputs.length; i ++) {
      this.weights[i] += error * inputs[i] * this.learningRate;
    }
  }
};
