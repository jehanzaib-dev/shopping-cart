import {Link} from 'react-router-dom';
import './navbarStyles.css'


export default function Navbar(){

	return(
		<div className='navbar-cntnr'>
		<Link to={'/'}>
		<h2>Shopping Cart</h2>
		</Link>
		<ul>
		<li><Link to={'/'}>Home</Link></li>
		<li><Link to={'/cart'}>Cart</Link></li>
		</ul>

		</div>
		);
}