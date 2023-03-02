import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Product2 from "../../Components/TempFour/Product2";
import Product2TempOne from "../../Components/Product/Product2TempOne";
import TempThreeProdTwo from '../../Components/TempThree/TempThreeProdTwo'
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductTwo from '../../Components/Skelaton/ProductTwo'
import Cookies from "js-cookie";
import TempTwoProdTwo from "../../Components/TempTwo/TempTwoProdTwo";
import TempThreeProdOneS from "../../Components/Skelaton/TempThree/TempThreeProdOneS";
import ProdFourTwo from "../../Components/Skelaton/TempFour/ProdFourTwo";
import ProdTempThree from "../../Components/Skelaton/TempTwo/ProdTempThree";
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Category = (porps) => {
    let lang = Cookies.get('lang');
    let query = useQuery();
    const navigate = useNavigate();
    const mainData = useSelector((state) => state.mainData.data);
    const [data, setData] = useState(null);
    const [title, setTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!query.get("key")) {
            navigate("/");
            return;
        }
        axios
            .get(
                `${process.env.REACT_APP_API}/sub-categories/${lang}/${query.get(
                    "key"
                )}`
            )
            .then((res) => {
                setData(res.data.data.categories);
                setTitle(res.data.data.category);
            });
    }, [navigate, query, lang]);

    return (
        <>
            <Navbar title={title} />
            <div className="categ__wrapper">
                {data && mainData? data.map((categ) =>
                    mainData.temp === "1"?<Product2TempOne  
                            key={categ.key} 
                            categ={categ} 
                        />:
                    mainData.temp === "2"?<TempTwoProdTwo  
                            key={categ.key} 
                            categ={categ} 
                        />:
                    mainData.temp === "3"?<TempThreeProdTwo  
                            key={categ.key} 
                            categ={categ} 
                        />:
                        mainData.temp === "4"?<Product2  
                            key={categ.key} 
                            categ={categ} 
                        />:null
                ):mainData?<>
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
            <Footer />
        </>
    );
};

export default Category;
