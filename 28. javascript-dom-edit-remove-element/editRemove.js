// create element

function addLanguage (langname) {
   const elementCreate = document.createElement('li');
   elementCreate.appendChild(document.createTextNode(langname));
   document.querySelector('.language').appendChild(elementCreate);
}
addLanguage('javascript is logical')
addLanguage('javascript is logic based')
addLanguage('javascript')


// edit element

const editElement = document.querySelector("li:nth-child(4)");
console.log(editElement);
const changeElement = document.createElement('li');
changeElement.innerText = 'ABC';
editElement.replaceWith(changeElement);


// remove element

const lastLanguage = document.querySelector("li:last-child");
lastLanguage.remove()

