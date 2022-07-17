// <div id="foodpics"><img src = "../src/vampire-food.jpg" /></div>

export default function foodpics() {
    const content = document.getElementById("tabcontent");
    const imgdiv = document.createElement("div");
    imgdiv.innerHTML = '<div id="foodpics"><img src = "../src/vampire-food.jpg" /></div>'

    content.appendChild(imgdiv)

}