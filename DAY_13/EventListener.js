const para = document.querySelector('#second1');
// without argument
para.addEventListener("click", addPara);
// with argument
// para.addEventListener("click" , () => addPara("Event"))

function addPara(){
    alert("hello moto")
}

para.addEventListener("mouseover",()=>para.remove())

// keyboard events
document.body.addEventListener("keydown", (Event) => {
    document.getElementById('para').innerHTML = Event.key;
})