let inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex((item) => item.name === productName.toLowerCase());
}

function addProduct(product) {
  let name = product.name.toLowerCase();
  let index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: product.quantity,
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  let name = productName.toLowerCase();
  let index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  let product = inventory[index];

  if (quantity > product.quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${product.quantity}`,
    );
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(`Remaining ${name} pieces: ${product.quantity}`);
  }
}
