import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Cards from "../components/Cards"
import { Link } from 'react-router-dom';


export default function FindDoctor() {
    return (
        <div className="outer-container-find-doctor">
            <Navbar />
            <SearchBar />
            <Filter />
            <Cards />
        </div>
    )
}