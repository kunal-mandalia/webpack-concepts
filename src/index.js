import lodash from 'lodash'
import css from './styles.css'

function component() {
	console.log(css)
	var element = document.createElement('h1')
	// Lodash is required to run the line below
	element.innerHTML = _.join(['Welcome to the', 'demo'], ' ')
	element.classList.add(css.subtitle)
	return element
}

document.body.appendChild(component())

