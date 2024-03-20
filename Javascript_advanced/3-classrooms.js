/* Task 3 */

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    /* Would have named this roster, but task requirements */
    let students = [];

    for (let x = 0; x < numbersOfStudents; x++) {
        students.push(studentSeat(x + 1));
    }

    return students;

}

const classRoom = createClassRoom(10);

/* RUN WITH */
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
