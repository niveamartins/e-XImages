// In this doc, we gonna set the instruction component. 

class Instructions extends HTMLElement {
    connectedCallback() {

        // Setting the Shadow DOM.
        const shadow = this.attachShadow({ mode: 'open'})

        // Putting the text from the tag attribute
        const text = document.createElement('p')
        text.textContent = this.getAttribute('text')

        // Putting some CSS
        const style = document.createElement('style')
        style.textContent = "p { text-transform: uppercase; }"
        
        // Appending everything.
        shadow.appendChild(text)
        shadow.appendChild(style)
        
    }
    
}

customElements.define('the-instructions', Instructions);