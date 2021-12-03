//Set
let root = document.querySelector(":root")

function SetGlobalUnity(id){
    const gameWindow = document.querySelector(`#${id}`)
    //console.log(gameWindow)
    const value = (gameWindow.clientWidth / 100)
    root.style.setProperty("--u", value.toString() + "px")
}
//Get
let computed = getComputedStyle(root)

/*$(window).resize(function() {
    SetGlobalUnity()
});*/