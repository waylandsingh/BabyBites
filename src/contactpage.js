

export default function contactpage() {
     // additional stuff here 
     console.log('hey I heard you wanted to get in contact with us?')
     let tabcontent = document.getElementById("tabcontent");
     tabcontent.innerHTML='';
 
     const menu = document.createElement("div");
     menu.innerHTML = '<p>No, we are cantankerous kids of killers</p>'
     // put together more detailed menu page! practice HTML for the next block
     tabcontent.appendChild(menu);

}