var quadEquationSolver = function (a, b, c) {
  var bas = Math.sqrt( (b * b) - (4 * a * c) );
  var div = 2 * a;
  
  var firstRoot = (-b + bas)/div;
  var secondRoot = (-b - bas)/div;
  
  console.log("The first root is " + firstRoot);
  console.log("The second root is " + secondRoot);
};
