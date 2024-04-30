
import { logo, search, user, heart, cart, nav3Img, xIcon, searchList, collection } from '../vendors/data.js'
import { } from '../vendors/services.js'
import { routeNav } from '../vendors/routes.js'

import '../assets/styles/header.scss'

function Header(){
    
    let headerComponent = document.querySelector('header')
    
    function renderHeader (){
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
                    <li class="search-icon"> <img src="${search}" alt="gomsubattrang"> </li>
                    <li class="user-icon"> <img src="${user}" alt="gomsubattrang"> </li>
                    <li class="interest-icon"> <img src="${heart}" alt="gomsubattrang"> </li>
                    <li class="cart-icon"> <img src="${cart}" alt="gomsubattrang"> </li>
                </ul>
            </div>`
        routeNav(document.querySelectorAll('.nav1 li'))
    }

    function removeAccents(str) {
        return str.normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D')
                  .replaceAll(' ', '');
    }

    function renderNav3 (){
        let nav3 = ''
        for (let i in collection) {
            let nav3Item = ''
            console.log(collection[i])
            for (let j of collection[i].list) {
                nav3Item += `<li data="${removeAccents(j)}" class="item-list pointer">${j}</li>`
            }
        nav3 += `
            <ul class="nav3_list">
                <li data="${removeAccents(collection[i].name)}" class="name-list pointer">${collection[i].name} onlick()</li>
                ${nav3Item}
            </ul>
         `
        }
        function checkMouseOver(){
         headerComponent.querySelector('.products').addEventListener('mouseover', ()=>{
          //  if (document.querySelector('.nav3') === null){
             let body = document.querySelector('body')
             body.innerHTML += `
               <div class="nav3 nav3-start">
                 <div class="nav3__around">
                 ${nav3}
                 <div class="nav3__img">
                 <img src="${nav3Img}" alt="gomsubattrang">
                 </div>
                 </div>
               </div>
             `
             routeNav(document.querySelectorAll('.nav3_list li'))
             document.querySelector('.products').style.color="#cb7104"
             checkMouseOut()
          //  }
         }, false)
        }

        function checkMouseOut(){
         document.querySelector('.nav3').addEventListener('mouseleave', ()=>{
           clearTimeout(removeNav3)
           if (document.querySelector('.nav3')){
             document.querySelector('.nav3').classList.replace('nav3-start', 'nav3-end')
             var removeNav3 =setTimeout(() => {
               document.querySelector('body').removeChild(document.querySelector('.nav3'))
               document.querySelector('.products').style.color='black'
             }, 500);
            //  removeNav3()
             checkMouseOver()
             routeNav(document.querySelectorAll('.nav1 li'))
           }
         }, false)
        }
        checkMouseOver()
    }

    function renderSearchComponent(){
      let headerAround = headerComponent.querySelector('.header-around')
      headerAround.querySelector('.search-icon').addEventListener('click',()=>{
      document.getElementsByTagName('main')[0].innerHTML += `
      <div class="search-component">
        <div class= "search">
          <div class="x-icon" >
            <img src="${xIcon}" alt="gomsubattrang">
          </div>
          <form class="search_form">
            <input type="text" id="input-search" name="input-search">
            <label for="input-search">
              <img src="${search}" alt="gomsubattrang">
            </label>
          </form>
          <div class="search_list">
            <h3>Sản phẩm được tìm nhiều nhất</h3>
            <ul class="list-items">
              ${innerSearchListItems(searchList)}
            </ul>
          </div>
        </div>
      </div>
      `
      document.onkeyup = (e)=>{
        e.key == 'Escape' && document.querySelector('.search-component').remove()
      }
      console.log(document.querySelector('.x-icon'))
      document.querySelector('.x-icon').addEventListener('click', ()=>{
        document.querySelector('.search-component').remove()
      })
      function innerSearchListItems(data){
        let searchListItem = ''  
        for (let i in data) {
          searchListItem += `
            <li data="${removeAccents(data[i].name)}">
              <div class="item-img">
                <img src="${data[i].img}" alt="gomsubattrang" class="img">
              </div>
              <div class="item-des">
                <p class="name">${data[i].name}</p>
                <p class="price">${data[i].price.toLocaleString('it-IT', {style : "currency", currency : "vnd"})}</p>
              </div>
            </li>`
        }
        
        return searchListItem
      }
      routeNav(document.querySelectorAll('.list-items li'))
    })
    }
    function renderCartComponent(){
      return``
    }
    renderHeader()
    renderNav3()
    renderSearchComponent()
    renderCartComponent()
}

export default Header;