var Calculator = (function() {
    var result = 0;
    return {
        add: function add(a){
                if (arguments.length === 0) {
                    result = 0;
                    return result;
                }
                result += a;
                add.toString = function() {
                    return result;
                }
            return add;
            },

        substract : function substract(a) {
            if (arguments.length === 0) {
                result = 0;
                return result;
            }
            result -= a;
            substract.toString = function() {
                return result;
            }
            return substract;
        },

        divide : function divide(a) {
            if (arguments.length === 0) {
                result = 0;
                return result;
            }
            result /= a;
            divide.toString = function() {
                return result;
            }
            return divide;
        },
    
        multiply: function multiply(a) {
            if (arguments.length === 0) {
                result = 0;
                return result;
            }
            result *= a;
            multiply.toString = function() {
                return result;
            }
            return multiply;
        },

        getResult: function getResult() {
            return result;
        },
    
        reset: function reset() {
            result = 0;
            return result;
        }
    };   
  })();
  
  console.log(Calculator.add(5)(2)(15));
  console.log(Calculator.substract(2)(4));
  console.log(Calculator.divide(2)(4));
  console.log(Calculator.multiply(2)(6));
  console.log(Calculator.getResult());
  console.log(Calculator.reset());

  console.log(Calculator.add());
  console.log(Calculator.substract());
  console.log(Calculator.divide());
  console.log(Calculator.multiply());