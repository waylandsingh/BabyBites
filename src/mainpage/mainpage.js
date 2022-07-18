
import foodpics from "./foodpics.js";
import copy from "./copy.js";
import quote from "./quote"

export default function mainpage() {
    let tabcontent = document.getElementById("tabcontent");
    tabcontent.innerHTML = ''

    tabcontent.appendChild(quote())
    
    tabcontent.appendChild(foodpics())
    tabcontent.appendChild(copy())

}