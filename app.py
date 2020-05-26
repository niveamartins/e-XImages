from flask import Flask, render_template, url_for, request
import csv
from static.py.imageProcessing import cropWithCSV
import glob

app = Flask(__name__)

# Frontend's Routes
@app.route('/')
def index(): 

    # Here we can put all the informations if we put more pictures in images folder.
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
    #Sending our html and photos array
    return render_template('index.html', **locals())

@app.route('/image/<imageName>')
def image(imageName):

    # This function gets the image's name and send with our html
    imageName = 'images/'+ imageName
    return render_template('image.html', **locals())

@app.route('/cropped')
def croppedImages():
    croppedImages = []

    # cropWithCSV returns an array with cropped image's filenames 
    croppedImages = cropWithCSV()

    #Sending the html and filenames
    return render_template('cropped.html', **locals())


# Back-end's Routes
@app.route('/api/createfile', methods=['POST'])
def create_file():
    # This function will receive a string with coordinates from our front and save in a CSV file
    data = request.data.decode()

    # Here we are splitting the lines and saving in an array
    dados = data.split(' # ,' or ' # ')

    # Here we open our coordinates file and append new info to them.
    c = csv.writer(open("./static/Coordenadas.csv", "a"))

    for item in dados:
        item = item.split()
        c.writerow([item[0]])
        
    return "OK"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')