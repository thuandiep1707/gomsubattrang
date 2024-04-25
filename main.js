
import './layout/introduce.js'
import './layout/productcollection.js'
import './layout/news.js'
import './layout/shops.js'
import './layout/contact.js'
import './layout/user.js'
import './layout/logre.js'
import './layout/checkout.js'
import { header, footer } from './component/header.js'

import './assets/styles/mainstyle.scss'

const app = document.getElementById('app')
app.appendChild(document.createElement("header"))
app.appendChild(document.createElement("main"))
app.appendChild(document.createElement("footer"))

let headerComponent = document.getElementsByTagName('header')[0]
let mainComponent = document.getElementsByTagName('main')[0]
let footerComponent = document.getElementsByTagName('footer')[0]

header(headerComponent)
footer(footerComponent)


