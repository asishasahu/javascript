/* 
    JAVASCRIPT EXECUTION CONTEXT
    3 types : Global, Function, Eval

    Code runs in 2 phase
    Memory creation phase, Execution phase
*/

/*

   // -----------Example-------------
   let val1=10;
   let val2=20;
   function sumValue (val1, val2) {
   let total = val1 + val2;
   return total;
   }
   let result = sumValue(val1, val2);

   // -------------------------PROCESS --------------------------
   ## memory phase
   val1, val2 -> undefined
   function sumValue -> definition
   result -> undefined

   ## execution phase
   val1 -> 10, val2 -> 20
   sumValue -> new variable environment + execution thread

*/