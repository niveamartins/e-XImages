from PIL import Image
import csv

# we will put our filepaths in this array
filepaths = []

#this function will crop images with the infos from CSV
def cropWithCSV():

    #this number will complement our image's name
    number = 1

    # opening our csv
    csvfile = open('static/Coordenadas.csv')
    reader = csv.reader(csvfile)

    #cleaning our array before crop
    filepaths = []

    #reading each line
    for row in reader:
        # spliting our line, we will get 0 - filename, 1- x1, 2- y1, 3- x2, 4- y2
        photoDetails = row[0].split(',')

        # opening image
        img = Image.open('static/images/' + photoDetails[0])

        #resizing due to our canvas size in front
        img = img.resize((1000,1000))

        # setting the path to the cropped image
        pathNewImage = 'images/cropped/' + str(number) + '_' + photoDetails[0]

        # cropping
        cropCoords = (float(photoDetails[1]), float(photoDetails[2]), float(photoDetails[3]), float(photoDetails[4]))
        croppedImg = img.crop(cropCoords)

        # saving
        croppedImg.save('static/' + pathNewImage)
        
        # appending the path to our array
        filepaths.append(pathNewImage)
        
        # increasing number
        number = number + 1
    
    #sending filepaths
    return filepaths