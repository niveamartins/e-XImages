from PIL import Image
import csv

def cropWithCSV():
    number = 1
    csvfile = open('static/Coordenadas.csv')
    reader = csv.reader(csvfile)
    for row in reader:
        photoDetails = row[0].split(',')
        img = Image.open('static/images/' + photoDetails[0])
        b = (float(photoDetails[1]), float(photoDetails[2]), float(photoDetails[3]), float(photoDetails[4]))
        
        print(b)
        
        croppedImg = img.crop((float(photoDetails[1]), float(photoDetails[2]), float(photoDetails[3]), float(photoDetails[4])))

        croppedImg.save(str(number) + '_' + photoDetails[0])
        
        number = number + 1
