import React from "react";

const TopTotal = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alertIcon1">
              <i className="fas fa-usd-circle txtIcon1"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Sales</h6> <span>$22,678</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alertIcon2">
              <i className="fas fa-bags-shopping txtIcon2"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Orders</h6>
              <span>130</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alertIcon3">
              <i className="fas fa-shopping-basket txtIcon3"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              <span>70</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
