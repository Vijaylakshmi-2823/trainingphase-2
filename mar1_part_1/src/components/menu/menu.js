import { Link } from 'react-router-dom';

const Menu =() => {
    return(
        <div>
            <p>WELcome to menu</p><br/>
            <Link to="/first">First</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/second">second</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third">third</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/calc">calc</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login">login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    );
}
export default Menu;