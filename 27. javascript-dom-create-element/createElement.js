const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);                   // children -> to access the child value of parent              
console.log(parent.children[0]);
console.log(parent.children[0].textContent);

for (let index = 0; index < parent.children.length; index++) {
    console.log (parent.children[index].innerText);
}
parent.children[0].style.color = 'orange';
console.log(parent.firstElementChild);          // firstElementChild -> to get 1st element
console.log(parent.lastElementChild);           // lastElementChild -> to get last element

const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);              // parentElement -> to access parent from child
console.log(dayOne.nextElementSibling);         // nextElementSibling -> to get immediate child element
console.log(parent.childNodes);                 // childNodes -> to get tree structure



const div = document.createElement('div');
div.innerText = 'This is div details';
div.style.backgroundColor = 'red';
div.className = 'div-class';
div.id = 'div-id';
console.log(div);

document.body.appendChild(div);  

















