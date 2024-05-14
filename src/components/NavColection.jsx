
import { Link } from "react-router-dom"
import slugify from "slugify"

import { navColectionList } from "../services/data"
import navColImg from '../assets/img/nav3-img.png'

const NavCollection = ()=>{
    return(
        <div className='flex gap-[20px] items-start absolute top-[100px] left-[50%] translate-x-[-50%] bg-[#fff] w-[1180px] p-[20px] nav-col-before shadow-[0_3px_10px_rgb(0,0,0,0.2)] nav-colection'>
            <div className="flex flex-wrap flex-1">
                {
                    navColectionList.map((item, index)=>{
                        return <ul key={index} className="w-1/3 mb-[20px]">
                            <li className="mb-[10px] text-[#ca6f04] text-[16px]">
                                <Link to={`/san-pham/${slugify(item.type.replaceAll(' ','-').toLowerCase(), 'vi')}`}>
                                    {item.type}
                                </Link>
                            </li>
                            {
                                item.collection.map((item, index)=><li key={index} className="pb-[5px] text-[14px]">
                                    <Link to={`/san-pham/${slugify(item.replaceAll(' ','-').toLowerCase(), {locale: 'vi'})}`} className="hover:text-[#ca6f04]">
                                        {item}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    })
                }
            </div>
            <div>
                <img src={navColImg} alt="" className="w-[330px]"/>
            </div>
        </div>
    )
}

export default NavCollection