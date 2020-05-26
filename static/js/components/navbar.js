// In this doc, we gonna set the nav-bar component. 

class NavBar extends HTMLElement {
    connectedCallback() {

        // Setting the Shadow DOM.
        const shadow = this.attachShadow({ mode: 'open'})
        
        // Defining a link to return to home page.
        const link = document.createElement('a')
        link.href = '/'

        // Putting a title 
        const title = document.createElement('h1')
        title.textContent = 'e-XImages'

        // Setting a CSS to the link
        const style = document.createElement('style')
        style.textContent = "a { width: 20%; text-decoration: none; color: whitesmoke;}"
        
        // Appending the title to the link.
        link.appendChild(title)

        // Appending everything to the page.
        shadow.appendChild(link)
        shadow.appendChild(style)


    }
    
}

customElements.define('nav-bar', NavBar);