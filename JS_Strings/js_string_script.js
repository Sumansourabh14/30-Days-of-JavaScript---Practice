let str1 = "string";

console.log(str1[0].toUpperCase() + str1.slice(1));


//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive:
function checkSpam(str = 'buy ViAgRA now') {
    let newStr = str.toLowerCase();
    if (newStr.includes("viagra") || newStr.includes("xxx")) {
        return "This is spam!!";
    }
    return "Not a spam";
}

console.log(checkSpam());
console.log(checkSpam('xxtxxtxx'));


//Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.replace(str.slice(maxLength, (str.length + 1)), "...");
    }
    return "String is already short";
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));


//We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
//Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
function extractCurrencyValue(str) {
    return str.slice(1, str.length + 1);
}

console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("$65,580"));


//Generate a string "n" times
function loremIpsum(text, times) {
    return text.repeat(times);
}

console.log(loremIpsum("loremipsum ", 10));


//
function convert(number) {
    let result = number * 79.12;
    if (result === NaN) {
        return "Please try again"
    }
    return result;
}

console.log(convert("17.11"));
