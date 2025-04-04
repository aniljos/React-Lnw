// type/interface/class

// export class Product{

//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     imageUrl: string;

//     constructor(id: number, name: string, price: number, description: string, imageUrl: string){
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.imageUrl = imageUrl;
//     }
// }

export class Product{

    constructor(public id?: number, public name?: string, public price?: number, 
                        public description?: string, public imageUrl?: string){}
}