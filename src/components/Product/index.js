import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/product";
import "./_product.scss";

// const products = [
//     require("../../assets/img/shop/shop-1.jpg"),
//     require("../../assets/img/shop/shop-2.jpg"),
//     require("../../assets/img/shop/shop-3.jpg"),
//     require("../../assets/img/shop/shop-4.jpg"),
//     require("../../assets/img/shop/shop-5.jpg"),
// ]

const Product = () => {
    const dispatch = useDispatch();
    const { product: { products } } = useSelector((obj) => obj);

    useEffect(() => {
        dispatch(actions.getProducts());
    }, [])

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="col-lg-4 col-md-6">
                <div className="product__item">
                    <div className="product__item__pic">
                        <img className="product__item__pic" src={item.imageSrc} />
                        <ul className="product__hover">
                            <li>
                                <a href={item.imageSrc}>
                                    <span className="fa fa-arrows-alt" />
                                </a>
                            </li>
                            <li>
                                <a href={null}>
                                    <span className="fa fa-shopping-cart" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">{item.name}</a>
                        </h6>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
=======
=======
>>>>>>> f18f15cdc8b180e6fa36ff857be42e0d37e31f89
>>>>>>> e556fd2be0822455b52728f3eefb07ff80907fa4
    
    return (
        <div className="row">
            {products.map((item, index) => (
                <div className="col-lg-4 col-md-6">
                    <div className="product__item">
                        <div className="product__item__pic">
                            <img className="product__item__pic" src={item.imageSrc} />
                            <ul className="product__hover">
                                <li>
                                    <a href={item.imageSrc}>
                                        <span className="fa fa-arrows-alt" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>
                                <a href="#">{item.name}</a>
                            </h6>
                            <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                            <div className="product__price">{item.price}</div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> completed Database for eStore
=======
>>>>>>> f18f15cdc8b180e6fa36ff857be42e0d37e31f89
>>>>>>> e556fd2be0822455b52728f3eefb07ff80907fa4
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;