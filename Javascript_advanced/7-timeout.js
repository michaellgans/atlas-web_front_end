/* Task 7 */

console.log("Start of the execution queue");

setTimeout(function(){
    console.log("Final code block to be executed");
}, 0);

for (let x = 0; x < 101; x++) {
    console.log(x);
}

console.log("End of the loop printing");