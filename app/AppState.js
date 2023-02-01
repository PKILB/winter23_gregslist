import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car} */
  car = null

  /** @type {import('./Models/House').House} */
  houses = [
    new House(
    {
      year: '1974',
      name: 'Mid-Century Modern Single Family Home',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000, 
      description: 'Newly renovated mid-century modern home', 
      imgUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
      
    }
  ),
  new House(
    {
      year: '1900',
      name: 'Early 19th Century Modern Single Family Home',
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1050,
      price: 175000, 
      description: 'Mid-century modern home', 
      imgUrl: 'https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  )
  ]

  /** @type {import('./Models/House').House} */
  house = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
