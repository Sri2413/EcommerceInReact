import React from "react";
import { Routes, Route } from "react-router-dom";
import Land from "./Land";
import Lets from "./Lets";
import Order from "./Order";
import ThankYou from "./ThankYou";
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Land />} />
      <Route path="/shop" element={<Lets />} />
      <Route path="/order" element={<Order />} />{" "}
      <Route path="/thankyou" element={<ThankYou />} />{" "}
    </Routes>
  );
}
