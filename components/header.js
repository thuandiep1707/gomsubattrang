
import { logo, search, user, heart, cart, nav3Img } from '../vendors/data.js'
import { getCollection } from '../vendors/services.js'
import { routeNav1, routeNav3 } from '../vendors/routes.js'

function renderHeader(){
    
    let headerComponent = document.getElementsByTagName('header')[0]
    
    function innerHeader (){
        headerComponent.innerHTML = `
            <div class="header-around">
                <div class="img" >
                    <img src="${logo}"  alt="gomsubattrang"/>
                </div>
                <ul class="nav1">
                    <li data="/"> TRANG CHỦ </li>
                    <li data="about"> GIỚI THIỆU </li>
                    <li data="productcollection" class="products"> SẢN PHẨM </li>
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
            </div>`
        routeNav1()
    }

    function removeAccents(str) {
        return str.normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D')
                  .replaceAll(' ', '');
    }

    async function innerAndCheckEventNav3 (){
        let collection = await getCollection()
        let nav3 = ''
        for (let i in collection) {
            let nav3Item = ''
            for (let j of collection[i].list) {
                nav3Item += `<li data="${removeAccents(j)}" class="item-list pointer">${j}</li>`
            }
        nav3 += `
            <ul class="nav3_list">
                <li data="${removeAccents(collection[i].name)}" class="name-list pointer">${collection[i].name}</li>
                ${nav3Item}
            </ul>
         `
        }
        function checkMouseOver(){
         headerComponent.querySelector('.products').addEventListener('mouseover', ()=>{
           if (document.querySelector('.nav3') === null){
             let headerAround = headerComponent.querySelector('.header-around')
             headerAround.innerHTML += `
               <div class="nav3 nav3-start">
                 <div class="nav3__around">
                 ${nav3}
                 <div class="nav3__img">
                 <img src="${nav3Img}" alt="gomsubattrang">
                 </div>
                 </div>
               </div>
             `
             routeNav3()
             headerComponent.querySelector('.products').style.color='#cb7104'
             checkMouseOut()
           }
         }, false)
        }

        function checkMouseOut(){
         document.querySelector('.nav3').addEventListener('mouseleave', ()=>{
           if (document.querySelector('.nav3')){
             let headerAround = headerComponent.querySelector('.header-around')
             headerAround.querySelector('.nav3').classList.replace('nav3-start', 'nav3-end')
             setTimeout(() => {
               headerAround.removeChild(headerAround.querySelector('.nav3'))
               headerComponent.querySelector('.products').style.color='black'
             }, 500);
             checkMouseOver()
             routeNav1()
           }
         }, false)
        }
        checkMouseOver()
    }

    innerHeader()
    innerAndCheckEventNav3()
}

export default renderHeader;