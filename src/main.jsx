import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'

import { Login, Register } from './layouts/AuthenticationPage'
import CartPage from './layouts/CartPage'
import HomePage from './layouts/HomePage'
import IntroductionPage from './layouts/IntroductionPage'
import ProductListPage from './layouts/ProductListPage'
import NewsPage from './layouts/NewPage'
import StoreAddressPage from './layouts/StoreAddressPage'
import ContactsPage from './layouts/ContactsPage'
import ProductsInterestPage from './layouts/ProductsInterestPage'
import ProductDetailPage from './layouts/ProductDetailPage'
import CheckoutPage from './layouts/CheckoutPage'
import Header from './components/Header'
import Footer from './components/Footer'

import './assets/styles/index.scss'
import './assets/styles/componentstyles.scss'
import './assets/styles/layoutstyles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dang-nhap' element={<Login />} />
      <Route path='/dang-ki' element={<Register />} />
      <Route path='/gio-hang' element={<CartPage />} />
      <Route path='/gioi-thieu' element={<IntroductionPage />} />
      <Route path='/san-pham/:collection' element={<ProductListPage />} />
      <Route path='/tin-tuc' element={<NewsPage />} />
      <Route path='/he-thong-cua-hang' element={<StoreAddressPage />} />
      <Route path='/lien-he' element={<ContactsPage />} />
      <Route path='/san-pham-yeu-thich' element={<ProductsInterestPage />} />
      <Route path='/chi-tiet-san-pham/:id' element={<ProductDetailPage />} />
      <Route path='/thanh-toan' element={<CheckoutPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
