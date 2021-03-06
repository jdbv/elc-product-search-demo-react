const productssMock = require('../../db-mocks/products.json');

exports.getProducts = (res, req) => {
  req.json(productssMock);
  req.end();
};

exports.getProductById = (res, req) => {
  const productId = res.params.productId;
  const product = productssMock.find((product) => product.id === productId);

  req.json(product);
  req.end();
};