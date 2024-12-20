import {Link,useNavigate} from "react-router-dom";
import logo from '../assets/logo.png'
import Navbar from "./Navbar.jsx";
import {CgMenuLeft} from "react-icons/cg";
import {TbUserCircle} from "react-icons/tb";
import {RiShoppingBag4Line, RiUserLine} from "react-icons/ri";
import {useEffect, useState, useContext} from "react";
import {ShopContext} from "../context/ShopContext.jsx";


export const Header = () => {

    // const [token, setToken] = useState('dummytoken')
    // const navigate = useNavigate()
    const {navigate, token, setToken, getCartCount} = useContext(ShopContext)
    const cartCount = getCartCount();
    const [active, setActive] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu =() => {
        setMenuOpened((prev) => !prev)
    }

    useEffect(()=> {
        const handleScroll =() => {
            if(window.scrollY > 0){
                if(menuOpened){
                    setMenuOpened(false)
                }
            }
            setActive(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [menuOpened])
    
    return (
        <header className='fixed top-0 w-full left-0 right-0 z-50'>
            <div className={`${active ? 'bg-white py-2.5' : 'bg-primary py-3'} max-padd-container flexBetween border-b border-slate-900/10 rounded
            transition-all duration-300`}>
                {/*LOGO*/}
                <Link to={'/'} className='flex-1 flex items-center justify-start '>
                    <img src={logo} alt='logo' height={36} width={36} className='hidden sm:flex mr-2'/>
                    <h4 className='bold-24'>Bacala</h4>
                </Link>
                {/* Navbar */}
                <div className='flex-1 '>
                    <Navbar containerStyles={`${menuOpened ? 'flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl' : 'hidden xl:flex justify-center gap-x-8 xl:gap-x-14 medium-15 px-2 py-1'}`}
                            menuOpened={menuOpened} toggleMenu={toggleMenu}
                    />
                </div>
                {/* Right Side   */}
                <div className='flex-1 flex items-center  justify-end gap-x-3 sm:gap-x-10'>
                    <CgMenuLeft className='text-2xl xl:hidden cursor-pointer' onClick={toggleMenu}/>
                    <Link to={'/cart'} className='flex relative'>
                        <RiShoppingBag4Line className='text-[33px] bg-secondary text-primary p-1.5 rounded-full'/>
                        <span className='bg-primary ring-1 ring-slate-900/5 medium-14 absolute left-5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md'>
                            {cartCount}
                        </span>
                    </Link>
                   <div className='relative group'>
                       <div className='' >
                           {token ? (<div><TbUserCircle className='text-[29px] cursor-pointer'/></div>) : (
                               <button className='btn-outline flexCenter gap-x-2'
                                        onClick={() => navigate ('/login')}
                               >
                                   Login <RiUserLine/>
                               </button>
                           )}
                       </div>
                       {token && <>
                            <ul className='bg-white p-1 w-32 ring-1 hidden ring-slate-900/5 rounded absolute right-0 top-7 group-hover:flex flex-col regular-14 shadow-md'>
                                <li className='p-2 rounded text-tertiary hover:bg-primary cursor-pointer'>Orders</li>
                                <li className='p-2  rounded text-tertiary hover:bg-primary cursor-pointer'>Logout</li>
                            </ul>
                       </>}
                   </div>
                </div>
            </div>
        </header>
    )
}

// function for div relative group onClick={() => !token && navigate('/login')}
