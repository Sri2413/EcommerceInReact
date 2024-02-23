import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Lets() {
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ecommercecollections")
      .then((response) => {
        console.log(response.data);
        setTask(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    navigate("/order", { state: { selectedProduct: product } });
  };

  const Handle = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <header
          className="Head"
          style={{
            backdropFilter: "blur(5px)",
            position: "fixed",
          }}
        >
          <nav style={{ display: "flex", justifyContent: "center" }}>
            <ul
              className="List"
              style={{
                listStyle: "none",
                display: "flex",
                gap: "180px",
                justifyContent: "space-evenly",
              }}
            >
              <li>Home</li>
              <li>New collections</li>
              <li>About Us</li>
              <li>Services</li>
              <span style={{ fontSize: "20px" }}>
                <BiCart />
                {count}
              </span>
            </ul>
          </nav>
        </header>
      </div>

      <div className="WholeContainer">
        <article>
          {task.map((item, index) => (
            <div className="container" key={index}>
              <div className="product-card">
                {item.img && <img src={item.img} alt="Product" />}
                <br />
                <p className="description">{item.description}</p>
                <p>Rs.{item.Rs}</p>
                <button onClick={Handle}>ADD TO CART</button>
                &nbsp;
                <button className="but" onClick={() => handleBuyNow(item)}>
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </article>
      </div>
    </>
  );
}
