import "../components/specialize.css";
import Immunity from "../images/Immunity.png";
import Hair from "../images/Hair.png";
import Skincare from "../images/Skincare.png";
import Women from "../images/Women.png";

export default function Specialize() {
  return (
    <>
      <div className="heading-specialize">
        <p>I Specialize In</p>
      </div>
      <div className="specialized-images-container">
        <div className="single-specialization">
          <img src={Women} alt="Women" />
          <p>Women Health</p>
        </div>
        <div className="single-specialization">
          <img src={Skincare} alt="Skincare" />
          <p>Skin Care</p>
        </div>
        <div className="single-specialization">
          <img src={Immunity} alt="Immunity" />
          <p>Immunity</p>
        </div>

        <div className="single-specialization">
          <img src={Hair} alt="Hair" />
          <p>Hair Care</p>
        </div>
      </div>
    </>
  );
}
