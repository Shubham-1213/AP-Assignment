import "../components/reviews.css";
import review from "../images/review.png";
import Star from "../images/Star.png";

export default function Reviews() {
  return (
    <>
      <div className="heading-review-section">
        <p>Featured Reviews (102)</p>
      </div>
      <div className="all-reviews-container">
        <div className="list-of-reviews">
          <div className="single-review">
            <div className="profile-container">
              <img src={review} alt="review" width={40} height={40} />
              <div className="reviewer-name-container">
                <div className="reviewer-name">Alicent Hightower</div>
                <div className="reason">Consulted for Skin care</div>
              </div>
            </div>
            <div className="date-review">20 January 2023</div>
          </div>
          <div className="number-of-stars">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="review-content">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </div>
        </div>
        <div className="list-of-reviews">
          <div className="single-review">
            <div className="profile-container">
              <img src={review} alt="review" width={40} height={40} />
              <div className="reviewer-name-container">
                <div className="reviewer-name">Alicent Hightower</div>
                <div className="reason">Consulted for Skin care</div>
              </div>
            </div>
            <div className="date-review">20 January 2023</div>
          </div>
          <div className="number-of-stars">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="review-content">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </div>
        </div>
      </div>
    </>
  );
}
