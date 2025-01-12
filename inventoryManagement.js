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

// logFirstProduct
function logFirstProduct(products) {
  console.log(products [0]);
}
logFirstProduct(products)

// addProduct
function addProduct(array, productName) {
  array.push(productName); // adds product to the array 
  console.log(array)
}
addProduct(products, "Mouse")

// updateProductName
function updateProductName (array, position,reName) {
  array[position] = reName
  console.log( "Update Product Name: ", reName)
}
updateProductName(products, 2, "InEar Headphones")

// removeLastProduct
function removeLastProduct(array) {
  array.pop();
  console.log(array)
}
removeLastProduct(products)