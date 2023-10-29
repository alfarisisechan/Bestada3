# Bestada
Bestada Test Nomer 3 (Javascript)

- Buatlah program untuk melakukan pengecekan apakah suatu bilangan adalah kelipatan dari 7, jika benar maka cetak “bestada” tanpa tanda kutip dan jika bukan maka cetak bilangannya dan disetiap akhir batas bilangan yang dicek maka cetak “sukses” tanpa tanda kutip. Misal:
-> Input: range 15, output: 1,2,3,4,5,6,bestada,8,9,10,11,12,13,bestada,sukses

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

- Buatlah program untuk mengecek nilai yang sama pada array dibawah ini lalu susun arraynya dari yang terbesar ke yang terkecil:
-> [3,7,1,2,6,7,8,9,12,5,3,12]

function case2 () {
    const array = [3,7,1,2,6,7,8,9,12,5,3,12];
    let duplicate = array.filter(function(x, y) {
        return array.indexOf(x) == y;
    })
    return duplicate.sort((x, y) => x - y);;
}
console.log(case2());
