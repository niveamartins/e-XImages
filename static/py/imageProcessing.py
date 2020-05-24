from PIL import Image
import csv

filepaths = []



def cropWithCSV():
    number = 1
    csvfile = open('static/Coordenadas.csv')
    reader = csv.reader(csvfile)
    filepaths = []
    for row in reader:
        photoDetails = row[0].split(',')
        img = Image.open('static/images/' + photoDetails[0])
        img = img.resize((1000,1000))

        pathNewImage = 'images/cropped/' + str(number) + '_' + photoDetails[0]

        cropCoords = (float(photoDetails[1]), float(photoDetails[2]), float(photoDetails[3]), float(photoDetails[4]))
        croppedImg = img.crop(cropCoords)
        croppedImg.save('static/' + pathNewImage)

        filepaths.append(pathNewImage)
        
        number = number + 1
    
    return filepaths