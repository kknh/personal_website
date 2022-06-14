import './Projects.css'
import Reddit from '../images/project_reddit.png'
import Quiz from '../images/project_quiz.png'
import Grocery from '../images/project_grocery.png'
const Projects = () => {
	return (
		<main className="projects__container">
			<div className="projects">
				<h1 className="projects__title">My Personal Projects</h1>
				<div className="projects__list">
					<div className="projects__item">
						<img src={Reddit} alt="reddit ui clone" />
						<h2>Reddit UI Clone</h2>
					</div>
					<div className="projects__item">
						<img src={Quiz} alt="quiz app" />
						<h2>Simple Quiz</h2>
					</div>
					<div className="projects__item">
						<img src={Grocery} alt="grocery todo app" />
						<h2>Grocery Todo</h2>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Projects
