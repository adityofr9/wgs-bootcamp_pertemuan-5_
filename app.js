const contacts = require('./contact.js');

const main = async () => {
    const name = await contacts.questions('What is your name? ');
    const mobile = await contacts.questions('What is your mobile phone? ');


    contacts.saveContact(name, mobile);
};

//Menjalankan fungsi main
main();