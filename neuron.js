/*
 * Function Heaviside
 */
function heaviside(x) {
  if (x >= 0) return 1;
  return 0;
}

class Perceptron {
  constructor(learningRate = 0.01, epochs = 10) {
    this.learningRate = learningRate;
    this.epochs = epochs;
    this.weight = 0;
    this.bias = 0;
  }

  fit(x, y) {
    this.bias = 0;

    for (let i = 0; i !== this.epochs; i++) {
      x.forEach((x_i, index) => {
        const linearOut = x_i[0] * this.weight + this.bias;
        const yPredicted = heaviside(linearOut);

        const update = this.learningRate * (y[index] - yPredicted);
        this.weight += update * x_i[0];
        this.bias += update;
      });
    }
  }

  predict(x) {
    const linearOut = x[0] * this.weight + this.bias;
    return heaviside(linearOut);
  }
}

X = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
];
y = [0, 0, 1, 1];

const perceptron = new Perceptron();
perceptron.fit(X, y);

predictions = [];

for (const x of X) {
  predictions.push(perceptron.predict(x));
}

console.log(predictions);
