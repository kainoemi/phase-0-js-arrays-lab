// Write your code here



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  // products
};
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct(array) {
  return array[0];
}
console.log(logFirstProduct(products));
// function addProduct();
// function updateProductName();
// function removeLastProduct();
