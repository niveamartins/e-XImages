// In this doc, we gonna set the button component. 

class Button extends HTMLElement {
    
    connectedCallback() {

        // Setting the Shadow DOM.
        const shadow = this.attachShadow({ mode: 'open'})

        // Setting a button
        const button = document.createElement('button')
        button.textContent = this.getAttribute('name')

        if (this.getAttribute('onclick') != null) {
            button.onclick = this.getAttribute('onclick')
        }

        // Setting the link
        if (this.getAttribute('href') != null) {
            const link = document.createElement('a')
            link.href = this.getAttribute('href')

            // Appending button to the shadow
            link.appendChild(button)
            shadow.appendChild(link)
        } else {

            //Appending button to the shadow
            shadow.appendChild(button)
        }

        // Setting some style
        const style = document.createElement('style')
        style.textContent = " button { background-color: darkorange; margin-top: 5px; padding: 4% 10%; border: none; text-transform: uppercase; font-size: medium; color: white; display: block;} a { width: 20%; text-decoration: none; color: whitesmoke;}"
        
        // Appending style
        shadow.appendChild(style)
        
    }
    
}

customElements.define('new-button', Button);