function ftoc (temperatureFahrenheit) {
  temperatureCelcius = (temperatureFahrenheit - 32)*(5/9);
  return Math.round(temperatureCelcius*10)/10;
};

function ctof (temperatureCelcius) {
  temperatureFahrenheit = (temperatureCelcius*(9/5)) + 32;
  return Math.round(temperatureFahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
