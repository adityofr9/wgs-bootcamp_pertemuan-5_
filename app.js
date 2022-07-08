//File System
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
//Readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Membuat folder "data" apabila folder tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//Membuat file "contacts.json" apabila file tidak ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// rl.question('What is your name? ', (name) => {
//     rl.question('Your mobile number? ', (mobile) => {
        // const contact = {name, mobile};
        // const file = fs.readFileSync('data/contacts.json', 'utf8');
        // const contacts = JSON.parse(file);
        // contacts.push(contact);
        // fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        // console.log('Terima kasih sudah memasukkan data!');
        // rl.close();
//     });
// });

//Membuat fungsi ask menggunakan promise
const questions = (ask) => {
    return new Promise((resolve, reject) => {
        rl.question(ask, (inputVariable) => {
            resolve(inputVariable);
        });
    });
};

const main = async () => {
    const name = await questions('What is your name? ');
    const mobile = await questions('Your mobile number? ');

    const contact = {name, mobile};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terima kasih sudah memasukkan data!');
    rl.close();
};

main();