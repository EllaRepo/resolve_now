# ResolveNow ALX

<a href="https://resolvenowlandingpage.carrd.co/">
    <img src="https://i.imgur.com/Sjp5Whx.png" alt="resolvenow" title="Resolvenow">
</a>

[ResolveNow](https://resolvenowlandingpage.carrd.co/) is a web application system of a complaint registration and management where users signup and report their complaints on public infrastructures. Users also can follow the status of their complaint.


## Table of content

- [The Story](#the-story)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Features](#features)
    - [User SignUp](#user-signup)
    - [User Login](#user-login)
    - [Report Complaint](#register-complaint)
    - [Followup Complaint status](#followup-complaints)
- [Built With](#built-with)
- [Future](#future)
- [Authors](#authors)
    - [Eliab Erango](#eliab-erango)
- [Acknowledgments](#acknowledgements)

## The Story

Have you ever encountered damages to public infrastructure, but didn't know who to report it to? Well, I have. In my community, there was no centralized system in place to report such incidents, and it was frustrating to see things getting worse before they were fixed. This is what inspired me to build a web application that would solve this problem.

As a ALX School student, I decided to create a complaint registration and management system as my Portfolio Project. The system allows users to sign up and post any complaint they encounter in public infrastructures. The timeline for this project was two months, and it was an excellent opportunity for me to develop my full-stack web development skills.

I am excited to share this project with you. Thank you for taking the time to read about my inspiration and the project's purpose.

Front End
* React components handling routing
* Axios API calls to manipulate database

Django REST API
* GET, POST, PUT requests handled
* CRUD manipulation through REST API

Relational Database
* Handled with Django ORM (PostgreSQL)
* Model system with base model handling identification
*
* One to Many relationship for users and complaint

Server / Deployment
* Nginx / Gunicorn

## Getting Started

Access it on [resolvenow.onrender.com](https://resolvenow.onrender.com/) and create an account now!
* Must register and create account to use Resolvenow

## Screenshots

<img width=50% src="https://i.imgur.com/yVZ2yo7.png">

<img width=50% src="https://i.imgur.com/UVJKebf.png">

<img width=50% src="https://i.imgur.com/NddEZG1.png">

## Features

Resolvenow has features that can be found through navigation bar menu.

These features will be explored below!

### **User SignUp**

The user signup page is where new users can quickly and easily create an account. Resolvenow handles user authorization through the django JWT token. Fill out the required information, such as your name, email address, and password, and click the signup button to create your account. Once registered, you will gain access to all the features and benefits available to our valued users.

<img width=50% src="https://i.imgur.com/RIVOtjt.jpg">

### **User Login**

This job search feature used the Github Jobs API to search for a job based on user input parameters. The heart button on the left side will save the job as a job interested where pressed and delete it from jobs interested if pressed again.
The heart button required a lot of work with React states and figuring out the best way to have this dynamically populated list have individual reactions to user actions.
The message icon on the right side of the listing is a link which will open a new window of the url to the actual job listing.

<img width=75% src="https://i.imgur.com/6Vi9yp6.jpg?1">

### **Register Complaint**

The complaint submission section allows users to easily voice their concerns and report any issues they may have encountered. Fill out the provided form with your complaint details and submit it for review by our team. We strive to address all complaints promptly and provide a satisfactory resolution.

<img width=75% src="https://i.imgur.com/HLaMPfv.jpg">

### **Followup complaints**

The complaint status section in your user dashboard allows you to conveniently track and follow up on the progress of your submitted complaints. Stay informed about the status of each complaint, whether it is under review, in progress, or resolved. This section provides transparency and ensures that you are always updated on the resolution process.

<img width=75% src="https://i.imgur.com/DaI5PX5.jpg">


## Built With
* [Django](https://docs.djangoproject.com/en/4.2/) - The Web Development Framework
* [Python](http://www.python.org) - The Backend Language
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The Frontend Language
* [PostgreSQL](https://www.postgresql.org/docs/) - Relational Database Management System
* [React](https://reactjs.org) - Javascript Library for frontend UI


## Future

In order to enhance the functionality and user experience of the complaint registration and management system, the following features can be considered for future development:

1. Snapshot Attachment: Integrate a feature that allows users to add a snapshot of the complaint while registering it. This will provide visual evidence and help authorities to better understand the nature of the complaint.

2. Exact Address using Google Maps: Implement a feature that utilizes Google Maps to automatically fetch and display the exact address of the complaint location. This will ensure accurate location tracking and help streamline the complaint resolution process.
 
3. Inspector Dashboard: Create a dedicated dashboard for inspectors to easily access and update the status of registered complaints. The dashboard should provide a comprehensive overview of all pending and resolved complaints, allowing inspectors to efficiently manage their workload.

4. Upload Completed Complaint Proof Photo: Enable users to upload a photo as proof once a complaint has been resolved. This will serve as evidence of successful resolution and provide transparency to both users and authorities.

5. Real-time Notifications: Implement a notification system that sends real-time updates to users regarding the progress of their registered complaints. This will keep users informed about any actions taken, ensuring transparency and building trust in the system.

6. Data Analytics and Reporting: Incorporate data analytics capabilities to generate insightful reports on complaint trends, response times, and overall system performance. This will help identify areas for improvement and enable data-driven decision-making.

By implementing these future enhancements, the complaint registration and management system will become more robust, user-friendly, and efficient in addressing citizen grievances while providing authorities with valuable insights for continuous improvement.

If you have any suggestions or would like to contribute to Resolvenow, please contact either of us.

## Authors
### **Eliab Erango**
[Eliaberango](https://github.com/EllaRepo/)

Eliab is a backend software engineer, working on the system design, database, and REST API for the most part with some fingerprints in the frontend in order to better understand and integrate the backend into the whole picture.
    
If you would like to contact [me](https://eliaberango.github.io/) about any opportunities, feel free to reach out!


## Acknowledgements
* [ALX School](https://intranet.alxswe.com/) (SWE Student)
