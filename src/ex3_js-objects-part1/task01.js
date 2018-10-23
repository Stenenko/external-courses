var obj = {};
obj.name = "Alex";
obj.age = 26;
obj.isUser = true;
obj.subscribe = null;
obj.family = {
    mother: "Ann",
    father: "John"
}

delete obj.subscribe;
console.log(obj);