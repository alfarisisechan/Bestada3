function case1 (x) {
    for(i = 1; i <= x; i++){
        if(i % 7 === 0) {
            console.log('bestada');
        } else if(x === i) {
            console.log('sukses'); 
        } else {
            console.log(i);
        }
    }
}

console.log(case1(15));