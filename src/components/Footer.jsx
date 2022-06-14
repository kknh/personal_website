import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Footer = () => {
	return (
		<footer className="footer__container">
			<div className="footer">
				<div className="footer__icons">
					<InstagramIcon />
					<TwitterIcon />
					<FacebookIcon />
					<LinkedInIcon />
				</div>
				<div className="footer__text">
					© {new Date().getFullYear()} Kunho Kim
				</div>
			</div>
		</footer>
	)
}
export default Footer
