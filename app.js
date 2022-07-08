//File System
const fs = require('fs');

const { rejects } = require('assert');
const { resolve } = require('path');

//Import semua fungsi dari contact.js
const {rl, dirPath, dataPath, questions} = require('./contact.js');

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

//Menjalankan fungsi main
main();