

export class House { 
    constructor(data) {
        // this.id = generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HouseCardTemplate() {
        return /*html*/`
        <div class="col-md-6 my-3">
        <div class="card elevation-3" >
            <img
            src="${this.imgUrl}"
            alt="${this.name}" class="rounded">
            <div class="pt-3">
            <div class="text-center">
            <p>${this.name}</p>
            </div>
            <div class="px-2">
            <p>Sq Ft: ${this.sqft}</p> 
            <p><b>Price: $${this.price}</b></p>
            </div>
            </div>
        </div>
        </div>
        
        `
    }
        
}
