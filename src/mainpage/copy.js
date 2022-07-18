        // <div id="copy">Welcome to Baby Bites, the satisfying flesh and blood cafe. We have free range nuggets, and blood of all types on Tap. Everything is locally sourced and vetted for the best possible quality. Feel hungry? Leave happy!</div>
//

export default function copy(){
    const content = document.getElementById("tabcontent");
    const pageCopy = document.createElement("div");
    pageCopy.id = 'copy'
    pageCopy.innerHTML = `<p>Welcome to Baby Bites, the satisfying flesh and blood cafe. 
                            We have free range nuggets, and blood of all types on Tap. 
                            Everything is locally sourced and vetted for the best 
                            possible quality. Feel hungry? Leave happy!
                            No more "Sorry I tried to inappropriately suck your blood"
                            - we even do discreet home delivery
                            </p>`

    return pageCopy;
}