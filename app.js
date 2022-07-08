//Readline
const readline = require('readline');
//NPM Validator
const validator = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Variable scope global untuk name & email
let name = '';
let email = '';

//Function untuk menjalankan perintah question Email
let qEmail = () => {
    rl.question('What is your e-mail address? ', (tmpEmail) => {
        let vldEmail = validator.isEmail(tmpEmail);                         //Validasi inputan E-mail
        if (vldEmail == true) {
            email = tmpEmail;
            qNumber();
        } else {
            console.log('Your e-mail address input is invalid, try again!')
            qEmail();
        }
    });
};

//Function untuk menjalankan perintah question Nomor Telp
let qNumber = () => {
    rl.question('What is your phone number? ', (number) => {
        let vldNumber = validator.isMobilePhone(number, 'id-ID');           //Validasi inputan Nomor Telp
        if (vldNumber == true) {
            console.log();
            console.log('Hello!');
            console.log(`Your name is ${name}`);
            console.log(`Your e-mail address is ${email}`);
            console.log(`Your phone number is ${number}`)
            rl.close();
        } else {
            console.log('Your phone number input is invalid, try again with Indonesian phone number format!')
            qNumber();
        }
    });
};

//Perintah untuk menjalankan readline question
rl.question('What is your name? ', (tmpName) => {
    name = tmpName;
    qEmail();
});