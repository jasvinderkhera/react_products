import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryWise() {
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data.products);
        console.log("categori", data.products);
      });
  }, []);
  return (
    <div className="container">
        <h1 className="mb-3 text-center">{id}</h1>
      <div className="row">
        {category.length > 0
          ? category.map((details) => (
              <div className="col-md-3 border p-2">
                <img src={details.thumbnail} alt="" height={150} width={150} />
                <h5>{details.title}</h5>
                <span>{details.category}</span>
                <p>{details.description}</p>
                <span className="fw-bold">₹{details.price}</span>
              </div>
          ))
          : ""}
      </div>
    </div>
  );
}

export default CategoryWise;
