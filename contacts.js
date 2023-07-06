const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, 'contacts.json');

// TODO: задокументировать каждую функцию
function listContacts() {
    return console.log(contactsPath);
  }
  
  function getContactById(contactId) {

    return console.log(contactId);
  }
  
  function removeContact(contactId) {
    if (contactId == contactId) {
        contactsPath.splice(contactId);

        console.log(contactId);
        console.log(`this contact deleted ${contactId}`);

        return console.log(contactsPath);
    }
    return console.log(`this contact does not exist `);
    
    // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  }
  
  function addContact(name, email, phone) {
    // ...твой код. Возвращает объект добавленного контакта. 
  }