import Header from '../Layout/Header'; // Import the Header component
import Sidebar from '../Layout/Sidebar'; // Import the Sidebar component
import '../Style/MainDashboard.css'; // Import the CSS file for MainDashboard

function Home() {
    return (
        <div className="main-dashboard">
            {/* Render the header component */}
            <Header />
            {/* Render the sidebar component */}
            <Sidebar />
            <h1>Home</h1>
            <div className="contents">
                <p>Welcome to the Health Care Platform! Before the pandemic hit in 2020, it was estimated that the number of people in Africa living in poverty
                    on less than $1.90 a day was over 648 million. The pandemic has increased those numbers by the
                    millions. The global health crisis shines a light on the health crisis already happening in poor and rural
                    communities of Africa and around the world. The lack of access to medical services and care has
                    reached unprecedented levels.</p>
                <br />
                <p>The Health Care Platform helps medical professionals manage their patient's data. On the left, there is a side bar that allows the user
                    to navigate through the Health Care Platform's pages. "Dashboard" takes the user to an interface where they can view appointment 
                    notifications and search for patients. Through the search engine, patient data can be viewed and changed. To change an image, you must 
                    upload it to imgur.com, copy the image's direct link, and paste it into a data change form. The forms are located underneath a patient's data. To 
                    change a video, upload the video to youtube, copy the video's embedded url, then paste it into a data change form. "Add/Delete Patient" 
                    allows the user to create a new patient profile with empty data, or completely delete an existing patient. "Home" takes the 
                    user back to the homepage.
                </p>
            </div>
        </div>
    );
}

export default Home;