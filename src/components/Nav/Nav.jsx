/* eslint-disable react/prop-types */
import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div className='nav-container'>

        <div>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
        </div>

        <SearchBar onSearch={onSearch} />
        </div>
    )
};

export default Nav;