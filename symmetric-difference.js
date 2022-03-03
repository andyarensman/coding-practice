//Practice from freeCodeCamp

/* Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates). */

//Incomplete
function symOne() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].sort()

    let uniqueArr = arguments[i].filter((n, index) => {
      return arguments[i].indexOf(n) === index;
    });

    args.push(uniqueArr);
  }
  console.log(args)
  var returnArr = [];

  function diff(argOne, argTwo) {
    for (var i = 0; i < argOne.length; i++) {
    
      if (argTwo.includes(argOne[i])) {
        argTwo = argTwo.filter(n => n != argOne[i]);
      } else {
        returnArr.push(argOne[i])
      }
    }
    console.log(argTwo)

    returnArr.push(...argTwo)

    console.log(returnArr)

  }


  diff(args[0], args[1]);

  for (var i = 1; i < args.length - 1; i++) {
    console.log('hey')
    var currentArr = [...returnArr]
    diff(currentArr, args[i + 1]);
  }
  return returnArr;
}


//this works if you want no repeats between any set
function symTwo() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    //arguments[i].sort()

    let uniqueArr = arguments[i].filter((n, index) => {
      return arguments[i].indexOf(n) === index;
    });

    for (var j = 0; j < uniqueArr.length; j++) {
      args.push(uniqueArr[j]);
    }
  }
  args.sort();
  console.log(args)
  var returnArr = [];
  
  for (var i = 0; i < args.length; i++) {
    if (args[i] != args[i + 1]) {
      if (args[i] != args[i - 1]) {
        returnArr.push(args[i])
      }
      
    }
  }

  console.log(returnArr)
  return returnArr
}

symTwo([1, 2, 5], [2, 3, 5], [3, 4, 5]);
