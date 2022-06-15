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
					<a
						href="https://www.instagram.com/kunho_sa/"
						target="_blank"
						rel="noreferrer"
					>
						<InstagramIcon />
					</a>
					<a
						href="https://twitter.com/kunho9988"
						target="_blank"
						rel="noreferrer"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://www.facebook.com/skyhs/"
						target="_blank"
						rel="noreferrer"
					>
						<FacebookIcon />
					</a>
					<a
						href="https://www.linkedin.com/in/kun-ho-kim-1377a377/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedInIcon />
					</a>
				</div>
				<div className="footer__text">
					© {new Date().getFullYear()} Kunho Kim
				</div>
			</div>
		</footer>
	)
}
export default Footer
