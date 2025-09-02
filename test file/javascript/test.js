let hello = "Hello, Blu!";
let nama = prompt("masukkan nama: ");
let umur = prompt("masukkan umur: ");
const halo = "Halo, nama saya " + nama + " dan umur saya " + umur;
for (let i = 1; i <= 10; i++){
    const numbers = i;
};
function factorial(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
};
let hobi = ['gaming', 'coding', 'mancing', 'makan', 'baca'];
function looping(array){
    const start = array.length - 1;;
    for(let i = 0; i <= start; i++){
    let result = array[i];
    console.log(result);
    };
};
let angka = [1, 2 ,3, 4, 5];
const mapped = angka.map((haha) => {for(let i = 0; i <= 4; i++){
    let kuadratkan = haha[i] ** 2;
    return kuadratkan;
}});

let mahasiswa = {
    nama : "Blue",
    NIM : 241810201017,
    jurusan : "Fisika murni"
};
function averageNumber(array){
    let result = 0;
    for (let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result % (array.length - 1);
};
const angkaTest = [1, 2, 3, 198, 4, 5];

function cariMaksimum (array){
    const largestNumber = Math.max(...array);
    return largestNumber;
};
