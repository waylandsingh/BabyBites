        // <div id="copy">Welcome to Baby Bites, the satisfying flesh and blood cafe. We have free range nuggets, and blood of all types on Tap. Everything is locally sourced and vetted for the best possible quality. Feel hungry? Leave happy!</div>
//

export default function copy(){
    const content = document.getElementById("tabcontent");
    const pageCopy = document.createElement("div");
    pageCopy.id = 'copy'
    pageCopy.innerHTML = `<article>
                                <p>Baby Bites: the satisfying flesh and blood cafe. </p>
                                <p> 
                                Everything is locally sourced and vetted for the best 
                                possible quality.
                                </p>
                                <strong>No more "Sorry I tried to inappropriately suck your blood"
                                </strong> <br>-now offering discreet home delivery!
                                </p>
                            </article>
                        `

    return pageCopy;
}