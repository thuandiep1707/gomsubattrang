
import './layout/introduce.js'
import './layout/productcollection.js'
import './layout/news.js'
import './layout/shops.js'
import './layout/contact.js'
import './layout/user.js'
import './layout/logre.js'
import './layout/checkout.js'
import { logo, search, user, heart, cart } from './vendors/data.js'
import './assets/styles/mainstyle.scss'

const app = document.getElementById('app')
app.appendChild(document.createElement("header"))
app.appendChild(document.createElement("main"))
app.appendChild(document.createElement("footer"))

let headerComponent = document.getElementsByTagName('header')[0]
let mainComponent = document.getElementsByTagName('main')[0]
let footerComponent = document.getElementsByTagName('footer')[0]


const collection = await fetch('https://660a67010f324a9a2884edd1.mockapi.io/gomsuColection')
                    .then(res => res.json())
                    .then(data => data[0])
delete collection['id']


headerComponent.innerHTML = `
<div class="header-around">
    <div class="img" >
        <img src="${logo}"  alt="gomsubattrang"/>
    </div>
    <ul class="nav1">
        <li data="/"> TRANG CHỦ </li>
        <li data="about"> GIỚI THIỆU </li>
        <li data="productcollection"> SẢN PHẨM </li>
        <li data="news"> TIN TỨC</li>
        <li data="shops"> CỬA HÀNG</li>
        <li data="contact"> LIÊN HỆ</li>
    </ul>
    <ul class="nav2">
        <li class="search"> <img src="${search}" alt="gomsubattrang"> </li>
        <li class="user"> <img src="${user}" alt="gomsubattrang"> </li>
        <li class="interest"> <img src="${heart}" alt="gomsubattrang"> </li>
        <li class="cart"> <img src="${cart}" alt="gomsubattrang"> </li>
    </ul>
</div>
`
document.querySelectorAll('.nav1 li').forEach(e=>{
    e.onclick = ()=>{
        history.pushState({}, '', e.getAttribute('data'))
    }
})




