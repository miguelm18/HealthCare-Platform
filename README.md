# HealthCare Platform

Brief description of the project: This project serves as a health/patient mangement system. It allows for creation, reading, updating, and deleting of admins, doctors, patients, lab orders, prescriptions, and healthHistory (both patient and family). Its main features are the following:

-Appointment Setting
-Lab Order Processing 
-Prescrition Processing
-Health History Database Information

 The technologies to use for this are general extension packs on vsCode and are the Following

 -DataBase Client JDBC
 -MySql
 -Extension Pack for Java
 -Spring Boot Extension Pack - Necessary for database given @annotations on necessary
 -Git History & GitHub Codespaces

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

-Java 11 or newer 
-Maven
-Mysql

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository:**

```bash
git clone https://yourrepository.git ---> Miguels Repository 
cd your-project-folder

2. **Configure MySQL:**

Configure MySQL
Create a database and type the information below into a schema. Replace your_db, your_user, and your_password with your own choices to ensure security. Creating a user, and grant the necessary permissions on your MySQL server:


CREATE DATABASE your_db;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON your_db.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

Navigate to src/main/resources/ and update the application.properties file with your database connection details. Copy and paste this and put it into your application.properties file and replace user and password with your own from above.

spring.application.name=healthcare-platform

spring.datasource.url=jdbc:mysql://localhost:3306/newHDB
spring.datasource.username=user
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=create-drop (after you run the application change 'create-drop' to 'update')
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

once you run for the first time using create-drop, refresh the database

3. Run the application
    You can start the application using Maven:


Copy code on a terminal 
"mvn spring-boot:run" or navigate to src/main/java/HealthcarePlatformApplication.java and run

The application should now be running on http://localhost:8080.


Built With:

Spring Boot - The web framework used
Java
React
Maven - Dependency Management
MySQL - Database

VScode for the First Time 

4.  COPY AND PASTE THE FOLLOWING LINES ONTO THE TERMINAL TO ENTER Your Identity and be able to commit under your name
    Copy it exactly like that, it is one complete line
    replace "Your Name" with your actual name / replace your_email@example.com with your email/github email
    do not include quotations

            git config --global user.name "Your Name"
            git config --global user.email "your_email@example.com"



How to run the project's frontend with React

Setting up the project in React for the first time:

1. Install Node.js  
   Search for the Node.js download on google, and download the version that is compatible with your device

2. NAVIGATE TO YOUR TERMINAL  
   Type "git --version" to see if you have git installed no quotations

3. Navigate To my repository and copy the clone url  
   Go to terminal and type "git clone https://github.com/miguelm18/HealthCare-Platform.git" no quotations
   then type "git init" no quotations

4. Add The Extensions From The Picture

You should have the project downloaded onto your computer now

5. Navigate to the frontend folder of your project in your terminal  
   You should already be at the src directory  
   Type "cd frontend" to navigate into the frontend folder in the src directory

6. install the packages needed to make the front end work  
   You should still be at the frontend directory  
   Type "npm install react-router-dom" into the terminal  
   Type "npm install react-scripts" into the terminal  
   Type "npm install react-icons" into the terminal  

Starting the project in React after the first 5 steps are completed:

1. run the project
   Navigate to the frontend folder of your project in your terminal, type "cd frontend" if you aren't at the frontend folder yet  
   Type "npm start" into the terminal

2. Your project should appear in your web browser now  
   If you see an error related to web vital reporting, ignore it  

3. To log into the website, enter "user@gmail.com" as the email, and "password122333444455555!@#$%" as the password  
   This login information is used for testing  

How to stop the project:

1.  Make sure you have navigated to your frontend folder  
    Run the command "Ctrl + C" in your node terminal, not the powershell terminal

2.  The terminal should say "Terminate batch job (Y/N)?"  
    Type "Y" and press enter

3.  Close the project's tab in your web browser

