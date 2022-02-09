import * as actionTypes from "./types";

const productCategories = [
  {
    Id: 1,
    Category: "Kids",
    SubCategory: [
      {
        Id: 1,
        Name: "Dresses",
      },
      {
        Id: 2,
        Name: "Jacket",
      },
    ],
  },
  {
    Id: 2,
    Category: "Men",
    SubCategory: [
      {
        Id: 1,
        Name: "Tshirt",
      },
      {
        Id: 2,
        Name: "Jacket",
      },
    ],
  },
];

const product = [
  {
    id:1,
    imageSrc:require('../../../assets/img/shop/shop-1.jpg'),
    name:'Product 1',
    price:'$10.00'
  },
  {
    id:2,
    imageSrc:require('../../../assets/img/shop/shop-2.jpg'),
    name:'Product 2',
    price:'$20.00'
  },
  {
    id:3,
    imageSrc:require('../../../assets/img/shop/shop-3.jpg'),
    name:'Product 3',
    price:'$30.00'
  }
]

export const getProductCategories = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_CATEGORY,
    data: productCategories,
  });
};

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT,
    data: product
  });
};