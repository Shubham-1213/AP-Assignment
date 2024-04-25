import tick from "../images/tick.png";
import Star from "../images/Star.png";
import "./doctorinfo.css";
import profile_2 from "../images/view_profile_image.png";
import bg_image from "../images/bg_image.png";

export default function DoctorInfo() {
  return (
    <div className="outer-container-about">
      <div className="main-container">
        <div className="bg-image">
          <img src={bg_image}  />
        </div>
        <div className="content-container">
          <div className="profile-photo">
            <img src={profile_2} alt="profile" />
          </div>
          <div className="name-info">
            <div className="name-with-tick">
              <p>Dr. Bruce Wills</p>
              <img src={tick} alt="tick" />
            </div>
            <div className="profession">
              <p>Gynacologist</p>
            </div>

            <div className="rating-doctor">
              <p>4.2</p>
              <div className="star">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
            </div>
          </div>
          <div className="stats-container">
            <div className="single-entry">
              <p className="heading">Followers</p>
              <p className="data">850</p>
            </div>
            <div className="single-entry">
              <p className="heading">Following</p>
              <p className="data">18K</p>
            </div>
            <div className="single-entry">
              <p className="heading">Posts</p>
              <p className="data">250</p>
            </div>
          </div>
          <div className="button-container">
              <button className="appointment-button">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
