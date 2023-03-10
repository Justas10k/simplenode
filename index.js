const fs=require('fs');
fs.writeFileSync('mnaofailas.txt', 'tekstas works');
let tekstas =fs.readFileSync('mnaofailas.txt', {encoding: 'utf-8'});
console.log(tekstas);

//1.susikurti skaiciu sarasa ir ji irasyti i "pazymiai.json faila"
//2.perskaityti duomenis js failo ur isvestu ju vidurki

