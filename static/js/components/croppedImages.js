// In this doc, we gonna set the Image component. 

class CroppedImg extends HTMLElement {
    
    connectedCallback() {

        // Setting the Shadow DOM.
        const shadow = this.attachShadow({ mode: 'open'})

        // Setting a image
        const croppedImg = document.createElement('img')
        croppedImg.src = this.getAttribute('src')

        // Setting some style
        const style = document.createElement('style')
        style.textContent = "img { width: 200px; margin: 10px;}"

        // Appending style
        shadow.appendChild(style)
        shadow.appendChild(croppedImg)
        
    }
    
}

customElements.define('cropped-img', CroppedImg);