/* Task 2 */

function welcomeMessage(fullName) {
    alert("Welcome " + fullName);
}

let guillaume = function() {
    welcomeMessage("Guillaume");
};

let alex = function() {
    welcomeMessage("Alex");
};

let fred = function() {
    welcomeMessage("Fred");
};

/* RUN WITH */
guillaume();
alex();
fred();