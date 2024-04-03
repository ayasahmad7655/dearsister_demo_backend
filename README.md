# DearSister

<div id="top"></div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<!-- PROJECT LOGO -->
<div align="center">
<br>
<br>
<br>

![landing](https://github.com/ayasahmad7655/dearsister_demo_frontend/blob/da833a73646d4e6bae65da563d31e5ddfacd3ce2/src/assests/About_US/Screenshot%202024-04-03%20043940.png)
![stats](https://github.com/ayasahmad7655/dearsister_demo_frontend/blob/da833a73646d4e6bae65da563d31e5ddfacd3ce2/src/assests/About_US/Screenshot%202024-04-03%20140849.png)
![quizes](https://github.com/ayasahmad7655/dearsister_demo_frontend/blob/da833a73646d4e6bae65da563d31e5ddfacd3ce2/src/assests/About_US/Screenshot%202024-04-03%20044420.png)
![QuiZLive](https://github.com/ayasahmad7655/dearsister_demo_frontend/blob/da833a73646d4e6bae65da563d31e5ddfacd3ce2/src/assests/About_US/Screenshot%202024-04-03%20140815.png)

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#users">Users</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#ports-and-endpoints">Ports and EndPoints</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MERN Stack Web App for YouTuber's Channe (500k+ Subscribers):


### Features

- Login / Sign-up
- JWT with Cookie-based Authentication
- Interactive Quiz Stats Dashboard: Tracks All Points, Highest Scores, Attempts (Attempted & Not Attempted)
- Interactive Live Quiz with Timer, Scoring, and Updates
- Comprehensive Quiz Attempt Management: Tracks Attempts, Retrieves Specific Quizzes, Stores Scores, and Marks Completion


### Built With

- React
- React Router
- styled-components
- Node.js
- Express
- MongoDB

### Hosted 
  Client-Side:- https://dearsister-demo-frontend.vercel.app/
  Server-Side :- https://dearsister-demo-backend.onrender.com/

#### Validation

- **Email validation**: as per **RFC2822** standards.
- **Password validation**:
  - The password must be more than **6** characters.

<p align="right">(<a href="#top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## Backend_Architect
Dearsister.in leverages a robust Model-View-Controller (MVC) backend architecture for efficient data management, business logic execution, and dynamic content generation.

![Architecture](https://github.com/ayasahmad7655/dearsister_demo_frontend/blob/da833a73646d4e6bae65da563d31e5ddfacd3ce2/src/assests/About_US/Backend_architect.jpg)


## To Contribute

This project require some perquisites and dependencies to be installed, you can find the instructions below

This project require some perquisites and dependencies to be installed, you can view it online using this . or you can find the instructions below:

> To get a local copy, follow these simple steps :

### Installation

#### installing Locally

1. Clone the repo
   ```sh
     git clone https://github.com/ayasahmad7655/dearsister_demo_backend
   ```
2. go to project folder

   ```sh
   cd client
   ```

3. install dependencies

   ```bash
   npm run install
   ```

4. Environmental Variables Set up

   - Here are the environmental variables that needs to be set in the `.env` file in the **server directory**.
   - These are the default setting that I used for development, but you can change it to what works for you.

   ```
     PORT=8000
     MONGO_URL=<Your mongodb url>
     ALLOWED_CORS_ORIGIN1=<frontend url>
     JWT_SECRET=<any secret value of your choice>
   ```

5. Run development server

   ```sh
   npm start
   ```

---
### Video Showing How to use full WebApplication
[![Watch the video](https://[EXTERNAL_PLATFORM_THUMBNAIL_URL])](https://drive.google.com/file/d/12f1fzRPoYzjTh3wtSMu-W2lY9Ug6DUog/view?usp=sharing)


### Ports and EndPoints

#### Ports

- FrontEnd Development Server runs on port `3000`
- BackEnd Development Server runs on port `8000`

#### API endpoints

**Main URL**: [http://localhost:8000](http://localhost:8000/)

- **Auth**

  - Register User: [http://localhost:8000/signup](http://localhost:8000/signup) [POST]
  - Login  User: [http://localhost:8000/login](http://localhost:5000/api/v1/auth/login) [POST]
  

- **Users**

  - Get to Dasshboard: [http://localhost:8000/user]() [POST]
  - Get The Quiz Data: [http://localhost:8000/quiz]() [POST]
  - Getting the Qustion or Quiz : [http://localhost:8000/livequiz/:index]() [GET]
  - Update the Number : [http://localhost:8000/sumbitanswer]() [PATCH]
  - Quiz Added to Storage:       [http://localhost:8000/addquestion]() [POST]
  - Quiz Added to Storage: [http://localhost:8000/driveupload]() [POST]
<!-- [![Run in Postman](https://run.pstmn.io/button.svg)] -->
