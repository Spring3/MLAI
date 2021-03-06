// min and max inclusive
function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// min and max inclusive
function randomFloat (min, max) {
  return Math.random() * (max - min) + min;
};

function round (number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
