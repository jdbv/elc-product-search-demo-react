/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import productsEndpoints from '../../shared/api/products.endpoints';
import { Product } from "../../shared/apiModels/products.model";

import './Menu.scss'
import MenuProductsList from './MenuProductsList/MenuProdutsList';

class Menu extends React.Component<{}, {showingSearch: boolean, searchProducts: Array<Product>}> {

  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super({});
    this.state = {
      showingSearch: false,
      searchProducts: []
    };
  }

  componentDidMount() {
    const products = productsEndpoints.getAllProducts();
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e: any) {
    e.preventDefault();
    this.setState({ showingSearch: !this.state.showingSearch });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  async onSearch(e: React.ChangeEvent<HTMLInputElement>) {
      
    // Start Here
    // ...
    const products = await productsEndpoints.getFilteredProductsByName(e.target.value);
    this.setState({ searchProducts: products });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   * 
   * @returns JSX
   * @memberof App
  */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">HOLIDAY</a>
              <a href="#" className="nav-item">WHAT'S NEW</a>
              <a href="#" className="nav-item">PRODUCTS</a>
              <a href="#" className="nav-item">BESTSELLERS</a>
              <a href="#" className="nav-item">GOODBYES</a>
              <a href="#" className="nav-item">STORES</a>
              <a href="#" className="nav-item">INSPIRATION</a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
          <input type="text" onChange={(e) => this.onSearch(e)} />
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
          <MenuProductsList products={this.state.searchProducts}></MenuProductsList>
        </div>
      </header>
    );
  }
}

export default Menu;