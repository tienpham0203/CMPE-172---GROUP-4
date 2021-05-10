# CMPE-172---GROUP-4

# BE MY SPEAKER APPLICATION

Be My Speaker is a simple text-to-speech application that allows users to read a paragraph or a sentence that they type into a text box.

# HOMEPAGE 

<img width="1280" alt="Screen Shot 2021-05-11 at 12 38 31 AM" src="https://user-images.githubusercontent.com/36835097/117693827-fecc4780-b1f0-11eb-90e8-954fedd5d3d5.png">

# ABOUT US PAGE

<img width="1280" alt="Screen Shot 2021-05-11 at 12 40 32 AM" src="https://user-images.githubusercontent.com/36835097/117693990-320ed680-b1f1-11eb-8da0-41594b30e777.png">

# DATABASE

<img width="616" alt="Screen Shot 2021-05-11 at 12 43 22 AM" src="https://user-images.githubusercontent.com/36835097/117694308-95990400-b1f1-11eb-8dc6-6343e7d9a3ae.png">

# RUN LOCALLY

# 1. Clone Repo
```
$ Clone repo https://github.com/tienpham0203/CMPE-172---GROUP-4.git
$ cd CMPE-172---GROUP-4
```

# 2. Install MySql

Download it from here: https://dev.mysql.com/downloads/workbench/

# 3. Run backend

Make sure you configure your aws credential in your environemnt.
Put your RDS instance configure information in the properties java class.

cd to demoone to run as a Spring boot project

# 4. Run frontend

```
$ cd frontend
$ npm install
$ npm start
```

# 5. Run Be My Speaker
- Run http://localhost:3000

# Dockerize and run the react app

# 1. Install Docker

Download it from here: https://www.docker.com/products/docker-desktop

# 2. Run Docker on your end

# 3. cd to frontend

# 4. Dockerize React App
```
$ docker build -t dockerize-react:v1 .

$ docker run \                        
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    Dockerize-react:v1
```
 # 5. Run it
 - Run http://localhost:3000
   

