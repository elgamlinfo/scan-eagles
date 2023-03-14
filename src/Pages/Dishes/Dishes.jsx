import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Product1 from '../../Components/TempFour/Product1'
import ProductTwo from "../../Components/Skelaton/ProductTwo";
import './dishes.scss'
import Product3TempOne from "../../Components/Product/Product3TempOne";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import TempThreeProdTwo from "../../Components/TempThree/TempThreeProdTwo";
import TempTwoProdTwo from "../../Components/TempTwo/TempTwoProdTwo";
import TempThreeProdOneS from "../../Components/Skelaton/TempThree/TempThreeProdOneS";
import ProdFourOne from "../../Components/Skelaton/TempFour/ProdFourOne";
import ProdTempThree from "../../Components/Skelaton/TempTwo/ProdTempThree";
import DishesData from "../../Data/DishesData";
import ContactBtn from "../../Components/ContactBtn/ContactBtn";
import NewDishes from "../../Components/NewDishes/NewDishes";
import WhatsAppBtn from "../../Components/WhatsAppBtn/WhatsAppBtn";
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Dishes = () => {
    const lang = Cookies.get("lang")
    window.scrollTo(0, 0)
    const mainData = useSelector((state) => state.mainData.data);
    const [data, setData] = useState(null);
    const [title, setTitle] = useState('');
    let query = useQuery();
    const navigate = useNavigate();
    const params = useParams()

    useEffect(() => {
        if (!lang) {
            navigate("/");
            return;
        }
        if(params) {
            setData(DishesData.filter(dish => dish.category === params.id))
        }
        
    }, [navigate, params, mainData, lang]);

    return (
        <>
            <Navbar title={title} />
            <div className={`categ__wrapper ${mainData && mainData.temp !== "4"?'':'flex'}`}>
            {data && mainData?data.map((dish) =>
                    mainData.temp === "1" ?<Product3TempOne  
                            key={dish.key} 
                            dish={dish} 
                            title={title}
                        />: 
                    mainData.temp === "2" ?<TempTwoProdTwo  
                            key={dish.key} 
                            categ={dish} 
                            title={title}
                        />: 
                        mainData.temp === "3"?<NewDishes  
                            key={dish.key} 
                            categ={{...dish, title: lang === "ar"?dish.titleAr: dish.titleEn}} 
                        />:
                        mainData.temp === "4"?<Product1 
                            key={dish.key} 
                            dish={dish} 
                        />:null
                ):
                mainData?<>
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                    {mainData.temp === "1"?<ProductTwo />:mainData.temp === "2"?<ProdTempThree />:mainData.temp === "3"?<TempThreeProdOneS />:mainData.temp === "4"?<ProdFourOne />:null}
                </>:null
                }
                
            </div>
            <Footer />
            <ContactBtn />
            <WhatsAppBtn />
        </>
    );
};

export default Dishes;
