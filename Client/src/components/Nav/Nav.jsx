/* eslint-disable react/prop-types */
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div className={style.navContainer}>

        <div className={style.navSearchBar}>
            <SearchBar onSearch={onSearch} />
        </div>
        

        <div className={style.navItems}>
            <Link to="/about" className={style.navItem1}>About</Link>
            <Link to="/home" className={style.navItem2} >Home</Link>
            <Link to="/favorites">Favs</Link>
        </div>

        
        </div>
    )
};

export default Nav;