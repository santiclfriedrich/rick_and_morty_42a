/* eslint-disable react/prop-types */
import Login from "../Login/Login";
import style from './landingPage.module.css'


const LandingPage = ({login}) => {
    return(
        <div className={style.landingContainer}>
            <Login login={login} />
        </div>
    )
}

export default LandingPage;