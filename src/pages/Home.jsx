import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import './Home.css'
const Home = () => {
	return (
		<main className="home">
			<section className="about__container">
				<div className="about">
					<h1 className="about__title">Hi, My Name is Kunho</h1>
					<h2 className="about__desc">
						A software developer with a passion for learning and creating.
					</h2>
					<div className="about__footer">
						<a
							href="https://www.linkedin.com/in/kun-ho-kim-1377a377/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon />
						</a>
						<a href="mailto:kimkunho@live.com">
							<EmailIcon />
						</a>
						<a
							href="https://www.github.com/kknh"
							target="_blank"
							rel="noreferrer"
						>
							<GithubIcon />
						</a>
					</div>
				</div>
			</section>
			<section className="skills__container">
				<div className="skills">
					<h1 className="skills__title">Skills</h1>
					<h2 className="skills__category">Front-End</h2>
					<div className="skills__content">ReactJS, HTML, CSS</div>
					<h2 className="skills__category">Languages</h2>
					<div className="skills__content">Javascript</div>
				</div>
			</section>
		</main>
	)
}
export default Home
