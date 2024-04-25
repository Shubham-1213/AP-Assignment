import profile from "../images/profile.png";
import star from "../images/Star.png";
import experience from "../images/experience.png";
import capsule from "../images/capsule.png";
import comment from "../images/comment.png";
import { Link } from 'react-router-dom';
import "./card.css";

export default function Card() {
  return (
    <div className="outer-container-single-card">
      <div className="image-container">
        <img src={profile} alt="profile" />
        <div className="rating">
          4.5
          <img src={star} alt="star" />
        </div>
      </div>
      <div className="name">
        <p>Dr. Prerna Narang</p>
      </div>
      <div className="details">
        <div className="specaility">
          <img src={capsule} alt="cap" />
          <p>Male-Female Infertility</p>
        </div>
        <div className="experience-card">
          <img src={experience} alt="exp" />
          <p>7 years of Experience</p>
        </div>
        <div className="language-card">
          <img src={comment} alt="comment" />
          <p>Speaks: English, Hindi, Marathi</p>
        </div>
      </div>
      <div className="consultation-buttons-container">
        <div className="video-consultation">
          <p>Video Consultation</p>
          <p className="price">₹800</p>
        </div>
        <div className="video-consultation">
          <p>Chat Consultation</p>
          <p className="price">Free</p>
        </div>
      </div>
      <div className="big-buttons">
        <Link to="/view-profile">
          <button className="view-button">View Profile</button>
        </Link>
        <button className="book-button">Book a consulatation</button>
      </div>
    </div>
  );
}
