function protoProp(prop, obj) {
     if (prop in obj && !obj.hasOwnProperty(prop)) {
        console.log("Свойство " + prop + " принадлежит прототипу");
    }
    else {
        console.log("Свойство не принадлежит прототипу")
    }
}

var user = {name: "Alex", age: 25};
var userInfo = Object.create(user);
userInfo.id = 234;
userInfo.isUser = true;
protoProp("age", userInfo);