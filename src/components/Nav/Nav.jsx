/* eslint-disable react/prop-types */
import SearchBar from '../SearchBar/SearchBar.jsx'

const Nav = ({ onSearch }) => {
    return(
        <div>
        <SearchBar onSearch={onSearch} />
        </div>
    )
};

export default Nav;