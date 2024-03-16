let main = document.querySelector("#main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove" ,  (event) => {
        // cursor.style.transform = `translate(${event.x}px,${event.y}px)`
        cursor.style.left = `${event.x}px`
        cursor.style.top = `${event.y}px`
})