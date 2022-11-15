import { Rates } from "./rates";

export class Users {
    name!: string;
    fmiliya!: string;
    imya!: string;
    otchestvo!: string;
    telNumber!: number;
    password!: number;
    rate!: string;
    id!: number

    constructor(name: string, fmiliya: string, imya: string, otchestvo: string, telNumber: number, password: number, rate: string, id: number) {
        this.name = name
        this.fmiliya = fmiliya
        this.imya = imya
        this.otchestvo = otchestvo
        this.telNumber = telNumber
        this.password = password
        this.rate = rate
        this.id = id
    }
}