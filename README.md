# Landing Page Project

## Table of Contents

* [Description](#Description)
* [Features](#Features)
* [Instructions](#Instructions)
* [Contributors](#Contributors)
* [Copy Rights](#CopyRights)

---

## Description
Image Cropping/Processing API using Sharp module
visit http://localhost:3000/api/ for Instructions
---

## Features
1. Crop the image based on the width and height
2. Cashing the requested images
3. Access log for all the requests with unique ID for each entry, The Requestor IP, Time/Date
---

## Getting Started
1. Clone the project - `git clone https://github.com/Storm-Maker/Image-Processing-API.git`
2. Go into the project directory `./`
3. Install the dependencies - `npm install`
4. Start the server - `npm run start`
5. To run unit testing with Jasmine - `npm run test`
---

## Instructions

### To process a new picture:
1.  Upload your pictures to `./assets/full`
2.  Visit http://localhost:3000/api/images?filename=example.jpg&width=100&height=100
3.  Replace `filename= ` with correct picture and provide the extension as `.jpg` in the parameter
4.  Replace `width= ` with a positive integer bigger than 0
5.  Replace `height= ` with a positive integer bigger than 0

### To display a processed picture:
1.  Visit http://localhost:3000/api/images?filename=example.jpg&width=100&height=100 with the same parameter as the original request.
2.  or Visit http://localhost:3000/api/processed/example-00-00.jpg and replace `example...`jpg` with the processed picture

### To read the access log:
1. Open `./logs` from your file explorer
2. read the `accessLog.log`
---

## Built With
- TypeScript
- Node JS
- Express JS
- Jasmine -Unit Testing
- Handlebars - Templating Engine module
- Sharp - Image Processing module
---

## Contributors
- Udacity "license-free stock images" <https://review.udacity.com/>
- Mohammed Ahmed Morsi "API" <stormmaker_cf@hotmail.com>
---

## CopyRights
- The Images was downloaded from Udacity as "license-free stock images" <https://www.clipartmax.com/middle/m2i8i8A0K9A0H7b1_navbar-toggle-icon-menu-hamburger-png-white/>