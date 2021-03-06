import { first } from "rxjs";

export class Rates {
    name!:string;
    price!:number;
    description!:string;
    features!:[
        first:string,
        second:string,
        third:string,
        fourth:string,
        fifth:string
    ];

    constructor(name:string, price:number = 0, description:string = ' ',  features:[string,string,string,string,string] = [' ',' ',' ',' ',' ']) {
        this.name = name
        this.description = description
        this.price = price
        this.features = features
    }
}
