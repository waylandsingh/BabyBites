export default function nav() {
    const container = document.getElementById("content")
    const nav = document.createElement("div");

    nav.innerHTML = '<div class="topnav"><ul class="tab-list">    <li id="home"><a href="#"><h2>👶 Home</h2></a></li><li id="menu"><a href="#"><h2>🩸 Menu</h2></a></li><li id="contact"><a href="#"><h2>👄 Contact</h2></a></li>  </ul></div>'
    
    container.appendChild(nav)
}