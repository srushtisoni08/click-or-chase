let count = 0;
function moveButton(){
    let b = document.getElementById("no");
    count++;
    if(count > 10){
        window.location.href = "ok.html";
    }
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 50);
    b.style.position = "absolute";
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;
}