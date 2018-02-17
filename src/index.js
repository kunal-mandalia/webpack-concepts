import _ from 'lodash'

function component() {
	var element = document.createElement('div')
	// Lodash is required to run the line below
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	return element
}

document.body.appendChild(component())

