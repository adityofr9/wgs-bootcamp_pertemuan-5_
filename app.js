//File System
const fs = require('fs');
//Readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('Your mobile number? ', (mobile) => {
        const contact = {name, mobile};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Terima kasih sudah memasukkan data!');
        rl.close();
    });
});