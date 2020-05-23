from flask import Flask, render_template, url_for, request
import csv
from static.py.imageProcessing import cropWithCSV

app = Flask(__name__)

# Rotas do Front
@app.route('/')
def index(): 
    photos = [
    {
        'name': 'cars',
        'fileName':'cars.jpg',
        'filePath': 'images/cars.jpg' 
    },
    {
        'name': 'dining_room',
        'fileName':'dining_room.jpg',
        'filePath': 'images/dining_room.jpg'
    },
    {
        'name': 'Hienas',
        'fileName':'hienas.jpg',
        'filePath': 'images/hienas.jpg'
    },
    {
        'name': 'Oscar Selfie',
        'fileName':'oscar_selfie.jpg',
        'filePath': 'images/oscar_selfie.jpg'
    }
]   
    cropWithCSV()

    return render_template('index.html', **locals())

@app.route('/image/<imageName>')
def image(imageName):
    imageName = 'images/'+ imageName
    return render_template('image.html', **locals())


# Rotas do Back-end
@app.route('/api/createfile', methods=['POST'])
def create_file():
    data = request.data.decode()

    dados = data.split(' # ,' or ' # ')

    c = csv.writer(open("./static/Coordenadas.csv", "a"))

    for item in dados:
        item = item.split()
        c.writerow([item[0]])
        

    return "qualquer merda"

if __name__ == "__main__":
    app.run(debug=True)