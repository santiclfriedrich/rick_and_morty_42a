/* eslint-disable react/prop-types */
import Login from "../Login/Login";

const LandingPage = ({login}) => {
    return(
        <div>
            <Login login={login} />
        </div>
    )
}

export default LandingPage;