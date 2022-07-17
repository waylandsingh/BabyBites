export default function nav() {
    const container = document.getElementById("content")
    const nav = document.createElement("div");
    
    nav.innerHTML = '<div class="topnav"><ul class="tab-list">    <li id="home">Home</li>    <li id="menu">Menu</li><li id="contact">Contact</li>  </ul></div>'
    
    container.appendChild(nav)
}