

// document.getElementById('two').addEventListener() => {
//     return alert('Pray')
// }
// document.getElementById('images').addEventListener('click', (e) => {
//   console.log("clicked");
// }, false)

// document.getElementById('two').addEventListener('click', (e) => {
//     console.log("clicked on owl");
//     e.stopPropagation()
//   }, false)
  

document.querySelector('#images').addEventListener('click', function (e) {
   if (e.target.tagName === 'IMG'){
    let removeIt = e.target.parentNode;
    
    removeIt.remove()
   }
})




// e defines an object
// target defines the specific element
// parentNode defines to get the details of parent
// click is an event
// event bubbling  -> bottom to top -> false/ default 
// event capturing  -> top to bottom -> true
// stopPropagation -> it will be not bubble
// preventDefault-> PENDING
// tagName -> renders result as type of tag




