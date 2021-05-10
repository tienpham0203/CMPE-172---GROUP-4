FROM node:alpine
WORKDIR /usr/app

ADD ./src src/
ADD ./src/app.css src/app.css  
ADD ./src/App.js src/App.js
ADD ./src/bootstrap.css src/bootstrap.css
ADD ./src/index.css src/index.css
ADD ./src/setupTests.js src/setupTests.js 
ADD ./src/story1.txt src/story1.txt 
ADD ./src/story2.txt src/story2.txt 
ADD ./src/components/DisplayResult.js src/components/DisplayResult.js 
ADD ./src/components/upload.css src/components/upload.css 
ADD ./src/components/Upload.js src/components/Upload.js 
ADD ./src/components/UploadToS3.jsx src/components/UploadToS3.jsx 
ADD ./src/components/UpLoadToS33.jsx src/components/UpLoadToS33.jsx 
ADD ./src/components/Welcome.jsx src/components/Welcome.jsx 
ADD ./src/components/file_upload/UploadToS3.jsx src/components/file_upload/UploadToS3.jsx
ADD ./public/index.html public/index.html
ADD ./public/logo192.png public/logo192.png
ADD ./public/logo512.png public/logo512.png
ADD ./public/manifest.json public/manifest.json
ADD ./public/robots.txt public/robots.txt 

COPY package*.json package*.json 
RUN npm install 
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]

