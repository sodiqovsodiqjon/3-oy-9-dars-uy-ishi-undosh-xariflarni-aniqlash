function names(str) {
    let result = 0;
    let result1 = ['a','o','u','i','e'];

    for(let o of str) {
        if(result1.includes(o)){
            result++
        }
    }
    return result
}

console.log(names('saaaaalom'))