// <div id="foodpics"><img src = "../src/vampire-food.jpg" /></div>
import foodpics from "./foodpics";
export default function foodpics() {
    const content = document.getElementById("tabcontent");
    const imgdiv = document.createElement("div");
    imgdiv.id = 'foodpics'
    imgdiv.innerHTML = '<img src = "../src/vampchef.jpg" />'

    return imgdiv;

}