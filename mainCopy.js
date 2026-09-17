let s = "The quick brown fox jumped over the lazy dog", iter = s[Symbol.iterator](), res = iter.next(), i = 0, c = s[++i], arr = [res.value, s[++i], c];

main();

function main() {
    res=iter.next();
    let value = res.value;
    while (!res.done) {
        if(c==value){
            i--;

            c = arr[i];
            removeDups();
        }
        else {

        }

    }
    function compare() {
        if(value<c){
            arr.splice(i,--i,c);
            i++;


            iter = res.value[Symbol.iterator]();
            res=iter.next();
            while (!res.done) {
                s=s.replace(value,'');
                res=iter.next();
            }
            iter = s[Symbol.iterator]();
        }
        else if(value>c){

        }
        else {

        }
    }
    function removeDups() {
        res.value=Array.from(s.matchAll(value)).map(match => match.index);
    }
}

main();


