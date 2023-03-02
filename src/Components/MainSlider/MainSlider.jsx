import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
import Product1TempOne from '../Product/Product1TempOne';
import Product1 from '../TempFour/Product1';
import ProductOne from '../Skelaton/ProductOne';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import Swiper core and required modules
import './main-slider.scss'

import SwiperCore, {
    Autoplay,
    Pagination
} from 'swiper';
import TempThreeProdOne from '../TempThree/TempThreeProdOne';
import TempTwoProdOne from '../TempTwo/TempTwoProdOne';
import TempThreeProdOneS from '../Skelaton/TempThree/TempThreeProdOneS';
import ProdFourOne from '../Skelaton/TempFour/ProdFourOne';
import ProdTempTwo from '../Skelaton/TempTwo/ProdTempTwo';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);



const MainSlider = (props) => {
    const lang = Cookies.get('lang')
    const swiperRef = useRef(null)
    const temp = useSelector(state => state.temp.temp)
    const mainData = useSelector(state => state.mainData.data)

    return (
        <div className=''
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
            <div className='' >
                <Swiper 
                    ref={swiperRef} 
                    slidesPerView={2}
                    spaceBetween={temp===1?0:0}
                    pagination={true}
                    loop={true}
                    dir={`${lang === "ar"?"rtl":"ltr"}`}
                    //centeredSlides={true}
                    autoplay={{"delay": 1500, "disableOnInteraction": false }}
                >
                    {props.data && mainData?props.data.map(dish => {
                        return (
                            <SwiperSlide className='swiper__slider' key={dish.key}>
                                
                                {
                                    mainData.temp === "1"?<Product1TempOne  dish={dish}/>:
                                    mainData.temp === "2"?<TempTwoProdOne  dish={dish}/>:
                                    mainData.temp === "3"?<TempThreeProdOne  dish={dish}/>:
                                    mainData.temp === "4"?<Product1 dish={dish}/>:null
                                }
                            </SwiperSlide>
                        )
                    }):
                    <>
                        <SwiperSlide className='swiper__slider' >
                            {
                                mainData && mainData.temp === "1"?<ProductOne />:
                                mainData && mainData.temp === "2"?<ProdTempTwo />:
                                mainData && mainData.temp === "3"?<TempThreeProdOneS />:
                                mainData && mainData.temp === "4"?<ProdFourOne />:null
                            }
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slider' >
                            {
                                mainData && mainData.temp === "1"?<ProductOne />:
                                mainData && mainData.temp === "2"?<ProdTempTwo />:
                                mainData && mainData.temp === "3"?<TempThreeProdOneS />:
                                mainData && mainData.temp === "4"?<ProdFourOne />:null
                            }
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slider' >
                            {
                                mainData && mainData.temp === "1"?<ProductOne />:
                                mainData && mainData.temp === "2"?<ProdTempTwo />:
                                mainData && mainData.temp === "3"?<TempThreeProdOneS />:
                                mainData && mainData.temp === "4"?<ProdFourOne />:null
                            }
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slider' >
                            {
                                mainData && mainData.temp === "1"?<ProductOne />:
                                mainData && mainData.temp === "2"?<ProdTempTwo />:
                                mainData && mainData.temp === "3"?<TempThreeProdOneS />:
                                mainData && mainData.temp === "4"?<ProdFourOne />:null
                            }
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slider' >
                            {
                                mainData && mainData.temp === "1"?<ProductOne />:
                                mainData && mainData.temp === "2"?<ProdTempTwo />:
                                mainData && mainData.temp === "3"?<TempThreeProdOneS />:
                                mainData && mainData.temp === "4"?<ProdFourOne />:null
                            }
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slider' >
                            {
                                mainData && mainData.temp === "1"?<ProductOne />:
                                mainData && mainData.temp === "2"?<ProdTempTwo />:
                                mainData && mainData.temp === "3"?<TempThreeProdOneS />:
                                mainData && mainData.temp === "4"?<ProdFourOne />:null
                            }
                        </SwiperSlide>
                    </>}
                </Swiper>
            </div>
        </div>
    )
}

export default MainSlider
