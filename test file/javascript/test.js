const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert'];

const filtered = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600 );

const mapped = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

const sorted= inventors.sort((a, b) => a.year < b.year ? -1 : 1);

const reduced = inventors.reduce((total, inventor) =>{
    return total + (inventor.passed - inventor.year);
}, 0);

const sortedAgain = inventors.sort((a, b) => (a.passed - a.year) < (b.passed - b.year) ? -1 : 1);

const lasted = people
  .map(haha => {
    const akhir = haha.split(" ");
    return [akhir[1]];
  })
  .sort((a, b) => a[0].localeCompare(b[0]));

const data = ['car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const dataReduced = data.reduce((acc, item) =>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

const fiveHundreds = inventors.some(cek => cek.year >= 1500 && cek.year < 1600);

const everest = inventors.every(acc => acc.year > 1400);

const finder = inventors.find(nama => nama.first == 'Galileo');

const hapus = inventors.findIndex(array => array.first == 'Marie')
if (hapus !== -1){
    inventors.splice(hapus, 1);
}


