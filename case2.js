function case2 () {
    const array = [3,7,1,2,6,7,8,9,12,5,3,12];
    let duplicate = array.filter(function(x, y) {
        return array.indexOf(x) == y;
    })
    return duplicate.sort((x, y) => x - y);;
}
console.log(case2());