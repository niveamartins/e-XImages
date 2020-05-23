from flask import Flask, render_template, url_for

app = Flask(__name__)


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
    return render_template('index.html', **locals())

@app.route('/image/<imageName>')
def image(imageName):
    imageName = 'images/'+ imageName
    return render_template('image.html', **locals())



if __name__ == "__main__":
    app.run(debug=True)