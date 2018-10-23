var user = {name: "Alex", age: 26, isUser: true};

function newProp(str, obj) {
    if (str in obj) {
        return obj;
    }
    else {
        obj[str] = "new";
        return obj;
    }
}

newProp("name", user);
newProp("lastname", user);