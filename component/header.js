import '../assets/styles/header.scss'
import { getCollection } from '../vendors/services.js'

const header = (header) => {
    const collection = getCollection()
    console.log(collection)

    header.innerHTML = `first`
}

const secondHeader = (header) => {
    header.innerHTML = `second`
}

const footer = (footer) => {
    footer.innerHTML = `footer`
}

export { header, secondHeader, footer }