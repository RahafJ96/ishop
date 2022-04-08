import React from "react";
import TopTotal from "./TopTotal";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";

const Main = () => {
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        <TopTotal />

        <div className="row">
          {/* STATICS */}
          <SaleStatistics />
          <ProductsStatistics />
        </div>
      </section>
    </>
  );
};

export default Main;
