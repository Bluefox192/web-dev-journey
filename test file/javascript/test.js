let hello = "hello";

function splitter (str){
    return str.split('').reverse().join('');
}

function palindromeCheck(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

