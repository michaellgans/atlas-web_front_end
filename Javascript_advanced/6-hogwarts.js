/* Task 6 */

function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    /* Private Method */
    function changeScoreBy(points) {
        privateScore += points;
    }

    /* Public Methods */
    function setName(newName) {
        name = newName;
    }

    function rewardStudent() {
        changeScoreBy(1);
    }

    function penalizeStudent() {
        changeScoreBy(-1);
    }

    function getScore() {
        return name + ": " + privateScore;
    }

    return {
        setName: setName,
        rewardStudent: rewardStudent,
        getScore: getScore,
        penalizeStudent: penalizeStudent
    }
}

    let harry = studentHogwarts();
    harry.setName("Harry");

    for (let x = 0; x < 4; x++) {
        harry.rewardStudent();
    }

    let draco = studentHogwarts();
    draco.setName("Draco");

    draco.rewardStudent();

    for (let x = 0; x < 3; x++) {
        draco.penalizeStudent();
    }

console.log(harry.getScore());
console.log(draco.getScore());