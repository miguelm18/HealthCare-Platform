Welcome to the HEALTHCARE-PLATFORM...
The following steps must be completed in order to have the web application working properly:

Make sure you have the most up to date project
"git pull origin main" no quotations

1.  NAVIGATE TO YOUR TERMINAL
    Type "git --version" to see if you have git installed no quotations

2.  Navigate To my repository and copy the clone url
    Go to terminal and type "git clone https://github.com/miguelm18/HealthCare-Platform.git" no quotations
    then type "git init" no quotations
3.  Add The Extensions From The Picture

4.  COPY AND PASTE THE FOLLOWING LINES ONTO THE TERMINAL TO ENTER Your Identity and be able to commit under your name
    Copy it exactly like that, it is one complete line
    replace "Your Name" with your actual name / replace your_email@example.com with your email/github email
    do not include quotations

            git config --global user.name "Your Name"
            git config --global user.email "your_email@example.com"

5.  Activate the production prfile to run the app - to acutally run
    "export SPRING_PROFILES_ACTIVE=prod" copy and paste exactly to terminal no quotations

    if you are testing stuff activate the dev profile - for testing

         export SPRING_PROFILES_ACTIVE=prod

6.  Navigate to src/main/java/com/examplehealthcare/healthcareplatform/HealthCarePlatformApplication.java
7.  Paste this to terminal ---> export DATABASE_USERNAME='root' export DATABASE_PASSWORD='Mamolin@18!dev'

8.  CLick the play button on file ---> number 6.

9.Download the mySQL EXtension the one in the picture 10. Navigate to it on your tool bar
-At the very top click on settings

- click import
  -choose the dump i provided to acess mysql
  The application should have ran properly

How to Activate Application.Properties Profile and Run Correctly

export SPRING_PROFILES_ACTIVE=prod
export DATABASE_USERNAME='root' export DATABASE_PASSWORD='Mamolin@18!dev'

11. When You have coded something make sure to create a branch first or else stuff will mess up
    Commit to your own branch not origin main!

           To have the latest updated project Type this into your terminal
           "git pull origin main"

    I

How to run the project's frontend with React

Setting up the project in React for the first time:

1. NAVIGATE TO YOUR TERMINAL
   Type "git --version" to see if you have git installed no quotations

2. Navigate To my repository and copy the clone url
   Go to terminal and type "git clone https://github.com/miguelm18/HealthCare-Platform.git" no quotations
   then type "git init" no quotations

3. Add The Extensions From The Picture

You should have the project downloaded onto your computer now

4. Navigate to the frontend folder of your project in your terminal
   You should already be at the src directory
   Type "cd frontend" to navigate into the frontend folder in the src directory

5. install the packages needed to make the fronend work
   You should still be at the frontend directory
   Type "npm install react-router-dom" into the terminal

Starting the project in React after the first 5 steps are completed:

1. run the project
   Navigate to the frontend folder of your project in your terminal, type "cd frontend" if you aren't at the frontend folder yet
   Type "npm start" into the terminal

2. Your project should appear in your web browser now

How to stop the project:

1.  Make sure you have navigated to your frontend folder
    Run the command "Ctrl + C" in your node terminal, not the powershell terminal

2.  The terminal should say "Terminate batch job (Y/N)?"
    Type "Y" and press enter

3.  Close the project's tab in your web browser
