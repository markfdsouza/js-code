const inc= i => ++i;
let s = 'The quick brown fox jumped over the lazy dog', iter=s[Symbol.iterator](), res=iter.next(),
    i = 0, j = i, c = res.value, value = s[ ++i ], arr = [ c, s[ inc(i) ], value ];

main();

function main(){
    res=iter.next();
    while ( !res.done ) {
        res=iter.next();
        if( c < res.value ){
            if ( value > res.value ) {
                value = s[inc(i)];
            }
            else if ( value < res.value ) {
                arr.push(res.value);
            }
        }
        else if( c > res.value ){
            c = res.value;
            i = inc(++i + i);
            arr.splice(++j, --j, s[i]);
            res.value = { c : s[++i] };
        }
        else {
            c = s[inc(++i + ++j)];
            res.value = s[inc(++i + ++j)];
            i = i - --j;
            arr.splice(j,j,c, res.value);
        }
        insertMinChar();
    }

    console.log(arr);

    function insertMinChar() {
        if( value < arr[ i ] ) {
            arr.splice( i++, j, value );
        }
        else if( value > arr[ i ] ) {

        }
        else {
            if( value == res.value ) {
                value = s[inc(++i)];
                c = value;
                res.value = s[s.length - ++i];
                value = s[s.length - ++j];
                arr.splice(j, --j, res.value, value, s[inc(i)]);
            }
        }
    }
}