import React from "react";
import { Product } from "../../../shared/apiModels/products.model";
import MenuProducts from "../MenuProduct/MenuProduct";
import './MenuProductsList.scss'

export default class MenuProductsList extends React.Component<{products: Array<Product>}, {}> {
  render() {
    return (
      <div className="menuProductsList">
        {this.props.products.map(product => <MenuProducts product={product}></MenuProducts>)}
      </div>
    )
  }
}
