import { useState } from "react";
import "../components/appointment.css";
import tick from "../images/green-tick.png";
import calander from "../images/calander.png";
import Carousel from "./Carousal";
export default function Appointment() {
    const items = [
        {
            icon:"Mon 10 Oct",
            copy:'10 Slots'
        },{
            icon:"Tue 11 Oct",
            copy:'4 Slots'
        },{
            icon:"Wed 12 Oct",
            copy:'5 Slots'
        },{
            icon:"Thu 13 Oct",
            copy:'8 Slots'
        },{
            icon:"Fri 14 Oct",
            copy:'2 Slots'
        },{
            icon:"Sat 15 Oct",
            copy:'1 Slot'
        }
    ];
    const [selectedMode, setSelectedMode] = useState(""); // Initialize selectedMode state

  const handleClick = (mode) => {
    setSelectedMode(mode); // Update selectedMode state based on the clicked mode
  };

  const [selectedTime, setSelectedTime] = useState(""); // Initialize selectedTime state

  const handleClickTime =(time) => {
    setSelectedTime(time); // Update selectedTime state based on the clicked time
  }
  return (
    <>
      <div className="appointment-fees-container">
        <div className="fees-heading">Appointment Fee</div>
        <div className="fees-amount">₹699.00</div>
      </div>
      <div className="mode-of-session-heading-container">
        <div className="mode-of-session-heading">
          Select your mode of session
        </div>
        <div className="empty-div-right"></div>
      </div>
      <div className="mode-selection-container">
        {/* Use onClick handler to set selected mode */}
        <div
          className={`details-container-mode ${
            selectedMode === "In-Clinic" ? "green-container" : "hidden"
          }`}
          onClick={() => handleClick("In-Clinic")}
        >
          <div className="mode">
            In-Clinic
            {selectedMode === "In-Clinic" && (
              <img src={tick} alt="tick" width={18} height={18} />
            )}
          </div>
          <div className="duration-of-app">45 Mins</div>
        </div>
        <div
          className={`details-container-mode ${
            selectedMode === "Video" ? "green-container" : "hidden"
          }`}
          onClick={() => handleClick("Video")}
        >
          <div className="mode">
            Video
            {selectedMode === "Video" && (
              <img src={tick} alt="tick" width={18} height={18} />
            )}
          </div>
          <div className="duration-of-app">45 Mins</div>
        </div>
        <div
          className={`details-container-mode ${
            selectedMode === "Chat" ? "green-container" : "hidden"
          }`}
          onClick={() => handleClick("Chat")}
        >
          <div className="mode">
            Chat
            {selectedMode === "Chat" && (
              <img src={tick} alt="tick" width={18} height={18} />
            )}
          </div>
          <div className="duration-of-app">10 Mins</div>
        </div>
      </div>
      <div className="mode-of-session-heading-container">
        <div className="mode-of-session-heading">Pick a time slot</div>
        <div className="empty-div-right-2"></div>
        <div><img src={calander} alt="calander" width={35} height={35}/></div>
      </div>
      <div className="carousal-time-slot">
        <Carousel items={items} />
      </div>
      <div className="Morning-time-container">
            <div className="slot-name">Morning</div>
            <div className="timings-container">
                <div className={`slot-time ${selectedTime == 900 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(900)}>09:00 AM</div>
                <div className={`slot-time ${selectedTime == 930 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(930)}>09:30 AM</div>
                <div className={`slot-time ${selectedTime == 1000 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(1000)}>10:00 AM</div>
                <div className={`slot-time ${selectedTime == 1015 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(1015)}>10:15 AM</div>
                <div className={`slot-time ${selectedTime == 1045 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(1045)}>10:45 AM</div>
                <div className={`slot-time ${selectedTime == 1100 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(1100)}>11:00 AM</div>
            </div>
      </div>
      <div className="Morning-time-container">
            <div className="slot-name">Evening</div>
            <div className="timings-container">
                <div className={`slot-time ${selectedTime == 400 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(400)}>04:00 PM</div>
                <div className={`slot-time ${selectedTime == 415 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(415)}>04:15 PM</div>
                <div className={`slot-time ${selectedTime == 430 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(430)}>04:30 PM</div>
                <div className={`slot-time ${selectedTime == 445 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(445)}>04:45 PM</div>
                <div className={`slot-time ${selectedTime == 515 ? "selectedTime" : "none"}`} onClick={() => handleClickTime(515)}>05:15 PM</div>
            </div>
      </div>
      <div className="make-appointment-button">
            Make an Appointment
      </div>
    </>
  );
}
