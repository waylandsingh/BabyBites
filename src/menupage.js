

export default function menupage() {
    // additional stuff here 
    console.log('hey welcome to the menu page')
    let tabcontent = document.getElementById("tabcontent");
    tabcontent.innerHTML='';

    const menu = document.createElement("div");
    menu.innerHTML = '<p>Okay, we got really lazy about putting a menu together.. Sue us.</p>'
    // put together more detailed menu page! practice HTML for the next block
    tabcontent.appendChild(menu);

}