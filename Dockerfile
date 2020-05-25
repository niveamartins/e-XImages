FROM ubuntu
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip

RUN pip3 install --upgrade pip
RUN pip3 install Pillow
RUN pip3 install flask
ADD ./ /eXImages
WORKDIR /eXImages
CMD python3 app.py