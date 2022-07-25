// <div id="foodpics"><img src = "../src/vampire-food.jpg" /></div>
import vampchef from "./vampchef.jpg";

export default function foodpics() {
    const content = document.getElementById("tabcontent");
    const imgdiv = document.createElement("img");
    imgdiv.id = 'foodpics';
    imgdiv.src = vampchef;

    return imgdiv;

}