import Title from "./Title.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";
import {useEffect, useState, useContext} from "react";
// import {books} from '../assets/data.jsx'
import Item from './Item.jsx'
import {ShopContext} from "../context/ShopContext.jsx";


const NewArrivals = () => {

    const [newArrivals, setNewArrivals] = useState([])
    const {books} = useContext(ShopContext)

    useEffect(()=> {
        const data = books.slice(0,7)
        setNewArrivals(data.reverse())
    }, [])
    
    return (
       <section className='max-padd-container bg-white py-16'>
            <Title title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'}/>
            {/*  Swiper  */}
           <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400:{
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    700:{
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200:{
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5'
           >
               {newArrivals.map((book) => (
                   <SwiperSlide key={book._id}>
                       <Item book={book}/>
                   </SwiperSlide>
               ))}
           </Swiper>
       </section>
    )
}
export default NewArrivals
