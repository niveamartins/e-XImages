
let CoordenadasFinais = []

// Criando o Canvas com a foto, lendo as coordenadas do usuario e marcando.
window.onload = function() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img = document.getElementById("imageToCanvas");
    let coordRect = []
    ctx.drawImage(img, 0, 0, 1000, 1000);
            
    let create_Rect = function(coordRect, ctx) {
        var x1 = Number(coordRect[0])
        var x2 = Number(coordRect[2])
        var y1 = Number(coordRect[1])
        var y2 = Number(coordRect[3])

        var widthRect = x2 - x1;
        var heightRect = y2 - y1;

        ctx.beginPath()
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.strokeRect(x1, y1, widthRect.toFixed(1), heightRect.toFixed(1));

        strCoord = x1 + ',' + y1 + ',' + x2 + ',' + y2
        CoordenadasFinais.push(strCoord)

        console.log(x1.toFixed(1), y1.toFixed(1), widthRect.toFixed(1), heightRect.toFixed(1)) // Console.log para debugar
    }
    
    function getCursorPosition(canvas, event) {
        var temp = document.getElementById('myCanvas');
                
    
        canvasCoord = canvas.getBoundingClientRect();
        var x = (event.x - canvasCoord.x)/(canvasCoord.right - canvasCoord.left) * canvas.width
        var y = (event.y - canvasCoord.y)/(canvasCoord.bottom - canvasCoord.top) * canvas.height
        console.log(canvas.offsetLeft)
        console.log("x: " + x + " y: " + y)

        coordRect.push(x)
        coordRect.push(y)

        console.log(coordRect) // Console.log para debugar

        if (coordRect.length === 4) {
            create_Rect(coordRect, ctx)
            coordRect = []
        }
    }

    canvas.addEventListener('click', function (e) {
        getCursorPosition(canvas, e)
            
    });
};

// Fazendo a requisicao do POST para o Flask
submitCoord = function() {
    console.log("o submit funciona!")
    event.preventDefault()

    var DadosFinais = []
    
    // Pegando o nome do arquivo
    var file = document.querySelector("#imageName")
    file = file.textContent.split('/')
    file = file[1]

    // Lista para o arquivo final
    for (item in CoordenadasFinais) {
        var dado = []
        dado.push(file + ',' + CoordenadasFinais[item] + ' # ')
        DadosFinais.push(dado)
    }


    // Mandando arquivos para o Back-end
    fetch('http://127.0.0.1:5000/api/createfile', {
        method: 'POST',
        body: DadosFinais
    }).then(function(response) {
        console.log(response)
    })

    console.log(DadosFinais)
    
}


// Editando as marcacoes

