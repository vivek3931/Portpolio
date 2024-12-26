let date = document.querySelector(".date")
let time = document.querySelector(".time")
const now = new Date();

const formattedDate = now.toLocaleDateString('en-US', {
    // year: 'numeric',
    month: 'long',
    day: 'numeric'
})
const formattedTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
})



let clock = () => {
    date.innerText = formattedDate;
    time.innerText = formattedTime;
}
clock();

let sidenav = document.querySelector('.side-nav');
let menu = document.querySelectorAll('.menu-bar');


menu.forEach(element => {
    element.addEventListener("click", () => {
        sidenav.classList.toggle('hidden')
    })
});

