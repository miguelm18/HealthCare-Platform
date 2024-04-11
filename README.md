
Welcome to the HEALTHCARE-PLATFORM...
The following steps must be completed in order to have the web application working properly:


1. NAVIGATE TO YOUR TERMINAL 
    Type "git --version" to see if you have git installed 

2. Navigate To my repository and copy the clone url 
    Go to terminal and type "git clone https://github.com/miguelm18/HealthCare-Platform.git"
3. Add The Extensions From The Picture 

4. COPY AND PASTE THE FOLLOWING LINES ONTO THE TERMINAL TO ENTER Your Identity and be able to commit under your name 
Copy it exactly like that, it is one complete line 
replace "Your Name" with your actual name / replace your_email@example.com with your email/github email
do not include quotations

git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"


5. Activate the production prfile to run the app - to acutally run 
         export SPRING_PROFILES_ACTIVE=prod  copy and paste exactly to terminal 

     if you are testing stuff activate the dev profile - for testing 

         export SPRING_PROFILES_ACTIVE=prod

6. Navigate to src/main/java/com/examplehealthcare/healthcareplatform/HealthCarePlatformApplication.java
7.  Paste this to terminal ---> export DATABASE_USERNAME='root' export DATABASE_PASSWORD='Mamolin@18!dev'

8. CLick the play button on file ---> number 6.

9.Download the mySQL EXtension the one in the picture 
10. Navigate to it on your tool bar
   -At the very top click on settings
   - click import
   -choose the dump i provided to acess mysql
The application should have ran properly 

How to Activate Application.Properties Profile and Run Correctly

 export SPRING_PROFILES_ACTIVE=prod
 export DATABASE_USERNAME='root' export DATABASE_PASSWORD='Mamolin@18!dev'