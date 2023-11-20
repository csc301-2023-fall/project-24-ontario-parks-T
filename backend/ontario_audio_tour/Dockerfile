# base image  
FROM python:3.8  
# setup environment variable  
ENV DockerHOME=/backend/ontario_audio_tour

# set work directory  
RUN mkdir -p $DockerHOME

# where your code lives  
WORKDIR $DockerHOME  

# set environment variables  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  

# install dependencies  
RUN pip install --upgrade pip  

# copy folders needed to docker home directory. 
# COPY . $DockerHOME
COPY AdminControl/ $DockerHOME/AdminControl
COPY ontario_audio_tour/ $DockerHOME/ontario_audio_tour
COPY requirements.txt $DockerHOME
COPY manage.py $DockerHOME

# run this command to install all dependencies  
RUN pip install -r requirements.txt  
# port where the Django app runs  
EXPOSE 8000  
# start server  
CMD python manage.py runserver 0.0.0.0:8000