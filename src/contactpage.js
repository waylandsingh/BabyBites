

export default function contactpage() {
     // additional stuff here 
     console.log('hey I heard you wanted to get in contact with us?')
     let tabcontent = document.getElementById("tabcontent");
     tabcontent.innerHTML='';
 
     const menu = document.createElement("div");
     menu.id = "contact-tab"
     menu.innerHTML = `
                    <div id="contact-hours" class="info-section">
                         <h1 class="menu-title jumbo">hours</h1>
                              <h1>
                              <b>M-F</b> 
                              <span class="menu-right menu-tag menu-dark-grey menu-round">5pm - 9am(+1)</span>
                              </h1>
                              <h1>
                              <b>Weekends</b> 
                              <span class="menu-right menu-tag menu-dark-grey menu-round"> 3pm - noon(+1)</span>
                              </h1>
                         </h1>
                    </div>
                    <div id="contact-info" class="info-section">
                         <h1 class="menu-title jumbo">contact</h1>
                         <h1>Call: (666)LUV-BLUD</h1>
                         <h1>Email:bitesbaby@outlook.com</h1>

                    </div>
                    
     `
     // put together more detailed menu page! practice HTML for the next block
     tabcontent.appendChild(menu);

}