import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        const categories =  data.products.map(product => product.category)
        const uniqueCategories = [...new Set(categories) ]
        setCategories(uniqueCategories)

      });
  }, []);
  return (
    <div className="container">
      <h4 className="text-center">Products</h4>
      <div className="container-fluid">
        {categories.length != 0
          ? categories.map((items) => {
              return <span className="badge text-dark border border-2 rounded-4 mx-2 fs-5"><Link to={`/products/category/${items}`} className="nav-link">{items}</Link></span>;
            })
          : ""}
        <div className="row">
          {products.length != 0
            ? products.map((items) => {
                return (
                  <div className="col-md-4 border border-2 p-2 my-3 mx-1">
                    <Link to={`/products/${items.id}`} className="nav-link">
                      <h5>{items.title}</h5>
                      <span>{items.category}</span>
                      <img
                        src={items.images[0]}
                        alt=""
                        style={{ height: "50px", width: "50px" }}
                      />
                    </Link>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Products;
