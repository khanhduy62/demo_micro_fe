import faker from 'faker';

const mount = el => {

  let product = '';

  for (let i=0; i<3; i++) {
    const name = faker.commerce.productName()
    product += `<div>${name}</div>`
  }

  console.log(product)

  el.innerHTML = product
}

// running this file in development mode
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#root-products')
  if (devRoot) {
      mount(devRoot)
  }
}

export { mount }