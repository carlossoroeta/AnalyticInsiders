function Mostrar(id){
    for (let index = 0; index < 4; index++) {
        let i= "s" + index.toString()
        let element = document.getElementById(i)
        element.style.display="none"
    }
    let screen=document.getElementById(id)
    screen.style.display="flex"

}
function showMessage() {
    alert( 'Hello everyone!' )
}
