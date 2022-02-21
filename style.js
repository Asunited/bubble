let count = 0;
let total = 0;
function bubbleMaker() {
    const bubble = document.createElement('span');
    document.body.appendChild(bubble);

    const size = Math.floor(Math.random() * 200 + 100) + "px";
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.top = Math.random() * 100 + 50 + "%";

    //declanche avec un compte a rebours
    setTimeout(() => {
        bubble.remove();
    }, 5001);

    bubble.addEventListener('click', () => {
        bubble.remove();
        count++;
        score.textContent = count;
    })
}

document.body.addEventListener('click', () => {
    total++;
    console.log(Math.round((count / total) * 100) + "%");
})

setInterval(bubbleMaker, 150);
