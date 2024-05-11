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

Navigate to src/main/resources/ and update the application.properties file with your database connection details:

spring.datasource.url=jdbc:mysql://localhost:3306/your_db
spring.datasource.username=user
spring.datasource.password=password

Make Sure to add this in order to automatically recieve the schema on your platform in the application.properties file 

# Hibernate DDL auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto=create-drop


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


For FrontEnd navigate to Frontend folder and read the readme file 
