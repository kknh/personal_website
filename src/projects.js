import groceryImg from './images/project_grocery.png'
import quizImg from './images/project_quiz.png'
import redditImg from './images/project_reddit.png'
const projects = {
	grocery: {
		id: '1',
		title: 'Grocery Todo',
		image: groceryImg,
		desc: 'Simple todo app with CRUD operations and alert messages',
		tech: 'ReactJS, HTML, CSS, Web Storage API',
		url: 'https://jade-tiramisu-5bc033.netlify.app',
		github: 'https://github.com/kknh/grocery_todo_app',
	},
	quiz: {
		id: '2',
		title: 'Quiz',
		image: quizImg,
		desc: 'Simple quiz application',
		tech: 'ReactJS, HTML, CSS, Axios',
		url: 'https://tranquil-sundae-df9c49.netlify.app',
		github: 'https://github.com/kknh/Quiz',
	},
	reddit: {
		id: '3',
		title: 'Reddit UI Clone',
		image: redditImg,
		desc: 'Responsive homepage with dropdown menu ',
		tech: 'ReactJS, HTML, CSS',
		url: 'https://courageous-pika-b6243c.netlify.app',
		github: 'https://github.com/kknh/Reddit_UI_clone',
	},
}

export default projects
