//Loggan uppe till vänster skickar tillbaks till hemskärmen

let icon = document.getElementById("logo"); 

console.log(icon)

icon.addEventListener("click", function() {
    window.location.href = "index.html"
})