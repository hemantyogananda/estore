import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/product";
import "./_sidebar.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((obj) => obj);

  useEffect(() => {
    dispatch(actions.getProductCategories());
  }, []);
  console.log("CATEGORIES", product);

  return (
    <div>
      <div className="sidebar_category">
        <div className="section-title">
          <h4>Categories</h4>
        </div>
        {product.categories.map((item, index) => {
          return (
            <div className="category_accordian" key={index}>
              <div className="accordian">
                <div className="card">
                  <div className="card-heading">
                    <a>{item.Category}</a>
                  </div>
                  <div className="card-body">
                    <ul>
                      {item.SubCategory.map((subitem, index) => (
                        <li key={index}>
                          <a href="#">{subitem.Name} </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
