import { add } from './functions.js'

const text = `From the functions.js lib, 1 + 2 = ${String(add(1,2))}`
document.getElementById('app').innerHTML = text

export {text as output}
