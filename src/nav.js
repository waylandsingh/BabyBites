export default function nav() {
    const container = document.getElementById("content")
    const nav = document.createElement("div");

    nav.innerHTML = '<div class="topnav"><ul class="tab-list">    <li id="home"><a href="#">Home</a></li>    <li id="menu"><a href="#">Menu</a></li>    <li id="contact"><a href="#">Contact</a></li>  </ul></div>'
    
    container.appendChild(nav)
}