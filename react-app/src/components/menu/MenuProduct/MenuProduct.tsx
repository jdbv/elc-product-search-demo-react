import React from "react";
import { Product } from "../../../shared/apiModels/products.model";
import { loadAsset } from "../../../shared/utils/loadAsset";
import './MenuProduct.scss';

export default class MenuProducts extends React.Component<{product: Product}, {}> {
  render() {
    return (
      <div className="menuProduct">
        <div className="productImg">
          <img src={loadAsset(`${this.props.product.picture}`)}></img>
        </div>
        <div className="productDecription">
          <p className="productName">{this.props.product.name}</p>
          <p className="productPrice">{`$${this.props.product.price}`}</p>
        </div>
      </div>
    )
  }
}
