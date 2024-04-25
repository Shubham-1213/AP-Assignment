import "../components/concerns.css";
import {useState} from "react";
import { GoPlus } from "react-icons/go";
export default function Concerns() {
    const [concerns, setConcerns] = useState(false);
    const allConcerns = ["Skin Treatment", "Pregnancy", "Period Doubts", "Endometrices", "Pelvic Pain", "Ovarian Cycle", "Hair Fall", "Scalp Problems", "Rashes", "Acne", "Pimples"];


    return (
        <>
            <div className="heading-concerns">
                <p>The Concerns I Treat</p>
            </div>
            <div className="actual-concerns">
                {concerns ? 
                <div className="concerns-container">
                    {allConcerns.map((concern, index) => {
                        return (
                            <div key={index} className="concern">
                                <p>{concern}</p>
                            </div>
                        )
                    })}
                </div> : 
                <div className="concerns-container">
                    {allConcerns.slice(0, 6).map((concern, index) => {
                        return (
                            <div key={index} className="concern">
                                <p>{concern}</p>
                            </div>
                        )
                    })}
                    <div onClick={() => setConcerns(!concerns)} className="see-more">
                        <GoPlus />
                        <p>{allConcerns.length - 6} More</p>
                    </div>
                </div>}
            </div>
        </>
    )
}