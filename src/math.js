
// Get a random number between low and high
const rand = (low, high) => Math.random() * (high - low) + low


// The Sigmoid function, which describes an S shaped curve.
// We pass the weighted sum of the inputs through this function to
// normalise them between 0 and 1.
const sigmoid = x => 1 / (1 + Math.exp(-x))


// The derivative of the Sigmoid function.
// This is the gradient of the Sigmoid curve.
// It indicates how confident we are about the existing weight.
const sigmoidDerivative = x => x * (1 - x)


export { rand, sigmoid, sigmoidDerivative }
