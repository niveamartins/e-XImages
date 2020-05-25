
let CoordenadasFinais = []

// Criando o Canvas com a foto, lendo as coordenadas do usuario e marcando.
window.onload = function() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img = document.getElementById("imageToCanvas");
    let coordRect = []
    ctx.drawImage(img, 0, 0, 1000, 1000);

    function getCursorPosition(canvas, event) {
        canvasCoord = canvas.getBoundingClientRect();
        var x = (event.x - canvasCoord.x)/(canvasCoord.right - canvasCoord.left) * canvas.width
        var y = (event.y - canvasCoord.y)/(canvasCoord.bottom - canvasCoord.top) * canvas.height

        return {'x': x, 'y': y}
    }

            
    let createRect = function(coordRect, ctx) {
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
        if (widthRect && heightRect !== 0) {
            CoordenadasFinais.push(strCoord)
        }
    

        console.log(x1.toFixed(1), y1.toFixed(1), widthRect.toFixed(1), heightRect.toFixed(1)) // Console.log para debugar
    }

    function getCoordenates(canvas, event) {
        coord = getCursorPosition(canvas, event)
        console.log("x: " + coord.x + " y: " + coord.y)

        coordRect.push(coord.x)
        coordRect.push(coord.y)

        console.log(coordRect) // Console.log para debugar

        if (coordRect.length === 4) {
            createRect(coordRect, ctx)
            coordRect = []
        }
    }

    canvas.addEventListener('click', function (e) {
        getCoordenates(canvas, e)
            
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
    fetch('http://0.0.0.0:8080/api/createfile', {
        method: 'POST',
        body: DadosFinais
    }).then(function(response) {
        if (response.status == 200) {
            alert("Coordenadas enviadas com sucesso!")
        } else { 
            alert("Não foi possível enviar as coordenadas. Por favor, tente novamente.")
        }
    })

    console.log(DadosFinais) //Console log para debugar
    
}

// Excluindo marcações atuais


// Editando as marcacoes


