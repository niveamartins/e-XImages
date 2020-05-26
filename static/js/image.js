
// It will store our final coordinates
let CoordenadasFinais = []

/*
* This function will create a canvas with the image from our HTML. 
* Besides that, it will create and get the rects from user.
*/
window.onload = function() {
    // Here we create the canvas and get the image to the background.
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img = document.getElementById("imageToCanvas");
    let coordRect = []
    ctx.drawImage(img, 0, 0, 1000, 1000);

    // This function will take the cursor's position and transform to a position in the canvas
    function getCursorPosition(canvas, event) {
        canvasCoord = canvas.getBoundingClientRect();
        var x = (event.x - canvasCoord.x)/(canvasCoord.right - canvasCoord.left) * canvas.width
        var y = (event.y - canvasCoord.y)/(canvasCoord.bottom - canvasCoord.top) * canvas.height

        return {'x': x, 'y': y}
    }

    // This function will create the rect in canvas
    let createRect = function(coordRect, ctx) {
        
        // The coordinates given by user
        var x1 = Number(coordRect[0])
        var x2 = Number(coordRect[2])
        var y1 = Number(coordRect[1])
        var y2 = Number(coordRect[3])

        // Calculating the width and height 
        var widthRect = x2 - x1;
        var heightRect = y2 - y1;

        // Drawing user's rect
        ctx.beginPath()
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.strokeRect(x1, y1, widthRect.toFixed(1), heightRect.toFixed(1));

        // Making a string to CSV
        strCoord = x1 + ',' + y1 + ',' + x2 + ',' + y2

        // Verifying if the width and height are valid
        if (widthRect && heightRect !== 0) {

            // Putting our string to our array
            CoordenadasFinais.push(strCoord)
        }
    }

    // This fuction will store 2 points (x,y) to construct the rect. The points will be upper left and lower right.
    function getCoordenates(canvas, event) {
        coord = getCursorPosition(canvas, event)

        coordRect.push(coord.x)
        coordRect.push(coord.y)

        // Verifying if we already have 2 (x,y)
        if (coordRect.length === 4) {
            createRect(coordRect, ctx)
            coordRect = []
        }
    }

    // Here we are listening the user's actions
    canvas.addEventListener('click', function (e) {
        getCoordenates(canvas, e)
            
    });
};

// This function gonna send to our Flask server the coordinates
submitCoord = function() {
    event.preventDefault()

    var DadosFinais = []
    
    // Getting the image's name
    var file = document.querySelector("#imageName")
    file = file.textContent.split('/')
    file = file[1]

    // Putting the rects' coordinates to our array
    for (item in CoordenadasFinais) {
        var dado = []
        dado.push(file + ',' + CoordenadasFinais[item] + ' # ')
        DadosFinais.push(dado)
    }


    // Finally, sending our array to the backend
    fetch('http://0.0.0.0:8080/api/createfile', {
        method: 'POST',
        body: DadosFinais
    }).then(function(response) {
        // It will say to our user if the coordinates was successfully sent.
        if (response.status == 200) {
            alert("Coordenadas enviadas com sucesso!")
        } else { 
            alert("Não foi possível enviar as coordenadas. Por favor, tente novamente.")
        }
    })
    
}



