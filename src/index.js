
exports.min = function min (array) {
  if(arguments.length && array.length === 0){
    return 0;
  }else if(arguments.length && array.length !== 0){
    array.sort(function(a,b) {
    return b - a;
  });
    return array[array.length - 1];
  }else{
    return 0;
  }
}

exports.max = function max (array) {
  if(arguments.length && array.length === 0){
    return 0;
  }else if(arguments.length && array.length !== 0){
    array.sort(function(a,b) {
    return a - b;
  });
    return array[array.length - 1];
  }else{
    return 0;
  }  
}

exports.avg = function avg (array) {
  if(arguments.length && array.length === 0){
    return 0;
  }else if(arguments.length && array.length !== 0){
    let sum = 0;
    array.forEach(function(item) {
      sum += item;
    });
    return sum / array.length;
  }else{
    return 0;
  }
}
