import { GoPlus } from "react-icons/go";
import { useState } from "react";
import "../components/about.css";
import Fb from "../images/fb.png";
import Insta from "../images/insta.png";
import Twitter from "../images/twitter.png";
import Yt from "../images/youtube.png";


export default function About() {
  const [isReadMore, setIsReadMore] = useState(false);
  const text =
    "Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the prestigious Sanjivni Medical College. With over a decade of experience in women's health and a passion for providing compassionate care, I strive to ensure the well-being of my patients and contribute to advancing the field of gynecology.";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <div className="heading-about">
        <p>A little about me</p>
        <div className="follow-button">
          <p>Follow</p>
          <GoPlus />
        </div>
      </div>
      <div className="about-content">
        <p className="text">
          {isReadMore ? text.slice(0, 100) : text}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : "...show less"}
          </span>
        </p>
      </div>
      <hr/>
      <div className="language-spoken">
        <p>Language Spoken</p>
        <div className="button-container-language">
          <div className="language">English</div>
          <div className="language">Hindi</div>
          <div className="language">Telugu</div>
        </div>
      </div>
      <div className="social-media-buttons">
        <img src={Fb} alt="fb" />
        <img src={Insta} alt="insta" />
        <img src={Twitter} alt="twitter" />
        <img src={Yt} alt="yt" />
      </div>
      </>
  );
}
