import "../components/experience.css";
import work from "../images/work.png";
export default function Experience() {
  return (
    <>
      <div className="heading-experience">
        <p>My Work Experience</p>
      </div>
      <div className="total-experience">
        <p>I have been in practice for : 7+ Years</p>
      </div>
      <div className="empty-div">
      </div>
      <div className="work-experience-conatiner">
        <div className="work-experience">
          <img src={work} alt="work" width={50} height={50}/>
          <div className="institution-name">
            <div>Midtown Medical Clinic</div>
            <div className="designation">Senior doctor</div>
          </div>
          <div className="duration">
            <div>2016-present</div>
          </div>
        </div>
        <div className="work-experience">
          <img src={work} alt="work" width={50} height={50}/>
          <div className="institution-name">
            <div>Midtown Medical Clinic</div>
            <div className="designation">Senior doctor</div>
          </div>
          <div className="duration">
            <div>2016-present</div>
          </div>
        </div>
      </div>
    </>
  );
}
