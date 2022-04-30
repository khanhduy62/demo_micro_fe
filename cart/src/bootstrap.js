import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

document.getElementById('root-cart').innerHTML = cartText;

const geElement = (value) => {
  return `test value: ${value}`
}

export { geElement }