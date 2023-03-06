import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie'
import Ads from "../../Components/Ads/Ads";
import AsideMenu from "../../Components/AsideMenu/AsideMenu";
import FeedBack from "../../Components/FeedBack/FeedBack";
import Footer from "../../Components/Footer/Footer";
import MainTitle from "../../Components/Helpers/MainTitle";
import MainSlider from "../../Components/MainSlider/MainSlider";
import Navbar from "../../Components/Navbar/Navbar";
import Product2TempOne from "../../Components/Product/Product2TempOne";
import Product2 from "../../Components/TempFour/Product2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductTwo from "../../Components/Skelaton/ProductTwo";
import TempThreeProdTwo from "../../Components/TempThree/TempThreeProdTwo";
import TempTwoProdTwo from "../../Components/TempTwo/TempTwoProdTwo";
import MenuGallery from "../../Components/MenuGallery/MenuGallery";
import TempThreeProdOneS from "../../Components/Skelaton/TempThree/TempThreeProdOneS";
import TempFive from "../../Components/Skelaton/TempFive";
import ProdFourTwo from "../../Components/Skelaton/TempFour/ProdFourTwo";
import TitleSek from "../../Components/Skelaton/TitleSek";
import ProdTempThree from "../../Components/Skelaton/TempTwo/ProdTempThree";
import Category from "../../Data/Category";
const Home = () => {
    let lang = Cookies.get("lang")
    let [active, setActive] = useState(false);
    let [feedActive, setFeedActive] = useState(false);
    const [bestSell, setBestSel] = useState(null);
    const [categ, setCateg] = useState(null);
    const [asidedata, setAsideData] = useState(null);
    const [title1, setTitle1] = useState(null);
    const [title2, setTitle2] = useState(null);
    const [menu, setMenu] = useState(null);
    const [adstrans, setAdsTrans] = useState(null);
    const mainData = useSelector((state) => state.mainData.data);
    const navigate = useNavigate();
    function activeHandler() {
        setActive(!active);
    }
    function feedActiveHandler(e) {
        if (!feedActive) {
            e.preventDefault();
        }
        setFeedActive(!feedActive);
    }
    

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (!lang) {
    //         navigate("/");
    //         return;
    //     }
    //     if (mainData) {
    //         return axios.get(`${process.env.REACT_APP_API}/home-page/${mainData.countryname}/${lang}`)
    //         .then(res => {
    //             let category = res.data.data.main_categories;
    //             let ads = res.data.data.advertises;
                
    //             ads.forEach(ad => {
    //                 category.splice(ad.after_category_number,0,ad)
    //             })
    //             setBestSel(res.data.data.best_sale_dishes);
    //             setCateg(category);
    //             setTitle1(res.data.data.mostsale_title)
    //             setTitle2(res.data.data.categories_categories)
    //             setAsideData(res.data.data.aside)
    //             setMenu(res.data.data.menuimages)
    //             setAdsTrans(res.data.data.aside.reanslation.ad)
    //             console.log(category); 
    //         })
    //     }
    // }, [mainData,navigate, lang]);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!lang) {
            navigate("/");
            return;
        }
        if (mainData) {
            
            setCateg(mainData.category);
            setTitle1(mainData.mostsale_title)
            setBestSel(mainData.best_sale_dishes);
            setTitle2(lang=="en"?mainData.categories_categoriesEn:mainData.categories_categoriesAr)
            // setAsideData(res.data.data.aside)
            // setMenu(res.data.data.menuimages)
            // setAdsTrans(res.data.data.aside.reanslation.ad)
        }
    }, [mainData, lang]);


    return (
        <>
            <Navbar logo={true} activeHandler={activeHandler} />
            {asidedata?<AsideMenu
                active={active}
                activeHandler={activeHandler}
                feedActiveHandler={feedActiveHandler}
                asidedata={asidedata}
            />:null}
            {/* <div className="main__slider">
                {mainData && mainData.temp !== "5"&& title1 ?<MainTitle title={title1} />:<TitleSek />}
                <MainSlider lang={lang}  data={bestSell}/>
            </div> */}
            <div className="category">
            {mainData && mainData.temp !== "5"&&title2 ?<MainTitle title={title2} margin={true}/>:<TitleSek />}
                {Category&&mainData
                    ? Category.map((c,i) => {
                            return( 
                                mainData.temp === "1" ?
                                <Product2TempOne
                                    categ={c}
                                    key={c.key}
                                />: 
                                mainData.temp === "2" ?
                                <TempTwoProdTwo
                                    categ={c}
                                    key={c.key}
                                />: 
                                mainData.temp === "3"?<TempThreeProdTwo 
                                    categ={{...c, title: lang == "ar"?c.titleAr:c.titleEn}} 
                                    key={c.key} 
                                />:
                                mainData.temp === "4"?<Product2 
                                    categ={c} 
                                    key={c.key} 
                                />:null
                            )
                        })
                        :mainData?<>
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                            {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourTwo />:null}
                        </>:null
                } 
            </div>
            
            {
                mainData && mainData.temp === "5" && menu? 
                <>
                    {menu.map(m => <MenuGallery photo={m} key={m.image}/>)}
                </>:mainData && mainData.temp === "5" && !menu?<><TempFive /><TempFive /><TempFive /><TempFive /></>:null
            }

            <FeedBack
                feedActive={feedActive}
                feedActiveHandler={feedActiveHandler}
            />
            <Footer />
        </>
    );
};

export default Home;
