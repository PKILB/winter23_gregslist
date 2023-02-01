

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
            <p><b>${this.name} ${this.sqft} - $${this.price}</b></p>
        </div>
        </div>
        
        `
    }
        
}
