function includeString(str, substr) {
    if (str.includes(substr)) {
        return console.log("true");
    }
    else {
        return console.log("false");
    }
}

var str1 = "Метод includes() является регистрозависимым";
var str2 = "регистрозависимым";
var str3 = "регистрозАвисимым";
includeString(str1, str2);
includeString(str1, str3);