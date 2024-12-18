import React from 'react'
import Title from "./Title.jsx";
import {TbTruckReturn} from "react-icons/tb";
import about from '../assets/book_1.png'
import {RiSecurePaymentFill} from "react-icons/ri";
import {BiSupport} from "react-icons/bi";

const About = () => {
    return (
        <section className='max-padd-container py-12 xl:py-24'>
            {/*container*/}
            <div className='flexCenter flex-col gap-16 xl:gap-8 xl:flex-row'>
            {/* left side   */}
                <div className='flex-1'>
                    <Title title1={"Unveilling Our"} title2={"Store`s key features!"} titleStyles={'pb-10'} paraStyles={'!block'}/>
                    <div className='flex flex-col gap-y-4 items-start'>
                        <div className='flexCenter gap-x-4'>
                            <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                                <TbTruckReturn className='text-2xl'/>
                            </div>
                            <div>
                                <h4 className='medium-18'>Easy Returns Process</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam nemo rem
                                    repudiandae!</p>
                            </div>
                        </div>
                        <div className='flexCenter gap-x-4'>
                            <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                                <RiSecurePaymentFill className='text-2xl'/>
                            </div>
                            <div>
                                <h4 className='medium-18'>Secure Payment Options</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam nemo rem
                                    repudiandae!</p>
                            </div>
                        </div>
                        <div className='flexCenter gap-x-4'>
                            <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                                <BiSupport className='text-2xl'/>
                            </div>
                            <div>
                                <h4 className='medium-18'>Live Customer Support</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam nemo rem
                                    repudiandae!</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* right side   */}
                <div className='flex-1 flexCenter'>
                    <div className='bg-secondaryOne flexCenter p-24 max-h-[33rem] max-w-[33rem] rounded-3xl'>
                        <img src={about} alt='about'  height={244} width={244} className='shadow-2xl shadow-slate-900/50 rounded-lg'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
