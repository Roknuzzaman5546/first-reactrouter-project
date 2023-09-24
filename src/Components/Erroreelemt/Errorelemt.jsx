import { NavLink } from "react-router-dom";

const Errorelemt = () => {
    return (
        <div>
            <h2>Opps!!</h2>
            <h3>Its a big error 404 not found</h3>
            <br />
            <button><NavLink to="/">GO Home</NavLink></button>
        </div>
    );
};

export default Errorelemt;