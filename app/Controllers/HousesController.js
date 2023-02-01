import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { House } from "../Models/House.js"







function _drawHouses() {
  console.log('I am working')
  let template = ''
  appState.houses.forEach(house => template += house.HouseCardTemplate)
  setHTML('house-listings', template)
  ;
}

export class HousesController {


  constructor() {
    // console.log('Hello this is the houses Controller')
    this.show()
    appState.on('cars', _drawHouses)
  }

  show(){
    // console.log('TODO houses')
    _drawHouses()
  }

}
