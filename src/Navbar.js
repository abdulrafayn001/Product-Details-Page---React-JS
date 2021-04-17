import logo from './amazon-logo.png'
import classes from './classes.module.css'
const Navbar = () => {
    return ( 
        <div className={classes.Navbar}>
            <img src={logo} className={classes.Logo} alt="logo" />
        </div>
    );
}
 
export default Navbar