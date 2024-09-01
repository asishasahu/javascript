// closures -> child scope can access parent scope, but parent scope can't access child scope
function one () {
    const keyboard = 'zebronics';
    // console.log(laptop);
    // console.log(mouse);
    console.log(keyboard);
    function two () {
        let mouse = 'dell';
        console.log(mouse);
        function three () {
            let laptop = 'lenovo';
            console.log(laptop);
            console.log(keyboard);
            console.log(mouse);
        }
        three()
    }
    two()
}
one()

// closures in if-else

if (true) {
    const name = 'ABC';
    
    if (true) {
        const anotherName = 'DEF';
        console.log(anotherName);
        console.log(name);
    }
}
