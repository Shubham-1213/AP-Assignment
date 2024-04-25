import Navbar  from "../components/Navbar"; 
import DoctorInfo from  "../components/DoctorInfo";
import About from "../components/About";
import Specialize from "../components/Specialize";
import Concerns from "../components/Concerns";
import Experience from "../components/Experience";
import Reviews from "../components/Reviews";
import "../components/view-page.css";
import Appointment from "../components/Appointment";

export default function ViewProfile() {
    return (
        <div>
            <Navbar />
            <DoctorInfo />  
            <div className="main-container-view">
                <div className="left">   
                    <div className="about">
                    <About />
                    </div>
                    <div className="specialize-container">
                    <Specialize/>
                    </div>
                    <div className="concerns">
                    <Concerns />
                    </div>
                    <div className="experience">
                    <Experience/>
                    </div>
                    <div className="reviews-container">
                    <Reviews/>
                    </div>
                </div>
                <div className="right">
                    <div className="appointment-container">  
                        <Appointment /> 
                    </div>
                </div>  
            </div>
        </div>
    )
}