import nav from "./nav.js";


import mainpage from "./mainpage/mainpage.js";
import menupage from "./menupage.js";
import contactpage from "./contactpage.js"
import './index.css';

console.log('this is only a test of the public service test');
const container = document.createElement("div")
container.id = "content"
document.body.appendChild(container)


nav();
const tabcontainer = document.createElement("div");
tabcontainer.id = "tabcontent"
container.appendChild(tabcontainer);
mainpage()

const hometab = document.getElementById("home");
hometab.onclick = mainpage;

const menutab = document.getElementById("menu");
menutab.onclick = menupage;

const contacttab = document.getElementById("contact");
contacttab.onclick = contactpage;