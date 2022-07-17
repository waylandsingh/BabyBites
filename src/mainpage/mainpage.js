
import foodpics from "./foodpics.js";
import copy from "./copy.js";

export default function mainpage() {
    document.getElementById("tabcontent").innerHTML='';
    foodpics();
    copy();

}