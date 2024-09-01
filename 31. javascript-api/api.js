// TO DISPLAY AN API
/* 
   Creating an Instance
   Configuring the Request
   Sending the Request
   Handling the Response
   parse -> converts from String to object
   XMLHttpRequest is a JavaScript API used to send HTTP requests and receive responses from a web server
*/
const xhr = new XMLHttpRequest()                     
console.log(xhr);

xhr.open('GET','https://randomuser.me/api/');        
xhr.send()                                           
xhr.onreadystatechange = function () {               
    console.log(xhr.readyState);
   if (xhr.readyState === 4) {
    const vaw = JSON.parse(this.responseText);
    console.log(typeof vaw);
    console.log(vaw);
   }
}





