import './Project.css'
import projects from '../projects'
import { useParams, Link } from 'react-router-dom'
import Language from '@material-ui/icons/Language'
import GithubIcon from '@material-ui/icons/GitHub'
import ArrowBack from '@material-ui/icons/ArrowBack'

const Project = () => {
	const { project } = useParams()
	const { title, image, desc, tech, url, github } = projects[project]
	return (
		<main className="project__container">
			<div className="project__wrapper">
				<div className="project">
					<div className="project__image">
						<div className="back">
							<Link to="/projects">
								<ArrowBack />
								Projects
							</Link>
						</div>
						<img src={image} alt={title} />
					</div>
					<div className="project__description">
						<h2>
							<span>Project: </span> {title}
						</h2>
						<p>
							<span>Description: </span> {desc}
						</p>
						<p>
							<span>Technology: </span> {tech}
						</p>
						<div className="project__links">
							<span>Live Demo: </span>{' '}
							<a href={url} target="_blank" rel="noreferrer">
								<Language style={{ fontSize: 30, color: '#0092cc' }} />
							</a>
						</div>
						<div className="project__links">
							{' '}
							<span>Source Code: </span>
							<a href={github} target="_blank" rel="noreferrer">
								<GithubIcon style={{ fontSize: 27, color: '#0092cc' }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Project
