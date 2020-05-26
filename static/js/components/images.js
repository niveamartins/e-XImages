// In this doc, we gonna set the Image component. 

class Image extends HTMLElement {
    
    connectedCallback() {

        // Setting the Shadow DOM.
        const shadow = this.attachShadow({ mode: 'open'})

        // Setting a image
        const img = document.createElement('img')
        img.src = this.getAttribute('src')

        // Setting the link
        if (this.getAttribute('href') != null) {
            const link = document.createElement('a')
            link.href = this.getAttribute('href')

            // Appending image to the link and link to the shadow
            link.appendChild(img)
            shadow.appendChild(link)
        } else {

            //Appending image to the shadow
            shadow.appendChild(img)
        }

        // Setting some style
        const style = document.createElement('style')
        style.textContent = "img { width: 30% }"

        // Appending style
        shadow.appendChild(style)
        
    }
    
}

customElements.define('new-image', Image);