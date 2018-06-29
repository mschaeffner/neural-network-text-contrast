import { rand, sigmoid, sigmoidDerivative } from './math'

export default class Brain {

  constructor({numberOfInputs}) {
    // We model a single neuron, with `numberOfInputs` input connections and 1 output connection.
    // We assign random weights to this matrix, with values in the range -1 to 1.
    this.weights = [...Array(numberOfInputs)].map(_ => rand(-1, 1))
  }

  // The neural network thinks.
  think(inputs) {
    // Pass inputs through our neural network (our single neuron).
    const reducer = (acc, cur, index) => acc + cur * inputs[index]
    const sum = this.weights.reduce(reducer, 0)
    return sigmoid(sum)
  }

  // We train the neural network through a process of trial and error.
  // Adjusting the synaptic weights each time.
  train(trainingData) {
    console.log('Brain | Training with trainingData: ', JSON.stringify(trainingData))

    // Pass the training set through our neural network (a single neuron).
    const guess = this.think(trainingData.input)

    // Calculate the error (The difference between the desired output
    // and the predicted output).
    const error = trainingData.output - guess

    // Multiply the error by the input and again by the gradient of the Sigmoid curve.
    // This means less confident weights are adjusted more.
    // This means inputs, which are zero, do not cause changes to the weights.
    // Adjust the weights.
    this.weights = this.weights.map((weight, index) =>
      weight + trainingData.input[index] * error * sigmoidDerivative(guess)
    )

    console.log('Brain | Weights adjusted to: ', JSON.stringify(this.weights))
  }

}
