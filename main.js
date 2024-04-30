
import Header from './components/header.js'
import './layout/introduce.js'
import './layout/productcollection.js'
import './layout/news.js'
import './layout/shops.js'
import './layout/contact.js'
import './layout/user.js'
import './layout/logre.js'
import './layout/checkout.js'
import './assets/styles/mainstyle.scss'

const app = document.getElementById('app')
app.appendChild(document.createElement("header"))
app.appendChild(document.createElement("main"))
app.appendChild(document.createElement("footer"))

Header()
