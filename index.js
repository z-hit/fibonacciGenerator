function fibonacciGenerator(n) {

    var sequence = [];

    for(var x = 0; sequence.length < n; x++) {

        if(x < 2) {
            sequence.push(x);
        } else {
            sequence.push(sequence[x - 2] + sequence[x - 1]);
        }

    }

    return(sequence);
}
