import searchIcon from '../assets/img/search-icon.png'
import userIcon from '../assets/img/user-icon.png'
import hearthIcon from '../assets/img/heart-icon.png'
import cartIcon from '../assets/img/cart-icon.png'

import slide1 from '../assets/img/slide-1.png'
import slide2 from '../assets/img/slide-2.png'


const navUserIcon = [searchIcon, userIcon, hearthIcon, cartIcon]

const navColectionList = [
    {
        type: 'Phòng Ăn',
        collection: [
            'Tô Chén Dĩa',
            'Thố và Khay',
            'Ca và Ly'
        ]
    },
    {
        type: 'Trà và Cafe',
        collection: [
            'Bộ Trà',
            'Bộ Cafe',
            'Phụ kiện trà',
            'phụ kiện cafe'
        ]
    },
    {
        type: 'Nồi sứ dưỡng sinh',
        collection: [
            'Luna',
            'Vesta',
            'Ấm và Chảo'
        ]
    },
    {
        type: 'Sứ dưỡng sinh',
        collection: [
            'Ly sứ dưỡng sinh',
            'Hộp sứ dưỡng sinh',
            'Đũa sứ'
        ]
    },
    {
        type: 'Phụ kiện bàn ăn',
        collection: [
            'Muỗng và Đũa',
            'Túi vải canvas',
            'Gác đũa sứ',
            'Phụ kiện khác'
        ]
    },
    {
        type: 'Sứ nghệ thuật',
        collection: [
            'Tượng Linh Vật',
            'Tượng trang trí',
            'Bình Hoa'
        ]
    }
]

const homeSlideData = [
    {
        title: 'Gốm Sứ Cao Cấp',
        img: slide1
    },
    {
        title: 'Ngược dòng lịch sử',
        img: slide2
    }
]

export { navUserIcon, navColectionList, homeSlideData }