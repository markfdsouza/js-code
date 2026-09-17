// Problem:  Sort the string not including special characters.  Return an array with the characters sorted in descending order.
let s = "The quick brown fox jumped over the lazy dog", iter = s[Symbol.iterator](), res = iter.next(),
    i = 0, c = s[++i], arr = [res.value, s[++i], c];


main();

function main() {
    let cb = replaceChars;
    while (!res.done) {
        res=iter.next();
        let value = res.value;
        cb(value);
    }
    function replaceChars(value) {
        if(value > arr[i]){
            if(c<arr[i]){
                removeDuplicateChars();
            }
        }
        else if(value < arr[i]){
            removeDuplicateChars();
        }
        else {
            res=iter.next();
            removeDuplicateChars();
        }
    }
    function storeRemainingChars(value) {
        c=arr[++i];
        let j=0;
        while(value>c){
            c=arr[++i];
        }
        arr.splice(i,j,value);
        i=0;
    }
    function processString(value) {
        s=s.replace(value,'');
        if(res.done==true){
            // Store the remaining string chars in the res.value variable.
            // Convert the string into an array to use the built-in sort method.
            res.value=Array.from(s);
            // Next, we apply the concept of rapid application development by using JS Array's built-in sort method.
            // to sort a portion of the string characters.
            // If we use the sort method to solve this problem in one statement, it would not be very efficient.
            // Then, insert each character of the sorted string at the appropriate index in the array.
            res.value=res.value.sort((a,b)=>a<b?-1:a>b?1:0);
            s=res.value;
            cb = storeRemainingChars;
            iter = s[Symbol.iterator]();
            res.done=false;
        }
    }
    function insertMinChars(value) {
        // Iterate over the entire string and insert all the characters less than 'e' before that index.
        if(value < c){
            c=value;
            value=i;
            arr.splice(i,--value,c);
        }
        else {
            // When we finish one iteration, store the characters that appear in descending order towards the end of the alphabet
            // We are using the current value of the index to store the letters q to u since they appear towards the beginning of the string.
            if(value===undefined){
                iter = s[Symbol.iterator]();
                res=iter.next();
                res=iter.next();
                value=arr[--i].toLowerCase();
                arr.push(res.value,value,iter.next().value);
                res.value=arr.length - ++i;
                res.value=res.value/++i;
                c=arr[++res.value];
                // Pre-process the string by removing the characters already sorted.  Then sort the remaining characters.
                // TODO:  check if the remaining characters can be stored at their appropriate index instead of doing the sort
                // at the end of this task (i.e. try to perform concurrent operations)
                cb = processString;
                i=0;
                iter = arr[Symbol.iterator]();
            }
        }
    }
    function removeDuplicateChars() {
        s = s.replaceAll(c,'');
        if(i>0){
            i--;
            c=res.value;
        }
        else {
            c=s[i];
            res.value=''+s[i].charCodeAt(i);
            c=c.toLowerCase();
            s = s.replaceAll(c,'');
            c=s[s.length - (++i + i)];
            i=s.indexOf(c);
            res.value = s[--i];
            s = s.replaceAll(c,'');
            arr.push(c);
            s = s.replaceAll(res.value,'');
            i=0;
            c=s[s.length - (++i+i)];
            s = s.replaceAll(c,'');
            iter = s[Symbol.iterator]();
            res=iter.next();
            arr.splice(i,--i,c);
            cb = insertMinChars;
            i++;
        }
    }
}
