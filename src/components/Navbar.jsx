import { Link } from 'react-router-dom'
import './Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState } from 'react'
const NavBar = () => {
	const [showNav, setShowNav] = useState(false)

	return (
		<nav className={`navbar__container ${showNav && 'showNav'}`}>
			<div className={`navbar ${showNav && 'showNav'}`}>
				<ul className={`navbar__list ${showNav && 'showNav'}`}>
					<li className="navbar__item">
						<Link onClick={() => setShowNav(false)} to="/">
							Home
						</Link>
					</li>
					<li className="navbar__item">
						<Link onClick={() => setShowNav(false)} to="/projects">
							Projects
						</Link>
					</li>
				</ul>
			</div>
			<div onClick={() => setShowNav((prev) => !prev)} className="hamburger">
				<ReorderIcon />
			</div>
		</nav>
	)
}

export default NavBar
