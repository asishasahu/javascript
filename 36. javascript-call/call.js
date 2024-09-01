function setUserName (username) {
    this.username = username;
}

function anotherUser (username, email, address) {
    setUserName.call(this, username);
    this.email = email;
    this.address = address;
}
const nua = new anotherUser('abc', 'abc@xyz.com', 'abc, edf');
console.log(nua);

//

function nameDetails (name) {
    this.name = name;
}
function naamDetails (name, fullname, email) {
    nameDetails.call(this, name);
    this.fullname = fullname;
    this.email = email;
}
const nameThings = new naamDetails('plm', 'plm-okn', 'plm@okn.com');
console.log(nameThings);

