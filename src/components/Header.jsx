
import { useState } from "react";
import { Link } from "react-router-dom";

import NavCollection from "./NavColection";
import { navUserIcon } from "../services/data";
import logo from '../assets/img/logo.png'


const Header = ()=>{
    const [stateNavCol, setStateNavCol] = useState(false)

    const hideNavCol = ()=>{
        if (!stateNavCol) return
        setTimeout(()=>{
            setStateNavCol(false)
        },200)
    }

    const appearNavCol = ()=>{
        if (!stateNavCol) {setStateNavCol(true)}
    }

    return(
        <header className="absolute w-[100%] flex justify-center bg-[#ffffffae]">
            <div className="flex justify-between items-center h-[84px] w-[1180px]">
                <div className="w-[122px]">
                    <img src={logo} alt="" className="w-[122px]"/>
                </div>
                <ul className="nav-page flex justify-between items-center w-[631px]">
                    <li className="hover-text-brown">
                        <Link to='/' className="text-[15px] font-semibold text-[#212529] link uppercase ">trang chủ</Link>
                    </li>
                    <li className="hover-text-brown">
                        <Link to='/gioi-thieu' className="text-[15px] font-semibold text-[#212529] link uppercase ">giới thiệu</Link>
                    </li>
                    <li onMouseOver={()=>appearNavCol()} onMouseLeave={()=>hideNavCol()} className="hover-text-brown animationState">
                        <Link to='/san-pham/tat-ca' className="flex items-center gap-[5px] text-[15px] font-semibold text-[#212529] uppercase link">sản phẩm <span className="selection-icon"></span> </Link>
                        {stateNavCol && <NavCollection/>}
                    </li>
                    <li className="hover-text-brown">
                        <Link to='/tin-tuc' className="text-[15px] font-semibold text-[#212529] uppercase link">tin tức</Link>
                    </li>
                    <li className="hover-text-brown">
                        <Link to='/he-thong-cua-hang' className="text-[15px] font-semibold text-[#212529] uppercase link">Cửa Hàng</Link>
                    </li>
                    <li className="hover-text-brown">
                        <Link to='/lien-he' className="text-[15px] font-semibold text-[#212529] uppercase link">liên hệ</Link>
                    </li>
                </ul>
                <ul className="nav-user flex justify-between items-center w-[132px] mx-[15px]">
                    <li className="w-[18px] h-[18px]"><img src={navUserIcon[0]} alt=''/></li>
                    <li className="w-[18px] h-[18px]"><img src={navUserIcon[1]} alt=''/></li>
                    <li className="w-[18px] h-[18px]"><img src={navUserIcon[2]} alt=''/></li>
                    <li className="w-[18px] h-[18px]"><img src={navUserIcon[3]} alt=''/></li>
                </ul>
            </div>   
        </header>
    )
}


export default Header;