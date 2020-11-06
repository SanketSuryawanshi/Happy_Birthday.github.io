// var ls = localStorage.getItem('namespace.visited');
// if (ls == null) {
//     const startit = () => {
//         setTimeout(function () {
//             confetti.start();
//         }, 1000);
//     };

//     const stopit = () => {
//         setTimeout(function () {
//             confetti.stop();
//         }, 6000);
//     };

const startit = () => {
    setTimeout(function () {
        confetti.start();
    }, 1000);
};

const stopit = () => {
    setTimeout(function () {
        confetti.stop();
    }, 6000);
};

var person = prompt("Enter Your Name plz :");
text = document.getElementById("text");
text.innerText = " Happy Birthday to " + person;

startit();
stopit();




