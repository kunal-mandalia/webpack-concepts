import lodash from 'lodash'
import css from './styles.css'
import dynamicImport from './dynamic-import.js'

function component() {
	const element = document.createElement('h1')
	// Lodash is required to run the line below
	element.innerHTML = _.join(['Dynamic runtime import:', JSON.stringify(dynamicImport)], ' ')
	element.classList.add(css.subtitle)
	return element
}

document.body.appendChild(component())
