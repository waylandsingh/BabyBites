

export default function menupage() {
    // additional stuff here 
    console.log('hey welcome to the menu page')
    let tabcontent = document.getElementById("tabcontent");
    tabcontent.innerHTML='';

    const menu = document.createElement("div");
    menu.innerHTML = `
        <div id="menu">
            <h1 class="jumbo">Blood 'n' Bites</h1>
            <div id="appetizers" class="menu-section">
                <h1 class="menu-title jumbo">smalls</h1>
                <h1>
                    <b>carpaccio</b> 
                    <span class="menu-right menu-tag menu-dark-grey menu-round">$17.00</span>
                    <p class="menu-description">Fresh ground Chuck with black garlic and emu egg, served with toast points and capers. Raw.</p>
                </h1>
            </div>
            
            <div id="mains" class="menu-section">
                <h1 class="menu-title jumbo">bigs</h1>
                <h1>
                    <b>burger</b> 
                    <span class="menu-right menu-tag menu-dark-grey menu-round">$26.00</span>
                    <p class="menu-description">Choice of lean or rich ground, on a brioche bun with pickled beets, beefsteak tomato and crispy red lettuce. Served rare.</p>
                </h1>

            </div>

            <div id="drinks" class="menu-section">
                <h1 class="menu-title jumbo">liquids</h1>
                <h1>
                    <b>shaken</b> 
                    <span class="menu-right menu-tag menu-dark-grey menu-round">$14.00</span>
                    <p class="menu-description">Unfiltered, raw blood from a freshly tapped source; lots of body, complex flavors - satisfying.</p>
                </h1>
                <h1>
                    <b>stirred</b> 
                    <span class="menu-right menu-tag menu-dark-grey menu-round">$13.00</span>
                    <p class="menu-description">Top-layer plasma from gently centrifuged donors. Clear in color, and full of essentials for healthy living.</p>
                </h1>
            </div>

         
            
        </div>
    `
    // put together more detailed menu page! practice HTML for the next block
    tabcontent.appendChild(menu);

}