import { Link } from 'react-router-dom'

const Navbar = () => {
    
    
   
    return (
            <nav  className="nav-wrapper green darken-3">
                <div className="container">
                    <Link className="brand-logo " to="/">News For You</Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/addpost">Add Post</Link></li>
                    </ul>
                </div>
            </nav>
    );
}
 
export default Navbar;