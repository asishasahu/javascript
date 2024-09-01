// to remove pollution of global scope, use IIFE (immediate ivoke)

(function one () {
   console.log("Immediate ivoke");
} ) ();

( () => {
    console.log('Arrow function with immediate ivoked');
}) ()


