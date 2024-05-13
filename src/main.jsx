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

import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/introduction' element={<IntroductionPage />} />
      <Route path='/product-list/:collection' element={<ProductListPage />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/store-address' element={<StoreAddressPage />} />
      <Route path='/contacts' element={<ContactsPage />} />
      <Route path='/products-interest' element={<ProductsInterestPage />} />
      <Route path='/product-detail/:id' element={<ProductDetailPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
