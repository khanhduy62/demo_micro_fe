import faker from 'faker';

const mount = el => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

  el.innerHTML = cartText;
}


// running this file in development mode
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#root-cart')
  if (devRoot) {
      mount(devRoot)
  }
}

export { mount }