/* Task 1 */

const globalVariable = "Welcome";

function outer() {
    alert(globalVariable);

    const course = "Atlas";

        function inner() {
        alert(globalVariable + " " + course);

        const exclamation = "!";

        function inception() {
            alert(globalVariable + " " + course + exclamation);
        }

        inception();
    }

    inner();
}

outer();