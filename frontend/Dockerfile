FROM node:alpine
WORKDIR /usr/app

ADD ./src src/
ADD ./public/index.html public/index.html
ADD ./public/Jing.jpg public/Jing.jpg
ADD ./public/logo192.png public/logo192.png
ADD ./public/logo512.png public/logo512.png
ADD ./public/manifest.json public/manifest.json
ADD ./public/robots.txt public/robots.txt 
ADD ./public/T.jpg public/T.jpg
ADD ./public/Tien.PNG public/Tien.PNG
ADD ./src/app.css src/app.css  
ADD ./src/App.js src/App.js
ADD ./src/bootstrap.css src/bootstrap.css
ADD ./src/index.css src/index.css
ADD ./src/setupTests.js src/setupTests.js 
ADD ./src/story2.txt src/story2.txt 
ADD ./src/components/upload.css src/components/upload.css 
ADD ./src/components/AboutUs.js src/components/AboutUs.js
ADD ./src/components/UploadToS3.jsx src/components/UploadToS3.jsx 


COPY package*.json package*.json 
RUN npm install 
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]

