# base image  
FROM node:21.2.0
# setup environment variable  
ENV DockerHOME=/frontend/d3/frontend

# set work directory  
RUN mkdir -p $DockerHOME

# where your code lives  
WORKDIR $DockerHOME   

# copy whole project to your docker home directory. 
# COPY . $DockerHOME
COPY public/ $DockerHOME/public
COPY src/ $DockerHOME/src
COPY package.json $DockerHOME

# run this command to install all dependencies  
RUN npm install  
# port where the Django app runs  
EXPOSE 3000

# start server  
CMD ["npm", "start"]