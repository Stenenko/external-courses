var user = {name: "Alex", age: 26, isUser: true};

function objProp(str, obj) {
    if (str in obj) {
        return true;
    }
    else {
        return false;
    }
}

objProp("name", user);
objProp("lastname", user);