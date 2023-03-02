import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import Popup from '../../Components/Popup/Popup'
import Product2 from "../../Components/TempFour/Product3";
import Product2TempOne from "../../Components/Product/Product2TempOne";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import "./show-dish.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ProductDetailsScel from "../../Components/Skelaton/ProductDetailsScel";
import { cartActions } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Footer from "../../Components/Footer/Footer";
import TempTwoProdThree from "../../Components/TempTwo/TempTwoProdThree";
window.scrollTo(0, 0);

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ShowDish = (props) => {
    const lang = Cookies.get("lang");
    const dispatch = useDispatch();
    /*eslint-disable-next-line*/
    const [active, setActive] = useState(false);
    const [dish, setDish] = useState(null);
    const [data, setData] = useState(null);
    const [additions, setAdditions] = useState([]);
    const [translation, setTranslation] = useState(null);
    const mainData = useSelector((state) => state.mainData.data);
    const cart = useSelector((state) => state.cart.cart);
    let query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!lang) {
            navigate("/");
            return;
        }
        if (mainData && !query.get("total")) {
            axios
                .get(
                    `${process.env.REACT_APP_API}/dish-details/${lang}/${
                        mainData.countryname
                    }/${query.get("key")}`
                )
                .then((res) => {
                    setDish(res.data.data.dish);
                    setData(res.data.data.related_dishes);
                    setAdditions(res.data.data.additions);
                    setTranslation(res.data.data.translation);
                });
            return;
        }
        if (cart && query.get("total")) {
            let dishexist = cart.dishes.filter(
                //eslint-disable-next-line
                (d) => d.key == query.get("key")
            )[0];
            setDish(dishexist);
            if (dishexist) {
                setAdditions(dishexist.additions);
            } else {
                navigate("/qr-menu");
            }
        }
    }, [navigate, query, mainData, cart, lang]);

    function addToCartHandler(dish) {
        dispatch(cartActions.addToCart(dish));
        setActive(true);
    }
    function editToCartHandler(dish) {
        dispatch(cartActions.editItem(dish));
        setActive(true);
    }

    return (
        <>
            <Navbar />
            {dish&&translation&&mainData? (
                <>
                    {mainData.temp === "1" ? (
                        <Product2TempOne categ={dish} hide={true} />
                    ) : 
                    mainData.temp === "2" ? (
                        <TempTwoProdThree categ={dish} hide={true} />
                    ) :
                    (
                        <Product2 />
                    )}
                    <ProductDetails
                        edit={query.get("total") ? true : false}
                        addToCartHandler={addToCartHandler}
                        editToCartHandler={editToCartHandler}
                        data={data}
                        dish={dish}
                        additions={additions}
                        setActive={setActive}
                        translation= {translation}
                    />
                </>
            ) : 
                <ProductDetailsScel />
            }
            {dish && mainData && mainData.ordertoggle === 0?<Footer margin={"-75px"}/>:null}
            {/* <Popup active={active} setActiveMessage={setActive} title="Your item have beed added successfully to your cart"/> */}
        </>
    );
};

export default ShowDish;
