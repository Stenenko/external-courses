var Calculator = (function() {
    var result = 0;
    return {
        add: function add(a){
            if (typeof a !== 'undefined') {
                result += a;
            }
            return add;
        },

        substract : function substract(a) {
            if (typeof a !== 'undefined') {
                result -= a;
            }
            return substract;
        },

        divide : function divide(a) {
            if (typeof a !== 'undefined') {
                result /= a;
            }
            return divide;
        },
    
        multiply: function multiply(a) {
            if (typeof a !== 'undefined') {
                result *= a;
            }
            return multiply;
        },

        getResult: function getResult() {
            return result;
        },
    
        reset: function reset() {
            result = 0;
            return reset;
        }
    };   
  })();
  
  console.log(Calculator.add(5)(2)(3));
  console.log(Calculator.substract(2)(4));
  console.log(Calculator.divide(2)(4));
  console.log(Calculator.multiply(2)(6));
  console.log(Calculator.getResult());
  console.log(Calculator.reset()());
  console.log(Calculator.add()());
  console.log(Calculator.substract()()());
  console.log(Calculator.divide()());
  console.log(Calculator.multiply()())();
  